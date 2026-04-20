# HerzogCAB

Braiding design and calculation software for Herzog braiding machines.

![Version](https://img.shields.io/badge/version-1.3.4-blue)
![Status](https://img.shields.io/badge/status-active-green)
![Platform](https://img.shields.io/badge/platform-Windows-lightgrey)

---

## About

HerzogCAB is a software tool for designing and calculating braids used on Herzog braiding machines.

It allows users to:

- Design round and flat braids with 3D preview
- Perform braid calculations across all major parameters
- Manage machines, materials, bobbins and customers
- Create and track production orders
- Design custom print templates and generate production documentation
- Manage color palettes and Pantone references

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

## ✅ Version 1.3.2 — Released April 2026

### Built-in Web Server for Machine Displays

HerzogCAB now includes an integrated web server that can be accessed from any browser on the local network — ideal for a tablet or monitor mounted at the braiding machine.

- **Machine landing page** with grid overview of all machines
- **Order view** per machine showing assigned orders with status, customer, material and braid design
- **Occupation overview** rendered as a live image directly from the calculation engine
- **Stocking table** with color IDs and Pantone values
- **Machine documents** tab with grouped display by category, inline preview for PDFs and images
- **Machine info** tab showing name, type, serial number, group, max RPM, carriers and head count
- **Password protection** with login page, session cookies, logout button and automatic session invalidation on password change
- **Configurable display settings** per order section with auto-refresh and scroll preservation
- Modern UI with Herzog branding (#004B93), sticky navbar, SVG icons and responsive layout

### Machine Serial Number and Group

Braiding machines can now store a serial number and a group name.

- New fields in both the machine creation and edit dialogs
- Serial number and group are shown in the job editor, machine overview and order cards
- Available as data tokens in the print editor

### Contextual Toast Notifications

Save and create actions across all editors now display inline toast messages with the name of the affected record — replacing modal dialog boxes.

- Braiding machines: toast with machine name on create and save
- Customers: toast with customer name (or company) on save, create and CSV import
- Bobbins: toast with outer diameter on save and create
- Materials: toast with material name on save and create
- Colors: toast with color name (or code) on create
- Orders: toast on save

### Machine Fleet — Improved Card Layout

The machine card view has been redesigned with a dedicated image header, centered text and badge chips, and compact card dimensions for a tighter grid.

### Navigation Redesign

- Custom navigation delegate with pill-shaped backgrounds, accent bars and font weight hierarchy
- Group headers (Calculations, Master Data) visually separated with tinted full-width rows
- Favorites group highlighted in amber tones with dedicated hover and selection colors
- Modernized module headers across Machine Fleet and Parameter Explorer

### Print Editor Improvements

- Renamed elements for clarity: Klöppel → Besetzung, Flechtmaschinen-Übersicht → Besetzungsübersicht
- New SVG icons for image, date/time and text field elements
- Fixed carrier_table bug that incorrectly displayed the bobbin table

### Order Overview Redesign

- Redesigned as a two-column HTML table with colored section headers
- New "Order" section with order name, number, dates and status
- All labels wrapped in tr() for proper translation support

### Translation Updates

- Module title "Maschinenpark" correctly translated: Machine Fleet (EN), Flota de máquinas (ES), Flotta macchine (IT), Flota maszyn (PL)
- All new toast message strings and web server UI fully translated in all 6 supported languages
- Corrected English translation: "Verkürzung" → Reduction (was Shortening)

---

## ✅ Version 1.3.0 — Released April 2026

### Order Management

Production setups can now be organized using orders with a full timeline-based overview.

- Create and manage production orders
- Filter by status (Draft, Released, In Production, Completed)
- Assign machines, materials, bobbins and designs to each order
- Launch calculations directly from an order with parameters pre-filled

<div align="center">
  <video src="https://github.com/user-attachments/assets/f119d9ae-84d9-46f0-9966-6f3c88ec4216" autoplay loop muted playsinline width="700"></video>
</div>

### Braiding Machine Database

- Create and manage your machine fleet
- Store photos, technical specs, carrier count and RPM
- Attach documents (manuals, drawings, maintenance records)
- Machines are available across the entire application

<div align="center">
  <img width="700" alt="Braiding Machine Database" src="https://github.com/user-attachments/assets/0e8b2a0a-58a3-4a1c-8dc0-a77ad3529101" />
</div>

### Customer Database

- Create, edit and search customers
- Customer records link directly to orders

<div align="center">
  <img width="700" alt="Customer Database" src="https://github.com/user-attachments/assets/5252f286-509d-498b-b33f-d30046838391" />
</div>

### Bobbin Database — Rebuilt

- New management interface with machine-type filtering
- Supports round, square, horizontal, carbon fiber and wire braiding machines

<div align="center">
  <img width="700" alt="Bobbin Database" src="https://github.com/user-attachments/assets/93dd17a4-ac0d-440f-9a55-819a7704d296" />
</div>

### Material Database — Rebuilt

- New management interface
- Store linear density, diameter and other technical properties

<div align="center">
  <img width="700" alt="Material Database" src="https://github.com/user-attachments/assets/bfe3f6b4-8c3a-440b-a3f3-08aae44c2421" />
</div>

### Color Database — Rebuilt

- Color picker with live preview
- Pantone matching
- Custom color palettes

<div align="center">
  <img width="700" alt="Color Database" src="https://github.com/user-attachments/assets/52e087f0-0e22-4519-8655-68a57a3c4543" />
</div>

### Guided Tours

- Ten interactive tours covering every module
- Step-by-step overlay hints directly inside the app

### Further Improvements

- Adjustable font size (Standard / Large)
- New unified icon set
- Toast notifications
- First-run setup assistant for working directory configuration
- Full translations in 6 languages: 🇩🇪 🇬🇧 🇪🇸 🇮🇹 🇵🇱 🇨🇳

---

## ✅ Version 1.2.0 — Released February 2026

### Print Editor

- Drag-and-drop print layout editor
- Customizable tables, company logo and text elements
- Flexible grid layout with configurable page margins
- Live print preview synchronized with the designer
- Generate machine setup sheets and production documents
- Save and manage multiple print templates

<div align="center">
  <video src="https://github.com/user-attachments/assets/47e5ad5b-3be5-4113-ba9f-1da9a94125df" autoplay loop muted playsinline width="700"></video>
</div>

---

## Latest Version: 1.3.4

---

## Release Notes

Full changelog → **[CHANGELOG.md](CHANGELOG.md)**
