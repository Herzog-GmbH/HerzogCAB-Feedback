# Herzog CAB

Braiding design and calculation software for Herzog braiding machines.

<div align="center">
  <a href="https://www.youtube.com/watch?v=RfBv-kayuIk">
    <img src="https://img.youtube.com/vi/RfBv-kayuIk/maxresdefault.jpg" width="700" alt="HerzogCAB — Product Overview (click to watch on YouTube)">
  </a>
  <br>
  <sub>▶ Click to watch the HerzogCAB product overview on YouTube</sub>
  <br><br>
  <img src="https://img.shields.io/badge/version-1.4.0-blue" alt="Version">
  <img src="https://img.shields.io/badge/status-active-green" alt="Status">
  <img src="https://img.shields.io/badge/platform-Windows-lightgrey" alt="Platform">
</div>

---

## About

HerzogCAB is the all-in-one design, calculation and production-management software for Herzog braiding machines. It combines the classic braid designer and calculation engine with a full set of master-data and order-tracking modules, so the entire workflow — from first design to machine setup on the shop floor — happens in one place.

**Home**

- Personalised start page with activity tracking, favourites and quick actions
- Job-status tiles, upcoming productions and news cards — replacing the previous start-up popups

**Design & Calculation**

- Design round and flat braids with interactive 3D preview
- Perform braid calculations across all major parameters (lay length, reduction, angle, running time, product length, …)
- Texture coloring, stepwise carrier color rotation and Pantone-matched palettes
- RAL Classic and Pantone Solid Coated colour libraries with hex-to-colour search and per-order reference colours

**Master Data**

- Braiding machine database with photos, technical specs, carrier count, RPM, serial number, location, dimensions and attached documents (manuals, drawings, maintenance records)
- Machine park with search, multi-filter (category, status, braid type, location) and sorting; CSV import with images
- Customer database with direct links to orders
- Bobbin, material and colour databases — each with machine-type filtering and technical property tracking
- Multi-profile support for parallel company workspaces, each with its own settings and databases

**Order Management & Production**

- Create and track production orders across the full lifecycle (Draft, Released, In Production, Completed)
- Order length input with automatic projection: bobbin-set count, total runtime and remaining length in the last set — multi-head machines supported
- Launch calculations directly from an order with parameters pre-filled
- Assign machines, materials, bobbins and designs to each order
- Drag-and-drop print editor with customizable templates; production table (order length, bobbin sets, runtimes) included in default order printouts

**Machine-Side Access**

- Built-in web server for tablets or monitors mounted at the braiding machine
- Live occupation preview, stocking table, order view and machine documents — accessible from any browser on the local network
- Password protection with session management

**Updates & Distribution**

- System-wide Windows installer with `Programs & Features` integration, Start menu and desktop shortcut
- In-app update dialog with one-click updates and release notes shown directly inside the application
- Full translations in 6 languages: 🇩🇪 🇬🇧 🇪🇸 🇮🇹 🇵🇱 🇨🇳

The project is actively developed and continuously improved.

---

## How to Contribute

Your feedback helps improve HerzogCAB.

### 🐞 Bug Reports

If you encounter a problem:

1. Go to **Issues**
2. Click **New Issue**
3. Select **Bug Report**

Include:

- Software version (shown in the title bar)
- Windows version
- Steps to reproduce
- Screenshots if possible

---

### 💡 Feature Requests

Have an idea for improving HerzogCAB? Create a **Feature Request** issue and describe your use case.

---

## Development Roadmap

---

## ✅ Version 1.4.0 — Released June 2026

### New Home Area

A personalised start page replaces the previous start-up popups. It shows recently used calculations and orders, favourites, quick actions, a job-status overview, upcoming productions and a news section. The layout is fully customisable and persists per profile.

### Order Length & Production Projection

The total braid length to produce is now entered directly in the order. HerzogCAB automatically derives how many bobbin sets need to be run, the total runtime and the remaining length of the last set. Multi-head machines are supported — the order asks how many heads produce the product (default 1; existing orders are unaffected, no migration required).

The default order print templates have been extended with a production table; existing default templates update automatically on first start, while user-customised templates remain untouched.

### Complete UI Redesign (CalcForm Builder)

All calculation pages are now built declaratively using a new `CalcFormBuilder`. This removes approximately 12,600 lines of boilerplate and gives every page a consistent, modern Soft-Industrial/Neumorphism look. Required fields are highlighted in red; unit converters calculate live while typing.

### Machine Park Extended

- Search bar and multi-filter (category, status, braid type, location) added to the machine fleet view
- New **Location** field per machine; machine dimensions (length/width) with a calculate button
- CSV import for braiding machines including images, with preview and conflict handling
- Multi-select deletion with Ctrl+A / Ctrl-click
- Noticeably faster card view

### Colour Management Reworked

RAL Classic and Pantone Solid Coated colour libraries are now integrated directly. A hex-to-colour search finds the closest match in both libraries. Reference colours can be assigned per order.

### Designer Improvements

The save dialog now shows a folder tree with an explicit name field. A maximum of two designs can be open simultaneously. A load error for previously saved designs has been fixed.

### Language Switch Without Re-Login

Changing the UI language or switching profiles now restarts HerzogCAB automatically without asking for login or profile selection again. The resumed session is recorded in the audit log; explicit logout still requires a fresh login.

### Complete Translations

All texts now appear in all 6 languages (DE/EN/ES/IT/PL/CN), including default print-template names and machine-import strings. Translation files report 0 unfinished entries (2812/2812).

### Bugfixes

- Ply count from the order is now correctly pre-filled in `Material length on bobbin` and `Product diameter`
- ST braider (French inch) conversion corrected to 27 mm
- Crash in `Required material` (use-after-free on a restacked layout) fixed
- Various translation corrections across ES, IT, PL and CN

---

## ✅ Version 1.3.6 — Released May 2026

### Bobbin Master Data Reworked

The bobbin master data editor was overhauled with a focus on accuracy and quality of life:

- Outer diameter, core diameter and winding length are now entered with **1 decimal place** in **0.1 mm steps** (was integer-only).
- Bobbin volume is entered/displayed with **2 decimal places** in **0.01 ccm steps**.
- When a bobbin is selected, its **volume is auto-calculated** from outer diameter, core diameter and winding length — the same formula used by `BobbinVolume::calc` and the Job Editor. Historical bobbins with rounded or zero volumes get a clean value on first open; manual override remains possible.
- A new **calculate-field button** (in the familiar Job-Editor style) recomputes the volume on demand. The styling was extracted into `UiTheme::calcFieldStyleSheet()` so other editors can reuse it.

### Bobbin Combobox Stability (feedback issue #25)

In `Material length on bobbin`, `Running time & bobbin set` and `Core-cover ropes`, the selected bobbin used to fall back to the first list item whenever the page was reopened or the popup was shown. `loadBobbins` now remembers the `BobbinDAO::id` across the refill — exactly like the already-stable material picker.

### Navigation: User Profile Bar (feedback issue #28)

The user profile bar at the bottom of the side navigation no longer remains as a roughly 36 px squeezed stripe when the navigation is collapsed. It is now fully hidden together with the navigation and shows up again when the navigation is expanded.

---

## ✅ Version 1.3.5 — Released May 2026

### User, Role and Profile Administration (new)

A complete administration suite for users, roles, profiles and company data has been added under a dedicated **System Administration** navigation group.

- Users, roles and profiles are stored centrally under `%ProgramData%/HerzogCAB`, independent of the workspace's working directory — multiple workstations can share one user database reliably
- Login is requested **before** the workspace is opened; profile switching restarts the application cleanly to give a consistent state
- Concurrent-write safety via file locks: simultaneous edits from multiple workstations no longer corrupt the user database
- Profile pictures are stored centrally too, so they follow the user across workspaces

### Granular Permissions (new)

Each module in the navigation can now be permitted independently.

- New permissions: **Manage roles**, **Manage company data**, **Open Parameter Explorer**
- The "System Administration" group is visible as soon as the user has at least one of the four management permissions; each sub-entry (Users / Roles / Profiles / Company) is gated individually
- This allows realistic separation of duties — e.g. a managing director with only "Manage company data" sees and edits the company sheet without touching users or roles

### Company Data Module (new)

A dedicated module for the company profile — logo, address, tax & commercial-register data, managing directors and contact details.

- Logo and address are available as `{{company.*}}` placeholders in the print editor — perfect for letterheads and footers
- Stored centrally in `%ProgramData%/HerzogCAB/company.json` so all workspaces on the same machine share one company sheet

### Print Template Auto-Pagination

Print templates now flow across multiple pages automatically with section titles and a unified Herzog table design.

- Each template is stored as its own JSON file under `Printouts/templates/`
- Existing templates migrate automatically on first read

### Mouse-Wheel Safety in Forms

Scrolling over a combobox or spinbox in long dialogs (e.g. "Create new machine") no longer changes the field's value by accident — the wheel always scrolls the surrounding form. Click into a field first to change its value with the keyboard or the field's buttons.

### Translation Polish

- 52 missing Chinese translations added (user / role / profile management strings)
- German translation file cleaned up

---

## ✅ Version 1.3.4 — Released April 2026

### In-App Update Dialog

HerzogCAB can now check for updates from inside the application and apply them with a single click.

- New **Updates** menu entry to check on demand and view release notes directly in the app
- Release notes are fetched from GitHub Pages and shown in German and English
- One-click update launches the maintenance tool, shuts down the web server and background threads cleanly, and replaces the running files
- Automatic background check on startup, with a "no update available" confirmation when the version is up to date
- Full translations for the update dialog and status messages in all six supported languages

### System-Wide Windows Installer

The new Windows installer registers HerzogCAB system-wide so it behaves like any other installed Windows application.

- Entry in Windows **Programs & Features** with publisher, version and install date
- Desktop shortcut and Start menu entry created during installation
- Installer file name now includes the version (e.g. `HerzogCAB_Installer_1.3.4.exe`) for easier distribution and rollback
- Strictly offline: the installer always installs the bundled version and no longer pulls newer packages from the update repository unexpectedly

### Smarter Admin-Rights Handling

- UAC prompt appears **only** during the initial installation
- Maintenance, update and uninstall flows elevate automatically when — and only when — admin rights are needed
- Fixed uninstall from Windows Settings: the maintenance tool now launches reliably with admin rights via an elevation wrapper instead of exiting silently

---

## ✅ Version 1.3.3 — Released April 2026

### Installer Routine & Auto-Update Foundation

HerzogCAB is now delivered through a full offline installer based on the Qt Installer Framework, with the technical foundation for automatic updates.

- Offline Windows installer with a bundled `MaintenanceTool`
- Pre-configured remote repository on GitHub Pages for future updates
- Version number officially bumped to 1.3.3

### Multi-Profile Support

Multiple company workspaces can now be maintained in parallel.

- Switch between profiles without losing data
- Each profile keeps its own settings, databases and working directory

### Web Server — QR Code & Responsive Images

- QR code in the header is now reliably scannable from mobile devices
- IP address selection when multiple network interfaces are present
- Responsive images in the machine view so previews scale correctly on tablets and phones

### macOS Build Pipeline

- `macdeployqt` and DMG creation added as post-link build steps
- Fixed include-casing issues that broke the macOS build
- Resolved a black-screen bug that could appear when closing the application on macOS

### Translation & UI Fixes

- Corrected German/English mix in the lay-length (`Schlaglänge`) dropdown
- Added missing translations for the guided tour, settings dialog, parameter overview and the system tray
- Round-braid machines now allow all carrier configurations (`Besetzungsarten`) in all dialogs

---

## Latest Version: 1.4.0

---

## Release Notes

Earlier releases (1.3.2, 1.3.0, 1.2.0 and older) are documented in the full changelog.

Full changelog → **[CHANGELOG.md](CHANGELOG.md)**
