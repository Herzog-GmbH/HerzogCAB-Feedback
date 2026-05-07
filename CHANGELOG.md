# Changelog

All notable changes to HerzogCAB will be documented in this file.

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
- **Bobbin Database** — Completely rebuilt management interface with machine-type filtering (round, square, horizontal, carbon fiber, wire braiding)
- **Material Database** — Completely rebuilt management interface with linear density, diameter and technical properties
- **Color Database** — Completely rebuilt with color picker, Pantone matching and custom palette support
- **Guided Tours** — Ten interactive step-by-step tours covering all modules, accessible via the Help menu
- **First-Run Setup Assistant** — Automatically guides users to configure a writable working directory on first launch
- **Parameter Explorer** — Browse all available data tokens (order, customer, machine, material, product, calculation) for use in print templates

### Improvements

- Order editor reworked across all tabs — machine configuration, braid density, material strand count and production data displayed in full detail
- Calculations can be launched directly from an order with all parameters pre-filled; return button navigates back to the originating order
- Wire braiding machine horn gear cuts are now configurable in machine setup
- New unified icon set across navigation and all modules
- Adjustable font size (Standard / Large) in settings
- Toast notifications for non-blocking status feedback
- Consistent button sizing and styling across all master data modules
- Full translations in 6 languages: German, English, Spanish, Italian, Polish, Chinese

### Bugfixes

- Fixed permission error on first launch when no working directory was configured
- Fixed inline button height inconsistencies in master data forms

---

## HerzogCAB 1.2.0 — 2026-02-26

### New

- **Print Editor** — Drag-and-drop layout editor for custom print templates
- Configurable page margins, grid size and multi-page support
- Company logo element with direct asset assignment
- Carrier table and product table elements with dynamic content
- Save and manage multiple named print templates
- Template is automatically selected on print

### Improvements

- Print preview synchronized with designer zoom and output
- Reworked toolbar previews as cards with visual representations of each element
- Improved rendering, typography and table layout in printed output

### Bugfixes

- Fixed mismatch between print preview and final printed output
- Fixed element resizing, overlap and page management issues
- Fixed logo rendering in final print output

---

<details>
<summary>Previous Releases</summary>

## HerzogCAB 1.1.4 — 2025-12-17

### New

- Additional cylindrical / 3D view for round braids
- Interactive braid rotation
- Stepwise color rotation for carriers
- Extended multi-selection support

### Improvements

- Keyboard shortcuts in the design browser
- Improved multi-selection handling

### Bugfixes

- Fixed printout issue for single-page designs
- Fixed missing designs in root folder
- Fixed UI connection issues

---

## HerzogCAB 1.1.3 — 2025-12-10

### New

- New designer home screen
- Load design button
- Integrated feedback and update options

### Improvements

- Default design on startup
- Print any open design
- Numeric braid binding labels

### Bugfixes

- Fixed working directory issue
- Fixed parameter table printing

---

## HerzogCAB 1.1.2 — 2025-11-27

### New

- Import legacy HerzogCAB Design projects
- Collapsible navigation sidebar
- Reworked history sidebar

### Improvements

- Translation updates
- Navigation layout improvements

### Bugfixes

- Navigation popup fixes
- Product-table coloring fixes

---

## HerzogCAB 1.1.1 — 2025-11-21

### New

- Right-click editing for custom color swatches
- File-system view in product UI

### Improvements

- Swatch layout stability
- Unified styling

### Bugfixes

- Spool editor UI fixes
- Navigation tree fixes

---

## HerzogCAB 1.1.0 — 2025-11-10

### New

- Multi-language support
- Design saving
- Texture coloring
- Extended braid support

### Improvements

- Improved dialog styling
- Improved printing for large braids

### Bugfixes

- Fixed black textures visibility

---

## HerzogCAB 1.0.0 — 2025-10-28

### New

- Bobbin table
- Refactored bobbin mapping
- Round braid bobbins

### Improvements

- Improved zoom and overview rendering

### Bugfixes

- Fixed slot placement in the designer

</details>
