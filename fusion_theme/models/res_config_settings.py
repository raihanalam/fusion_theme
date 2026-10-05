# -*- coding: utf-8 -*-
# Fusion Theme for Odoo 19
# Author: Raihan Hridoy
# License: LGPL-3
from odoo import api, fields, models

from .ir_http import FUSION_FLAGS, fusion_flag


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    # ------------------------------------------------------------ Navigation --
    fusion_menu_icon_style = fields.Selection(
        [
            ('original', 'Original - the standard Odoo app icons, untouched'),
            ('outline', 'Outline - clean line icons'),
            ('tile', 'Colored tiles - line icons on a colored tile'),
            ('text', 'Text only - app names without icons'),
        ],
        string='Menu icon style',
        default='original',
        config_parameter='fusion_theme.menu_icon_style',
    )
    fusion_default_sidebar = fields.Selection(
        [('expanded', 'Expanded'), ('collapsed', 'Collapsed (icons only)')],
        string='Sidebar',
        default='expanded',
        config_parameter='fusion_theme.default_sidebar',
    )
    fusion_sidebar_search = fields.Boolean(string='App search in the sidebar', default=True)

    # ------------------------------------------------------------ Appearance --
    fusion_default_mode = fields.Selection(
        [('light', 'Light'), ('dark', 'Dark'), ('auto', 'Automatic (follow the device)')],
        string='Color mode',
        default='light',
        config_parameter='fusion_theme.default_mode',
    )
    fusion_default_accent = fields.Selection(
        [
            ('fusion', 'Teal'), ('indigo', 'Indigo'), ('violet', 'Violet'),
            ('emerald', 'Green'), ('rose', 'Rose'), ('amber', 'Amber'), ('slate', 'Slate'),
        ],
        string='Accent color',
        default='fusion',
        config_parameter='fusion_theme.default_accent',
    )
    fusion_default_density = fields.Selection(
        [('comfortable', 'Comfortable'), ('compact', 'Compact')],
        string='Density',
        default='comfortable',
        config_parameter='fusion_theme.default_density',
    )
    fusion_default_corners = fields.Selection(
        [('round', 'Rounded'), ('sharp', 'Sharp')],
        string='Corners',
        default='round',
        config_parameter='fusion_theme.default_corners',
    )

    # ----------------------------------------------------------------- Views --
    fusion_form_width = fields.Selection(
        [('full', 'Full width'), ('standard', 'Standard (centered column)')],
        string='Form view width',
        default='full',
        config_parameter='fusion_theme.form_width',
    )
    fusion_zebra_rows = fields.Boolean(string='Striped list rows', default=True)

    # -------------------------------------------------------- Personalization --
    fusion_lock_appearance = fields.Boolean(string='Lock appearance for all users', default=False)

    # Booleans are stored as 'True' / 'False' strings. Odoo's built-in
    # config_parameter handling deletes the parameter when a box is unchecked,
    # which would silently restore a default of True, so we store them ourselves.
    _FUSION_BOOLEANS = {
        'fusion_sidebar_search': 'sidebarSearch',
        'fusion_zebra_rows': 'zebra',
        'fusion_lock_appearance': 'lockAppearance',
    }

    @api.model
    def get_values(self):
        res = super().get_values()
        icp = self.env['ir.config_parameter'].sudo()
        for field_name, key in self._FUSION_BOOLEANS.items():
            param, default = FUSION_FLAGS[key]
            res[field_name] = fusion_flag(icp, param, default)
        return res

    def set_values(self):
        super().set_values()
        icp = self.env['ir.config_parameter'].sudo()
        for field_name, key in self._FUSION_BOOLEANS.items():
            param = FUSION_FLAGS[key][0]
            icp.set_param(param, 'True' if self[field_name] else 'False')
