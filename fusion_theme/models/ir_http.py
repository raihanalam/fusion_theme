# -*- coding: utf-8 -*-
# Fusion Theme for Odoo 19
# Author: Raihan Hridoy
# License: LGPL-3
from odoo import models

# Allowed values for every selection. Anything else falls back to the first
# entry, so a mistyped system parameter can never break the web client.
# session key -> (system parameter, allowed values)
FUSION_CHOICES = {
    'accent': ('fusion_theme.default_accent',
               ('fusion', 'indigo', 'violet', 'emerald', 'rose', 'amber', 'slate')),
    'mode': ('fusion_theme.default_mode', ('light', 'dark', 'auto')),
    'density': ('fusion_theme.default_density', ('comfortable', 'compact')),
    'corners': ('fusion_theme.default_corners', ('round', 'sharp')),
    'sidebar': ('fusion_theme.default_sidebar', ('expanded', 'collapsed')),
    'icons': ('fusion_theme.menu_icon_style', ('original', 'outline', 'tile', 'text')),
    'formWidth': ('fusion_theme.form_width', ('full', 'standard')),
}

# session key -> (system parameter, default). Stored as the strings 'True' / 'False'.
FUSION_FLAGS = {
    'sidebarSearch': ('fusion_theme.sidebar_search', True),
    'zebra': ('fusion_theme.zebra_rows', True),
    'lockAppearance': ('fusion_theme.lock_appearance', False),
}


def fusion_flag(icp, param, default):
    """Read a True/False system parameter, falling back to ``default``."""
    value = icp.get_param(param)
    if value in (None, False, ''):
        return default
    return str(value).strip().lower() not in ('false', '0', 'no')


class IrHttp(models.AbstractModel):
    _inherit = 'ir.http'

    def session_info(self):
        """Expose the company-wide Fusion settings to the web client."""
        result = super().session_info()
        if self.env.user._is_internal():
            icp = self.env['ir.config_parameter'].sudo()
            config = {}
            for key, (param, allowed) in FUSION_CHOICES.items():
                value = icp.get_param(param, allowed[0])
                config[key] = value if value in allowed else allowed[0]
            for key, (param, default) in FUSION_FLAGS.items():
                config[key] = fusion_flag(icp, param, default)
            result['fusion_theme'] = config
        return result
