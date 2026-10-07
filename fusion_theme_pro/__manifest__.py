# -*- coding: utf-8 -*-
# Fusion Theme Pro for Odoo 19
# Author: Raihan Hridoy
# License: OPL-1
{
    'name': 'Fusion Theme Pro',
    'version': '19.0.1.2.0',
    'category': 'Themes/Backend',
    'summary': 'A modern, interactive backend theme: collapsible apps sidebar, '
               'stage stepper, refined fields and lists, dark mode and live accent colors.',
    'description': """
Fusion Theme Pro
============
A complete redesign of the Odoo 19 backend.

* Collapsible apps sidebar with search, pinned apps, hide / restore apps and keyboard navigation
* Settings > Fusion Theme Pro: menu icon style (original / outline / colored tiles /
  text only), company defaults, form width and list options
* Circle stage stepper in form status bars, refined fields and state chips
* Refined list, kanban, chatter, control panel and dialog styling
* Light, dark and automatic modes, 7 accent colors, compact density
* Appearance panel in the top bar (can be locked by the administrator)
* Bundled Inter font (SIL OFL) - works offline
    """,
    'author': 'Raihan Hridoy',
    'maintainer': 'Raihan Hridoy',
    'license': 'OPL-1',
    'depends': ['web', 'mail'],
    'data': [
        'data/fusion_theme_pro_data.xml',
        'views/layout_templates.xml',
        'views/res_config_settings_views.xml',
    ],
    'assets': {
        # Compile-time brand colors, so every stock component starts teal
        # even before the runtime accent presets are applied.
        'web._assets_primary_variables': [
            ('before', 'web/static/src/scss/primary_variables.scss',
             'fusion_theme_pro/static/src/scss/primary_variables.scss'),
        ],
        'web.assets_backend': [
            # Order matters: tokens first, dark overrides last.
            'fusion_theme_pro/static/src/scss/tokens.scss',
            'fusion_theme_pro/static/src/scss/base.scss',
            'fusion_theme_pro/static/src/scss/navbar.scss',
            'fusion_theme_pro/static/src/scss/sidebar.scss',
            'fusion_theme_pro/static/src/scss/control_panel.scss',
            'fusion_theme_pro/static/src/scss/fields.scss',
            'fusion_theme_pro/static/src/scss/form.scss',
            'fusion_theme_pro/static/src/scss/list.scss',
            'fusion_theme_pro/static/src/scss/kanban.scss',
            'fusion_theme_pro/static/src/scss/chatter.scss',
            'fusion_theme_pro/static/src/scss/customizer.scss',
            'fusion_theme_pro/static/src/scss/dark.scss',
            'fusion_theme_pro/static/src/js/fusion_service.js',
            'fusion_theme_pro/static/src/js/app_icons.js',
            'fusion_theme_pro/static/src/js/app_glyphs.js',
            'fusion_theme_pro/static/src/js/sidebar.js',
            'fusion_theme_pro/static/src/js/customizer.js',
            'fusion_theme_pro/static/src/js/navbar_patch.js',
            'fusion_theme_pro/static/src/xml/sidebar.xml',
            'fusion_theme_pro/static/src/xml/customizer.xml',
            'fusion_theme_pro/static/src/xml/navbar.xml',
        ],
        'web.assets_frontend': [
            'fusion_theme_pro/static/src/scss/login.scss',
        ],
    },
    'images': [
        'static/description/banner.png',
    ],
    'installable': True,
    'price':20,
    'currency': 'USD',
    'auto_install': False,
    'application': False,
}
