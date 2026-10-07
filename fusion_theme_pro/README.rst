Fusion Theme Pro
============

A modern, interactive backend theme for **Odoo 19** (Community and Enterprise).

:Author: Raihan Hridoy
:License: OPL-1
:Depends: ``web``, ``mail``

Features
--------
* **Apps sidebar** - collapsible rail with the company logo, live search, pinned
  apps, keyboard navigation (arrow keys, Enter, Esc) and tooltips when collapsed.
  On phones the standard Odoo burger menu is kept.
* **Pin and hide apps** - hover an app to pin it to the top or hide it. Hidden
  apps move to a "Hidden apps" list (eye icon with a count) at the bottom of the
  sidebar; open it and press the eye button to bring an app back at any time.
  Hidden apps can still be opened from that list and are still found by search.
  Administrators can switch hiding off in Settings. Pins and hidden apps are
  remembered per browser.
* **Menu icon style** (Settings > Fusion Theme Pro) - *Original* shows the standard
  Odoo icons untouched (default); *Outline* uses line icons; *Colored tiles* puts
  the line icons on a colored tile; *Text only* shows names without icons.
* **Form view states** - circle stage stepper in the status bar (completed /
  current / upcoming), accent edge on editable records, refined fields with clear
  hover / focus / required / invalid / read-only states, redesigned smart
  buttons, ribbons and state chips.
* **List view** - quiet header, row hover with accent bar, selected and
  inline-editing states, group headers, footers, tabular numerals.
* **Kanban, chatter, control panel, dialogs, dropdowns, tabs, login page** restyled.
* **Appearance panel** (slider icon in the top bar): light / dark / auto mode,
  7 accent colors, comfortable / compact density, rounded / sharp corners.
  Choices are remembered per user; administrators can publish them as the
  company default.
* Bundled Inter font (SIL OFL) - nothing is loaded from the internet.

Installation
------------
0. Fusion Theme Pro uses its own technical name and settings.
1. Copy the ``fusion_theme_pro`` folder into your addons path.
2. Restart Odoo and update the apps list (developer mode).
3. Install **Fusion Theme Pro**. Hard-refresh the browser (Ctrl+Shift+R).

Settings > Fusion Theme Pro
-----------------------
Administrators configure the whole theme here:

* **Navigation** - menu icon style, hide apps on/off, sidebar start state, app search box.
* **Appearance** - default color mode, accent color, density and corners.
* **Views** - form width (full / standard) and striped list rows.
* **Personalization** - lock the appearance so users cannot change it.

Users see these defaults until they choose their own from the appearance panel
(unless the administrator locked it). The same values are stored as system
parameters named ``fusion_theme_pro.*``.