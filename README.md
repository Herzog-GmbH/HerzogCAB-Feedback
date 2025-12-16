# Herzog CAB Feedback & Issues

Welcome to the official Herzog CAB feedback repository!

Here’s where you can help us improve Herzog CAB by sharing your ideas and reporting any issues.

🚀 How to Contribute

Submit an Issue: Just head over to the Issues tab
 and click on 'New Issue'. Give us a detailed description of your suggestion or the bug you found.

💡 Feature Requests: Use the 'Feature Request' label if you have a cool idea you’d love to see in HerzogCAB.

🐞 Bug Reports: Noticing something off? Let us know so we can fix it quickly.

Thanks for helping us make Herzog CAB better!

Latest Version: 1.1.4


# Changelog / Release Notes

## Herzog CAB 1.1.4 — 2025-12-17

### **New**

- **Additional cylindrical / 3D view for round braids**
  - A new cylindrical 3D-style view has been added to improve spatial understanding of round braids.
  - This view makes braid structures and color progressions easier to analyze.
   <img width="833" height="662" alt="image" src="https://github.com/user-attachments/assets/2fd85d23-219e-422d-ba44-a81905996736" /> 


- **Interactive braid rotation**
  - Braids can now be rotated directly in the view.
  - This allows inspection of the pattern from all sides and improves visual verification of crossings and color shifts.
  - Rotation is controlled via dedicated UI controls without altering braid dimensions.


<p align="center">
  <img src="https://github.com/user-attachments/assets/65ae26d8-c354-43ab-9d00-b38a78f1b079" alt="1216">
</p>

- **Stepwise color rotation for carriers**
  - New controls allow stepwise rotation of carrier colors.
  - This makes it easy to test alternative color layouts and evaluate visual variants quickly.

- **Extended multi-selection support**
  - Multiple designs or folders can now be selected at once.
  - Selected items can be deleted, copied, or moved in a single operation.


### **Improvements**

- **Keyboard shortcuts in the design browser**
  - Common design browser actions are now accessible via keyboard shortcuts.
  - Navigation and daily workflows are significantly faster.
 
- **Extended multi-selection support**
  - Multiple designs or folders can now be selected at once.
  - Selected items can be deleted, copied, or moved in a single operation.



### **Bugfixes**

- **Fixed critical printout issue for single-page designs**
  - Fixed a bug where the parameter table could be empty when printing single-page designs directly to a printer.
  - All parameters are now reliably rendered and printed, matching the PDF export behavior.

- **Fixed missing designs in root folder**
  - Designs located in the root directory of the design browser were not displayed correctly.
  - Root-level designs are now shown as expected.

- **Fixed object connection and UI update issues**
  - Resolved unique-connection errors in the designer.
  - Improved stability of carrier table handlers and related UI updates.

## Herzog CAB 1.1.3 — 2025-12-10
### **New**

- **New designer home screen**
  - The designer now has its own dedicated home screen.
  - On the left, users find a short description explaining how to load braids or create new designs.
  - On the right, all recently edited designs are listed and can be opened directly from this view.

- **New “Load design” button in the designer**
  - The designer now provides a dedicated **“Load design”** button.
  - Clicking it opens the file dialog where you can select and load an existing design.

- **Integrated feedback and update options**
  - New buttons link directly from the application to the Herzog CAB GitHub page, where users can submit feedback, create issues or download the latest version.
  - On startup, Herzog CAB now checks whether the installed version is outdated and whether a newer release is available on GitHub.
  - A new startup message points to the feedback page and thanks users for helping to improve Herzog CAB.

### **Improvements**

- **Clearer designer structure with default design and “Add View”**
  - A default design is now created automatically when the designer starts, so users no longer have to create a first design manually.
  - With the new **“Add View”** button, additional design views can be added and adjusted dynamically.
  - This makes working with multiple designs much more structured, readable and user-friendly.

- **Printing for all open designs**
  - It is now possible to print any of the open designs, not only the very first one.
  - By switching between views, users can explicitly choose which of the open designs should be printed.

- **Extended braid binding labels**
  - Braid bindings now include the numeric notation, for example:
    - Normal **1-1**
    - Tandem **2-2**
    - Half **1-3**
  - This makes it easier to understand the binding type and bobbin distribution at a glance.

- **Adjust braid angle in the designer without losing the design**
  - The braid angle can now be changed directly in the designer without forcing a full redraw that would discard the current design.
  - Pitch and braid angle are automatically updated in the active design.

### **Bugfixes**

- Fixed an issue where the working directory could point to a non-existing folder. The path is now set correctly and the required directory is created reliably.
- Fixed an issue where the braid parameter table in the printout could be empty when printing directly from the application. The table is now properly populated with all parameters.



## Herzog CAB 1.1.2 — 2025-11-27
**New**

- **Import legacy HerzogCAB Design projects**
  - You can now import designs created with the old HerzogCAB Design into the new application.
  - This lets you continue working with existing customer projects instead of recreating them from scratch.

- **New collapsible navigation sidebar with updated icons**
  - The navigation sidebar can now be collapsed to a slim icon bar and expanded again when you need the full tree.
  - Hovering or clicking on an icon in the collapsed bar opens a popup with the entries of that category (e.g. round braid, flat braid, settings)
  - Icons and spacing have been refreshed to make sections easier to recognize and to free up more space for the design view.
 <p align="center"> <img src="docs/navigation-sidebar.gif" alt="Navigation sidebar demo" width="15%"> </p>

- **Reworked history sidebar**
  - History entries now use clearer titles and consistent units for braid angles, speeds, and change-gear values.
  - Large histories can be collapsed, so long imports and calculations stay readable.
  - New toggle icons make it easier to show or hide the history sidebar when you need more space.

### Improvements

- Updated translations for navigation, history, and import dialogs and refreshed the examples in the README.
- Refined navigation labels for design types, JSON entries, change-gear settings, and legacy selections while keeping node widths consistent.
- Polished the layout of the navigation and history sidebars (button sizes, spacing, borders, and highlights) for a more consistent look.

### Bugfixes

- Fixed various issues with the collapsed navigation bar and its popups (headers, alignment of icons and footer, highlight states).
- Resolved product-table coloring issues and aligned custom swatch widths with the narrowed navigation layout.

### Herzog CAB 1.1.1 — 2025-11-21
**New**
- Added right-click editing for custom color swatches so designers can open the color dialog directly from the palette.
- Added a file-system view in the product UI to organize saved designs alongside the feedback workflow.

**Improvements**
- Kept custom swatch sizes stable and aligned the header timestamp padding for a consistent layout.
- Unified conversion radio-button styling and checkbox visibility across designers and editors.
- Refined icons and color adjustments to keep the interface coherent in dark and light themes.

**Bugfixes**
- Fixed spool editor checkbox and radio-button styling regressions and restored missing icons.
- Corrected an XML entity in the main window stylesheet to display assets reliably.
- Resolved navigation tree show/hide issues and gear-slot corrections for half-populated layouts.

### Herzog CAB 1.1.0 — 2025-11-10
**New**
- Introduced multi-language support and updated preview imagery for the product UI and production sheet.
- Implemented initial design saving plus texture coloring, including bobbin numbering in braid previews.
- Added options for trimming top/bottom sections and extended round/tape support up to high bobbin counts.

**Improvements**
- Adjusted labels, font sizes, and dialog styling for clearer overviews and color selection.
- Ensured large braids (49+ bobbins) print on a single page and refreshed iconography for readability.

**Bugfixes**
- Made black textures visible in previews.

### Herzog CAB 1.0.0 — 2025-10-28
**New**
- Added a bobbin table and refactored bobbin mapping into dedicated classes for clarity.
- Brought bobbin visuals into the overview, including coloring horn gears and handing textures to the view.
- Added bobbins for round braids and tape layouts to broaden design coverage.

**Improvements**
- Tuned zoom handling and overview cropping so braid ends render correctly.

**Bugfixes**
- Corrected slot placement in the designer to line up with the proper cutouts.
