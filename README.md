# Herzog CAB

Braiding design and calculation software for Herzog braiding machines.

![Version](https://img.shields.io/badge/version-1.3.3-blue)
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

## ✅ Version 1.3.3 — Released April 2026

### QR Code IP Selector

The web server settings now include a dropdown to choose which network adapter IP is encoded in the QR code. This prevents virtual adapters (VPN, VirtualBox) from being selected automatically when multiple network interfaces are active. The selection is saved persistently per profile.

### Responsive Web Images

Occupation overview and braid pattern images in the web interface now scale to fit any screen width. Images were previously cut off on the right side on phones and smaller screens.

### Bugfixes

- Fixed incorrect German label "Berechnung [#]" in the result unit dropdown of the Lay Length calculation — now correctly shows "Schlaglänge [mm]"
- Improved QR code reliability: mask pattern selection now uses penalty scoring (N1–N4) per spec, format information bits are placed correctly, and a Reed-Solomon ECC index offset is fixed

---

## ✅ Version 1.3.2 — Released April 2026

### Built-in Web Server for Machine Displays

HerzogCAB now includes an integrated web server that can be accessed from any browser on the local network — ideal for a tablet or monitor mounted at the braiding machine.

<div align="center">
  <img width="700" alt="Web Server Overview" src="https://github.com/user-attachments/assets/bac7f973-8f0c-4723-b1bc-c88a0d2e9b39" />
</div>


- **Machine landing page** with grid overview of all machines
- **Order view** per machine showing assigned orders with status, customer, material and braid design
- **Occupation overview** rendered as a live image directly from the calculation engine
- **Stocking table** with color IDs and Pantone values
- **Machine documents** tab with grouped display by category, inline preview for PDFs and images
- **Machine info** tab showing name, type, serial number, group, max RPM, carriers and head count
- **Password protection** with login page, session cookies, logout button and automatic session invalidation on password change
- **Configurable display settings** per order section with auto-refresh and scroll preservation
- Modern UI with Herzog branding (#004B93), sticky navbar, SVG icons and responsive layout

<div align="center">
  <img width="700" alt="Web Server Mobile" src="https://github.com/user-attachments/assets/3e292555-8b0b-451c-831a-1d8879aad12a" />
</div>

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

## Latest Version: 1.3.3

---

## Release Notes

Full changelog → **[CHANGELOG.md](CHANGELOG.md)**
