# Changelog

All notable changes to HerzogCAB will be documented in this file.

---

## HerzogCAB 1.4.5 — 2026-07-20

### New

- **Winding shop** — Herzog CAB now covers winding as well. Winding machines
  have their own master data and dialog, **winding orders** are a separate
  order type with colour breakdown and carrier table, and seven winding
  calculations are available in their own group. Winding and braiding orders
  can be linked, and the hall planner distinguishes both machine types.
- **Winding time and machine distribution** — the winding order projects the
  winding time, shows the production period from–to and distributes the
  bobbins across several machines; one button spreads them evenly by winding
  position. A calculator determines the target bobbin count from the required
  total length.
- **New braid types in the designer** — square braid (8 up to 36 carriers,
  full, half and tandem), spiral braiders (12 and 20 carriers), packing
  braiders in all sizes with family selection (2-, 3-, 4-track and round),
  plus soutache braid. Every braid pattern is derived from the machine
  kinematics.
- **Carrier track animation** — the designer shows the carrier movement as an
  animation for all braid types, with adjustable speed and the braid pattern
  building up in sync.
- **Storage location management** — data storage locations can be managed in
  system administration.

### Improvements

- **Preview and views** — the preview states material, coverage and braid
  diameter directly in the title line. Full, half and 3D views are available
  as toolbar toggles; round, square and packing braids have reworked 3D views.
- **Designer handling** — braid type and binding are now drop-down lists, the
  design card is compact and scrollable, and nine designer defaults (view,
  animation, saving) are available in the settings. The colour palette is no
  longer limited to 20 colours.
- **Print editor** — the carrier table can output one column per track, the
  cell style switches between colour fill and colour swatch, and the data
  tables are grouped into General, Braiding and Winding. Winding orders can be
  printed.
- **Web view** — the machine overview has a filter bar with search, type
  grouping and order badges; winding orders are shown with colour breakdown
  and distribution table.
- **Linear density** — the result can be switched between tex, dtex, den, Nm
  and Ne.
- **Machine dialogs** — field heights and labels unified, year of manufacture
  as a range, double-click opens editing directly. The settings dialog is
  scrollable and adapts to the screen height.

### Fixes

- **Entra sign-in** — now opens in its own window and closes automatically
  after signing in.
- **Designer** — saving and printing while an animation is running no longer
  produces an empty preview image; colouring and the side panel keep working
  after closing a preview pane.

---

## HerzogCAB 1.4.4 — 2026-06-30

### New

- **Sign-in methods** — in addition to local user management, Herzog CAB now
  supports signing in via **Microsoft Entra ID** (Azure AD) and via
  **LDAP / Active Directory**. Users and groups can be imported from the
  directory and roles assigned automatically based on group membership.

### Improvements

- **Calculation fields** — fields that show a dash (`–`) as a placeholder can
  now be edited directly on click; decimal places are applied correctly.

### Fixes

- **Window focus** — the main window (and the 3D hall-view dialog) now reliably
  come to the foreground after startup / when opened, instead of staying behind
  other windows.

---

## HerzogCAB 1.4.3 — 2026-06-24

### Fixes

- **Factory Planner alignment toolbar** — the alignment toolbar (Edit · Align ·
  Distribute · Line up) above the drawing canvas stretched to fill the entire
  top area. It now keeps a slim, fixed height; the canvas regains the space.
- **Floor plan translations** — the area and object names in the Factory Planner
  floor plan (production area, transport route, storage area, maintenance, office,
  quality control, door, gate, window, stairs, banner/logo, door styles) were
  hard-coded in German and stayed German in every other UI language. They are now
  translatable and shipped in all six languages (DE/EN/ES/IT/PL/CN).

---

## HerzogCAB 1.4.2 — 2026-06-23

### Fixes

- **Bobbin table colours (Issue #44)** — the colour code (ID/name/hex/Pantone)
  shown per carrier could disagree with the actual colour after rotating the
  design's colours. The colour definition now stays correctly linked to its
  colour during rotation and across design panes; designs saved before this fix
  are corrected automatically when reopened (made permanent once saved again).
  Thanks to @Torstenbreckner for the report.
- **Colour palette tooltip** — fixed the dark, hard-to-read tooltip background
  on palette swatches and the colour picker.

---

## HerzogCAB 1.4.1 — 2026-06-23

### New

- **Factory Planner (Production Layout)** — draw hall floor plans with exterior/interior walls, areas, doors, gates, windows and stairs; place catalog machines on the plan (align, distribute evenly, line up, abut, rotate, duplicate); scale, grid/angle snapping and a measuring tool
- **3D Hall View** — view the finished floor plan in 3D, including machines, wall textures, banners/logos and live machine status
- **Floor Plans as Master Data** — the hall floor plan and its assignment are now separate; a single floor plan can hold several assignments/scenarios (actual state and planning variants), created, renamed, duplicated and managed independently
- **Media Library** — central management of all images (braiding machines, wall textures, banners & logos, hall floor plans, company logo) with folders, search, upload and replace; one consistent image picker everywhere

### Improvements

- **Machine Park** — new card and list views with status display
- **Switchable Appearance** — new UI theme, either Flat or Neumorphic, switchable live in settings
- Improved role and user management, including a dedicated permission for the Factory Planner
- Standard Qt dialog buttons (Save / Discard / Cancel) are now localized in all six languages
- Numerous interface refinements

---

## HerzogCAB 1.4.0 — 2026-06-10

### New

- **Home Area** — A personalised start page replaces the previous start-up popups. It shows activity tracking, quick actions, favourites, job-status tiles, upcoming productions and news cards.
- **Order Length & Production Projection** — New `Order length [m]` input in the order data (also editable in the production tab). HerzogCAB automatically derives bobbin-set changes per head, total bobbin sets, total runtime and the remaining length of the last set (new `OrderTotals` workflow step, live recalculation). Multi-head machines are supported: when the selected machine has more than one head, the order asks how many heads produce this order's product (default 1 — existing orders are unaffected, no data migration required).
- **CSV Import for Braiding Machines** — Import machines including images from a CSV file. Multi-select deletion with Ctrl+A / Ctrl-click.
- **Machine Dimensions** — Maintain length, width and location directly in machine administration; a calculate button derives related values automatically.
- **Colour Management Reworked** — RAL Classic and Pantone Solid Coated colour palettes integrated; hex-to-colour search; reference colours per job.

### Improvements

- **Complete UI Redesign** — CalcForm Builder: all calculation pages are now built declaratively, removing ~12,600 lines of boilerplate. A Soft-Industrial/Neumorphism theme is applied consistently throughout the whole application.
- **Machine Park Extended** — Search bar, filters by category, status, braid type and location, and column sorting added. New *Location* field per machine.
- **Designer Improvements** — Save dialog now shows a folder tree with an explicit name field; maximum 2 panes open simultaneously; load bugfix for previously saved designs.
- **Hollow Braid Reworked** — Updated labels and design; new graphical pattern diagram showing the braid structure.
- **Production Data in Print** — The default order templates (`Default Order`, `Default Order (high carrier count)`) now include a production table with order length and the new projection values; existing default templates are migrated automatically on first start (user-renamed/customised templates remain untouched). Production values were also added to the print-editor defaults and the web order view.
- **Clearer Order Editor** — Production data split into two sections (`Production values` / `Projection to order length`); the Order, Material, Bobbin and Product tabs switch to a two-column layout on wide windows (consistent with the Customer tab); machine tab label clarified to `Active carriers (per head)`; significantly smoother window resizing (form grids are only rebuilt when the column mode actually changes).
- **Language Switch Without Re-Login** — Changing the UI language (and switching profiles) restarts the application without asking for login and profile selection again. Implemented as a single-use, 60-second restart ticket (`restart_session.h`) — no persistent session is introduced; explicit logout still requires a fresh login. Resumed sessions are recorded in the audit log (`login.resume_restart`).

### Translations

- Default print-template names are now translatable (`Default Order`, `Default Calculation`, …) — previously they appeared in German in every UI language because lupdate never picked up the `trPt()` helper strings; a `QT_TRANSLATE_NOOP` marker list fixes this permanently.
- All remaining untranslated strings completed in all 6 languages (DE/EN/ES/IT/PL/CN): machine import (incl. the CSV format help), colour editor, licence notice, new order-length/production strings — translation files now report 0 unfinished entries (2812/2812).
- 76 new strings and 21 machine categories translated in all 6 languages (DE/EN/ES/IT/PL/CN).
- Offset error in job/bobbin translations fixed for ES, IT, PL and CN.

### Bugfixes

- **Ply Count Taken From the Order** — The `Material length on bobbin` and `Product diameter` calculation popups now pre-fill the ply count (`Fachung`) from the order's material tab (`material.thread_count_per_strand`) instead of always defaulting to 1.
- **ST Braider Conversion** — `FL / French inch` now converts with 27 mm instead of 10 mm (production speed and runtime pages).
- **Crash in Required Material** — Fixed a use-after-free on a restacked layout.

---

## HerzogCAB 1.3.6 — 2026-05-26

### Improvements

- **Bobbin Master Data Reworked** — Outer/core diameter and winding length now use 1 decimal place with 0.1 mm steps (was integer-only); the bobbin volume field uses 2 decimal places with 0.01 ccm steps.
- **Bobbin Volume Auto-Calculated** — When a bobbin is selected, its volume is now automatically recomputed from outer diameter, core diameter and winding length (same formula as `BobbinVolume::calc` and the Job Editor). This also covers historical bobbins where the volume was stored as a rounded integer or as `0`. The field stays editable for manual overrides.
- **Calculate-Field Button in Bobbin Editor** — A new calculate button in Job-Editor style (`calculate_field_action`) recomputes the volume from the entered dimensions on demand. The reusable helper `UiTheme::calcFieldStyleSheet()` was extracted so other editors can adopt the same control without copy/paste styling.

### Bugfixes

- **Bobbin Combobox Selection Survives Page Changes** *(feedback issue #25)* — In `Material length on bobbin`, `Running time & bobbin set` and `Core-cover ropes`, the selected bobbin no longer falls back to the first list item when the page is reopened or the popup is shown. `loadBobbins` now remembers the `BobbinDAO::id` across the refill, mirroring the already-stable material picker logic.
- **User Profile Bar Hidden When Navigation Collapsed** *(feedback issue #28)* — The user profile bar at the bottom of the side navigation used to remain as a roughly 36 px squeezed stripe when the navigation was collapsed. It is now fully hidden together with the navigation and shows up again when the navigation is expanded.

---

## HerzogCAB 1.3.5 — 2026-05-07

### New

- **User, Role and Profile Administration (new module)** — A complete administration suite for users, roles, profiles and company data has been added under a new "System Administration" navigation group
  - Users, roles, profiles and the user database are stored centrally under `%ProgramData%/HerzogCAB`, independent of the working directory
  - Login is requested before the workspace is opened; profile switching restarts the application cleanly
  - Concurrent-write safety for the central user database via file locks — multiple workstations can now share a single user list reliably
  - Profile pictures stored centrally too, so they follow the user across workspaces
- **Granular Permissions (new)** — Each module in the navigation can now be permitted independently
  - New permissions: `Manage roles`, `Open Parameter Explorer`, plus a separated `Manage company data` right
  - The "System Administration" group is shown when the user has at least one of the four management permissions; each sub-entry (Users / Roles / Profiles / Company) is gated individually
  - Realistic separation of duties, e.g. a managing director with only "Manage company data" sees and edits the company sheet without accessing user or role administration
- **Company Data Module (new)** — Dedicated module for the company profile (logo, address, tax & commercial register, managing directors, contact details)
  - Logo and address available as `{{company.*}}` tokens in the print editor for letterheads and footers
  - Stored centrally in `%ProgramData%/HerzogCAB/company.json` so all workspaces on the same machine share one company sheet
- **Print Template Auto-Pagination** — Print templates now flow across multiple pages automatically; new section titles and Herzog table styling for a consistent look across all printouts
- **Print Templates Stored Per-File** — Each template is now its own JSON file under the workspace's `Printouts/templates/` folder. Existing data migrates automatically on first read.

### Improvements

- **Mouse-Wheel Safety in Forms** — Scrolling over a combobox or spinbox in long dialogs (e.g. "Create new machine") no longer changes the field's value by accident; the wheel always scrolls the surrounding form. Click into a field first to change its value with the keyboard or buttons.
- **Toast Notification on Role Save** — Saving a role now shows the same inline toast as all other editors (`Role "X" has been saved.`), with full translations in all six supported languages
- **Designer / Product Workflow** — Picker dialogs (material, bobbin, …) now use a deferred-apply pattern that no longer resets the selection on show; designer popups gained explicit `Save & Apply` and `Close without saving` actions
- **Length on Bobbin in Product Tab** — The product tab now shows `Material length on bobbin` instead of the no-longer-tracked product length; product weight moved to the end of the production tab; yarn-length feed in the runtime calculation corrected
- **Company Name Now a Global Setting** — The company name is a single workspace-wide setting (administrator-editable in the settings dialog), no longer stored per profile

### Translations

- 52 missing Chinese translations added (user / role / profile management strings)
- German translation file cleaned up where source equals translation

### Bugfixes

- Fixed workspace location being requested on every startup (was carried over from 1.3.4 — settings are now persisted correctly with the new central profile storage)
- Fixed combobox values being reset to index 0 on popup show: material/bobbin lookup now deferred via `QTimer::singleShot(0, …)` to avoid the showEvent race
- Fixed company-data save buttons being gated by the wrong permission (`users.manage` instead of `company.manage`)
- Fixed the role save toast not being translated at runtime due to a wrong translation context

---

## HerzogCAB 1.3.4 — 2026-04-20

### New

- **In-App Update Dialog** — HerzogCAB now checks for updates from inside the application and applies them with one click
  - Release notes shown directly in the dialog (German and English)
  - New `Updates` menu entry to check on demand
  - Automatic background check on startup with a confirmation dialog when the installed version is already current
  - Full translations for dialog and status messages in all six supported languages
- **System-Wide Windows Installer** — The new installer (Qt Installer Framework) registers HerzogCAB in Windows `Programs & Features`
  - Entry with publisher, version and install date
  - Desktop shortcut and Start menu entry created during installation
  - Installer file name now includes the version (e.g. `HerzogCAB_Installer_1.3.4.exe`)
- **Strictly Offline Installer** — The bundled installer always installs exactly the version shipped in the `.exe`, without pulling newer packages from the remote repository unexpectedly

### Improvements

- **Smarter Admin-Rights Handling** — UAC prompt appears only during the initial installation; maintenance, update and uninstall flows elevate automatically when — and only when — admin rights are needed
- **Clean Shutdown Before Update** — Web server and background threads are shut down cleanly during an update so the maintenance tool can replace running files

### Bugfixes

- Fixed uninstall from Windows Settings: the maintenance tool now launches reliably with admin rights via an elevation wrapper and no longer exits silently
- Fixed missing translations for the update dialog and `No update available` messages across all supported languages

---

## HerzogCAB 1.3.3 — 2026-04-15

### New

- **Installer Routine & Auto-Update Foundation** — HerzogCAB is now delivered through a full offline installer based on the Qt Installer Framework
  - Offline Windows installer with a bundled `MaintenanceTool`
  - Pre-configured remote repository on GitHub Pages for future updates
- **Multi-Profile Support** — Multiple company workspaces can now be maintained in parallel; each profile keeps its own settings, databases and working directory

### Improvements

- **Web Server QR Code & Responsive Images** — QR code in the header is now reliably scannable, IP address selection when multiple network interfaces are present, responsive images for tablets and phones
- **macOS Build Pipeline** — `macdeployqt` and DMG creation added as post-link build steps
- Round-braid machines now allow all carrier configurations (`Besetzungsarten`) in all dialogs

### Bugfixes

- Corrected German/English mix in the lay-length (`Schlaglänge`) dropdown
- Added missing translations for the guided tour, settings dialog, parameter overview and the system tray
- Fixed a black screen that could appear when closing the application on macOS
- Fixed `#include` casing for macOS compatibility

---

## HerzogCAB 1.3.2 — 2026-04-13

### New

- **Built-in Web Server** — Integrated HTTP server accessible from any browser on the local network, designed for tablets or monitors at the braiding machine
  - Machine landing page with grid overview of all machines
  - Order view per machine with status, customer, material and braid design
  - Occupation overview rendered as a live image from the calculation engine
  - Stocking table with color IDs and Pantone values
  - Machine documents tab with category grouping, inline PDF/image preview and file download
  - Machine info tab with name, type, serial number, group, max RPM, carriers and head count
  - Password protection with login page, session cookies, logout and automatic session invalidation on password change
  - Configurable display settings per order section, auto-refresh with scroll preservation
  - Modern responsive UI with Herzog branding, sticky navbar and SVG icons
- **Machine Serial Number and Group** — New fields in machine creation and edit dialogs; shown in job editor, machine overview, order cards and available as print editor data tokens
- **Machine Info Tab (Web)** — Dedicated tab in the web interface showing full machine details with cached image

### Improvements

- **Contextual Toast Notifications** — Save and create actions across all editors now show inline toast messages with the name of the affected record, replacing modal dialog boxes
  - Braiding machines: toast with machine name on create and save
  - Customers: toast with customer or company name on save, create and CSV import (with counts)
  - Bobbins: toast with outer diameter on save and create
  - Materials: toast with material name on save and create
  - Colors: toast with color name or code on create
  - Orders: toast on save
- **Machine Fleet Card Redesign** — Machine cards now use a cleaner layout with dedicated image header, centered text and badge chips, compact dimensions for a tighter grid
- **Navigation Redesign** — Custom delegate with pill-shaped backgrounds, accent bars and font weight hierarchy; group headers visually separated; favorites highlighted in amber
- **Module Headers** — Modernized headers across Machine Fleet and Parameter Explorer; updated splash screen background
- **Order Overview** — Redesigned as two-column HTML table with colored section headers, new Order section, all labels translatable
- **Print Editor** — Renamed elements for clarity (Klöppel → Besetzung, Flechtmaschinen-Übersicht → Besetzungsübersicht); new SVG icons; fixed carrier_table showing wrong content
- **Machine Fleet Translations** — Module title "Maschinenpark" correctly translated: Machine Fleet (EN), Flota de máquinas (ES), Flotta macchine (IT), Flota maszyn (PL)
- All new toast strings, web server UI and serial/group labels fully translated in all 6 languages
- Corrected English translation: "Verkürzung" → Reduction (was Shortening)

### Bugfixes

- Fixed navbar logo disappearing after style merge
- Fixed SVG quote escaping in web UI onerror attributes
- Fixed var shadowing bug in web UI that prevented design/occupation rendering
- Removed unintended placeholder texts from serial number and group fields

---

## HerzogCAB 1.3.1 — 2026-04-10

### Improvements

- **Order Overview Redesign** — Redesigned as a two-column HTML table with colored section headers
  - New `Order` block with order name, number, dates and status
  - All labels wrapped for full translation coverage
- **Print Editor Renaming** — `Klöppel` → `Besetzung`, `Flechtmaschinen-Übersicht` → `Besetzungsübersicht`
  - New SVG icons for image, date/time and text elements
  - Updated translations across all supported languages

### Bugfixes

- Fixed `carrier_table` incorrectly showing the bobbin table in the print editor

---

## HerzogCAB 1.3.0 — 2026-04-10

### New

- **Order Management** — Timeline-based card view with status filtering (Draft, Released, In Production, Completed), free-text search and direct links to customer, machine, material and design
- **Braiding Machine Database** — Create and manage machines with photos, technical specs, carrier count, RPM and attached documents (manuals, drawings, maintenance records)
- **Customer Database** — Dedicated module to create, edit and search customers; records link directly to orders
- **Bobbin Database** — Completely rebuilt manage