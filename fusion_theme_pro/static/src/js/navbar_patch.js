/** @odoo-module **/
// Fusion Theme Pro - gives the NavBar access to the preferences service so the
// sidebar toggle button (see xml/navbar.xml) can collapse and expand the rail.
import { patch } from "@web/core/utils/patch";
import { NavBar } from "@web/webclient/navbar/navbar";
import { useService } from "@web/core/utils/hooks";
import { useState } from "@odoo/owl";

patch(NavBar.prototype, {
    setup() {
        super.setup(...arguments);
        this.fusion = useService("fusion_theme_pro");
        this.fusionState = useState(this.fusion.state);
    },
});
