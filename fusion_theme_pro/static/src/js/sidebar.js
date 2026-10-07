/** @odoo-module **/
// Fusion Theme Pro - apps sidebar
// A fixed rail rendered through the main_components registry. It reads apps from
// the menu service, supports search, pinning, collapse and keyboard navigation.
import { Component, useState, useRef, useEffect } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService, useBus } from "@web/core/utils/hooks";
import { appTileStyle, appInitial } from "./app_icons";
import { appGlyph } from "./app_glyphs";

export class FusionSidebar extends Component {
    static template = "fusion_theme_pro.Sidebar";
    static props = {};

    setup() {
        this.menu = useService("menu");
        this.fusion = useService("fusion_theme_pro");
        this.ui = useState(useService("ui"));
        this.fx = useState(this.fusion.state);
        this.state = useState({ query: "", hiddenOpen: false });
        this.search = useRef("search");
        this.nav = useRef("nav");

        // Re-render when the active app changes.
        useBus(this.env.bus, "MENUS:APP-CHANGED", () => this.render());

        // The page only leaves room for the sidebar while it is visible.
        useEffect(
            (isSmall) => {
                document.body.classList.toggle("fx-has-sidebar", !isSmall);
                return () => document.body.classList.remove("fx-has-sidebar");
            },
            () => [this.ui.isSmall]
        );
    }

    get isCollapsed() {
        return this.fx.sidebar === "collapsed";
    }
    get iconMode() {
        return this.fx.icons;
    }
    get showSearch() {
        return this.fx.sidebarSearch;
    }
    get logoUrl() {
        return "/web/binary/company_logo";
    }
    get allApps() {
        return this.menu.getApps();
    }
    get allowHide() {
        return this.fx.allowHide;
    }
    get hiddenApps() {
        return this.allowHide ? this.allApps.filter((app) => this.isHidden(app)) : [];
    }
    get pinnedApps() {
        if (this.state.query) {
            return [];
        }
        return this.allApps.filter((app) => this.isPinned(app) && !this.isHidden(app));
    }
    get listedApps() {
        const query = this.state.query.trim().toLowerCase();
        if (query) {
            // Search finds every app, hidden ones included.
            return this.allApps.filter((app) => app.name.toLowerCase().includes(query));
        }
        return this.allApps.filter((app) => !this.isPinned(app) && !this.isHidden(app));
    }
    get listLabel() {
        if (this.state.query) {
            return "Results";
        }
        return this.pinnedApps.length ? "All apps" : "Apps";
    }

    pinKey(app) {
        return app.xmlid || app.id;
    }
    isPinned(app) {
        return this.fx.pinned.includes(this.pinKey(app));
    }
    togglePin(app) {
        this.fusion.togglePin(this.pinKey(app));
    }
    isHidden(app) {
        return this.allowHide && this.fx.hidden.includes(this.pinKey(app));
    }
    toggleHide(app) {
        this.fusion.toggleHide(this.pinKey(app));
        if (!this.hiddenApps.length) {
            this.state.hiddenOpen = false;
        }
    }
    toggleHiddenOpen() {
        this.state.hiddenOpen = !this.state.hiddenOpen;
    }
    isActive(app) {
        const current = this.menu.getCurrentApp();
        return Boolean(current) && current.id === app.id;
    }
    href(app) {
        return `/odoo/${app.actionPath || "action-" + app.actionID}`;
    }
    tileStyle(app) {
        return appTileStyle(app);
    }
    initial(app) {
        return appInitial(app);
    }
    glyph(app) {
        return appGlyph(app);
    }
    /** True when the tile shows a letter instead of an icon. */
    showLetter(app) {
        return this.iconMode === "text" || (this.iconMode === "original" && !app.webIconData);
    }

    open(ev, app) {
        // Let the browser handle "open in new tab" gestures.
        if (ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.button === 1) {
            return;
        }
        ev.preventDefault();
        this.menu.selectMenu(app);
    }

    focusApp(index) {
        const links = this.nav.el ? [...this.nav.el.querySelectorAll(".fx-app")] : [];
        if (!links.length) {
            return;
        }
        links[Math.max(0, Math.min(index, links.length - 1))].focus();
    }

    onSearchKeydown(ev) {
        if (ev.key === "Enter") {
            const first = this.listedApps[0];
            if (first) {
                this.menu.selectMenu(first);
            }
        } else if (ev.key === "ArrowDown") {
            ev.preventDefault();
            this.focusApp(0);
        } else if (ev.key === "Escape") {
            this.state.query = "";
        }
    }

    onNavKeydown(ev) {
        if (ev.key !== "ArrowDown" && ev.key !== "ArrowUp") {
            return;
        }
        const links = this.nav.el ? [...this.nav.el.querySelectorAll(".fx-app")] : [];
        const index = links.indexOf(document.activeElement);
        if (index < 0) {
            return;
        }
        ev.preventDefault();
        if (ev.key === "ArrowUp" && index === 0) {
            this.search.el && this.search.el.focus();
        } else {
            this.focusApp(index + (ev.key === "ArrowDown" ? 1 : -1));
        }
    }
}

registry.category("main_components").add("fusion_theme_pro.Sidebar", { Component: FusionSidebar });
