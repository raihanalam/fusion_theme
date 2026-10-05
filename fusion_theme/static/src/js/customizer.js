/** @odoo-module **/
// Fusion Theme - appearance panel (systray)
import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { Dropdown } from "@web/core/dropdown/dropdown";
import { _t } from "@web/core/l10n/translation";
import { session } from "@web/session";

export class FusionCustomizer extends Component {
    static template = "fusion_theme.Customizer";
    static components = { Dropdown };
    static props = {};

    setup() {
        this.fusion = useService("fusion_theme");
        this.state = useState(this.fusion.state);
        this.modes = [
            { id: "light", label: _t("Light"), icon: "fa-sun-o" },
            { id: "dark", label: _t("Dark"), icon: "fa-moon-o" },
            { id: "auto", label: _t("Auto"), icon: "fa-adjust" },
        ];
        // Colors mirror the presets in scss/tokens.scss
        this.accents = [
            { id: "fusion", label: _t("Teal"), color: "#0B7F8A" },
            { id: "indigo", label: _t("Indigo"), color: "#4F46E5" },
            { id: "violet", label: _t("Violet"), color: "#7C3AED" },
            { id: "emerald", label: _t("Green"), color: "#15803D" },
            { id: "rose", label: _t("Rose"), color: "#BE123C" },
            { id: "amber", label: _t("Amber"), color: "#B45309" },
            { id: "slate", label: _t("Slate"), color: "#334155" },
        ];
        this.densities = [
            { id: "comfortable", label: _t("Comfortable") },
            { id: "compact", label: _t("Compact") },
        ];
        this.cornerStyles = [
            { id: "round", label: _t("Rounded") },
            { id: "sharp", label: _t("Sharp") },
        ];
    }

    swatchStyle(accent) {
        return `--sw: ${accent.color};`;
    }
}

registry
    .category("systray")
    .add(
        "fusion_theme.customizer",
        {
            Component: FusionCustomizer,
            // Hidden when the administrator locked the appearance.
            isDisplayed: () => !(session.fusion_theme && session.fusion_theme.lockAppearance),
        },
        { sequence: 3 }
    );
