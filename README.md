# HerzogCAB Feedback & Issues

Welcome to the official HerzogCAB feedback repository!

Here’s where you can help us improve HerzogCAB by sharing your ideas and reporting any issues.

🚀 How to Contribute

Submit an Issue: Just head over to the Issues tab
 and click on 'New Issue'. Give us a detailed description of your suggestion or the bug you found.

💡 Feature Requests: Use the 'Feature Request' label if you have a cool idea you’d love to see in HerzogCAB.

🐞 Bug Reports: Noticing something off? Let us know so we can fix it quickly.

Thanks for helping us make HerzogCAB better!


# Changelog / Release Notes

## HerzogCAB 1.1.2 — 2025-11-27
**New**

- **Import legacy HerzogCAB Design projects**
  - You can now import designs created with the old HerzogCAB Design into the new application.
  - This lets you continue working with existing customer projects instead of recreating them from scratch.

- **New collapsible navigation sidebar with updated icons**

  | | |
  | --- | --- |
  | <img src="docs/navigation-sidebar.gif" alt="Navigation sidebar demo" width="50%"> | The navigation sidebar can now be collapsed to a slim icon bar and expanded again when you need the full tree.  
  Hovering or clicking on an icon in the collapsed bar opens a popup with the entries of that category (e.g. round braid, flat braid, settings).  
  Icons and spacing have been refreshed to make sections easier to recognize and to free up more space for the design view. |

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

### HerzogCAB 1.1.1 — 2025-11-21
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

### HerzogCAB 1.1.0 — 2025-11-10
**New**
- Introduced multi-language support and updated preview imagery for the product UI and production sheet.
- Implemented initial design saving plus texture coloring, including bobbin numbering in braid previews.
- Added options for trimming top/bottom sections and extended round/tape support up to high bobbin counts.

**Improvements**
- Adjusted labels, font sizes, and dialog styling for clearer overviews and color selection.
- Ensured large braids (49+ bobbins) print on a single page and refreshed iconography for readability.

**Bugfixes**
- Made black textures visible in previews.

### HerzogCAB 1.0.0 — 2025-10-28
**New**
- Added a bobbin table and refactored bobbin mapping into dedicated classes for clarity.
- Brought bobbin visuals into the overview, including coloring horn gears and handing textures to the view.
- Added bobbins for round braids and tape layouts to broaden design coverage.

**Improvements**
- Tuned zoom handling and overview cropping so braid ends render correctly.

**Bugfixes**
- Corrected slot placement in the designer to line up with the proper cutouts.
