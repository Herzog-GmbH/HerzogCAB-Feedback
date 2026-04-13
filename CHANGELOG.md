# Changelog

All notable changes to HerzogCAB will be documented in this file.

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
