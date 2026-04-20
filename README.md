<div align="center">
  <img src="assets/herzog-logo.png" width="380" alt="Herzog — Since 1861">
</div>

# HerzogCAB

Braiding design and calculation software for Herzog braiding machines.

<div align="center">
  <a href="https://www.youtube.com/watch?v=RfBv-kayuIk">
    <img src="https://img.youtube.com/vi/RfBv-kayuIk/maxresdefault.jpg" width="700" alt="HerzogCAB — Product Overview (click to watch on YouTube)">
  </a>
  <br>
  <sub>▶ Click to watch the HerzogCAB product overview on YouTube</sub>
</div>

![Version](https://img.shields.io/badge/version-1.3.4-blue)
![Status](https://img.shields.io/badge/status-active-green)
![Platform](https://img.shields.io/badge/platform-Windows-lightgrey)

---

## About

HerzogCAB is the all-in-one design, calculation and production-management software for Herzog braiding machines. It combines the classic braid designer and calculation engine with a full set of master-data and order-tracking modules, so the entire workflow — from first design to machine setup on the shop floor — happens in one place.

**Design & Calculation**

- Design round and flat braids with interactive 3D preview
- Perform braid calculations across all major parameters (lay length, reduction, angle, running time, product length, …)
- Texture coloring, stepwise carrier color rotation and Pantone-matched palettes

**Master Data**

- Braiding machine database with photos, technical specs, carrier count, RPM, serial number, group and attached documents (manuals, drawings, maintenance records)
- Customer database with direct links to orders
- Bobbin, material and color databases — each with machine-type filtering and technical property tracking
- Multi-profile support for parallel company workspaces, each with its own settings and databases

**Order Management & Production**

- Create and track production orders across the full lifecycle (Draft, Released, In Production, Completed)
- Launch calculations directly from an order with parameters pre-filled
- Assign machines, materials, bobbins and designs to each order
- Drag-and-drop print editor with customizable templates for machine setup sheets and production documentation

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

## Latest Version: 1.3.4

---

## Release Notes

Earlier releases (1.3.2, 1.3.0, 1.2.0 and older) are documented in the full changelog.

Full changelog → **[CHANGELOG.md](CHANGELOG.md)**
