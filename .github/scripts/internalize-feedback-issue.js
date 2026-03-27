const fs = require('fs');
const { execFileSync } = require('child_process');

function run(cmd, args, options = {}) {
  return execFileSync(cmd, args, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'], ...options }).trim();
}

const eventPath = process.env.GITHUB_EVENT_PATH;
if (!eventPath) throw new Error('GITHUB_EVENT_PATH missing');
const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));

const issue = event.issue;
const label = event.label?.name;
if (!issue) throw new Error('No issue payload found');
if (label !== 'internalize') {
  console.log(`Ignoring label: ${label}`);
  process.exit(0);
}

const feedbackRepo = process.env.GITHUB_REPOSITORY;
const targetRepo = process.env.TARGET_REPO;
const targetProject = process.env.TARGET_PROJECT_NUMBER;
const targetOwner = process.env.TARGET_PROJECT_OWNER;

if (!targetRepo || !targetProject || !targetOwner) {
  throw new Error('Missing TARGET_REPO / TARGET_PROJECT_NUMBER / TARGET_PROJECT_OWNER env');
}

const labels = (issue.labels || []).map(l => l.name);
const areaLabels = labels.filter(name => name.startsWith('area:'));
const issueTypeLabels = labels.filter(name => ['bug', 'enhancement', 'feature', 'needs-info', 'question', 'documentation'].includes(name));

const internalLabels = [...new Set([
  ...areaLabels,
  ...issueTypeLabels.map(l => (l === 'feature' ? 'enhancement' : l)).filter(l => l !== 'question'),
])];

const sourceUrl = issue.html_url;
const title = issue.title;
const body = issue.body || '';
const author = issue.user?.login || 'unknown';
const labelsMd = labels.length ? labels.map(l => `- ${l}`).join('\n') : '- none';

const internalBody = `## Zusammenfassung\n${title}\n\n## Ursprung / Referenz\n- Feedback-Issue: ${sourceUrl}\n- Eingereicht von: @${author}\n- Quelle: ${feedbackRepo}#${issue.number}\n\n## Ursprüngliche Beschreibung\n${body ? body : '_Keine zusätzliche Beschreibung angegeben._'}\n\n## Übernommene Labels\n${labelsMd}\n\n## Nächster Schritt\n- intern bewerten\n- Duplikat prüfen\n- priorisieren\n- in Project #${targetProject} einordnen\n`;

const createArgs = ['issue', 'create', '--repo', targetRepo, '--title', title, '--body', internalBody];
for (const labelName of internalLabels) {
  createArgs.push('--label', labelName);
}

const issueUrl = run('gh', createArgs);
const issueNumber = issueUrl.split('/').pop();

run('gh', ['project', 'item-add', String(targetProject), '--owner', targetOwner, '--url', issueUrl]);

const comment = `Thanks for the report — we've added this to our internal backlog and will continue tracking the work internally.`;
run('gh', ['issue', 'comment', String(issue.number), '--repo', feedbackRepo, '--body', comment]);

try {
  run('gh', ['issue', 'edit', String(issue.number), '--repo', feedbackRepo, '--remove-label', 'internalize']);
} catch (err) {
  console.log('Could not remove internalize label automatically.');
}

console.log(JSON.stringify({ createdIssue: issueUrl, labels: internalLabels }, null, 2));
