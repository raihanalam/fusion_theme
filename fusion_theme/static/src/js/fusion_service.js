/** @odoo-module **/
// Fusion Theme - preferences service
// Combines two layers:
//  * company settings (Settings > Fusion Theme), delivered in session.fusion_theme:
//    menu icon style, form width, zebra rows, sidebar search, appearance lock,
//    plus the default accent / mode / density / corners / sidebar;
//  * personal choices (appearance panel), kept in localStorage - ignored while
//    the administrator has locked the appearance.
import { reactive } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { browser } from "@web/core/browser/browser";
import { session } from "@web/session";
import { user } from "@web/core/user";
import { _t } from "@web/core/l10n/translation";

const STORAGE_KEY = "fusion_theme.prefs";

// Personal choices (also the company defaults)
export const FUSION_CHOICES = {
    accent: ["fusion", "indigo", "violet", "emerald", "rose", "amber", "slate"],
    mode: ["light", "dark", "auto"],
    density: ["comfortable", "compact"],
    corners: ["round", "sharp"],
    sidebar: ["expanded", "collapsed"],
};
// Company-only choices
const COMPANY_CHOICES = {
    icons: ["original", "outline", "tile", "text"],
    formWidth: ["full", "standard"],
};
const FALLBACK = {
    accent: "fusion",
    mode: "light",
    density: "comfortable",
    corners: "round",
    sidebar: "expanded",
    icons: "original",
    formWidth: "full",
};

function pick(source, choices) {
    const out = {};
    for (const [key, allowed] of Object.entries(choices)) {
        if (source && allowed.includes(source[key])) {
            out[key] = source[key];
        }
    }
    return out;
}

function readStored() {
    try {
        const parsed = JSON.parse(browser.localStorage.getItem(STORAGE_KEY) || "{}");
        return {
            personal: pick(parsed, FUSION_CHOICES),
            pinned: Array.isArray(parsed.pinned) ? parsed.pinned.filter((p) => p != null) : [],
        };
    } catch {
        return { personal: {}, pinned: [] };
    }
}

export const fusionService = {
    dependencies: ["orm", "notification"],

    start(env, { orm, notification }) {
        const company = session.fusion_theme || {};
        const locked = Boolean(company.lockAppearance);
        const defaults = {
            ...FALLBACK,
            ...pick(company, FUSION_CHOICES),
            ...pick(company, COMPANY_CHOICES),
        };
        const stored = readStored();
        const state = reactive({
            ...defaults,
            ...(locked ? {} : stored.personal),
            pinned: stored.pinned,
            sidebarSearch: company.sidebarSearch !== false,
            zebra: company.zebra !== false,
            locked,
        });
        const media = browser.matchMedia ? browser.matchMedia("(prefers-color-scheme: dark)") : null;

        function resolvedMode() {
            if (state.mode === "auto") {
                return media && media.matches ? "dark" : "light";
            }
            return state.mode;
        }

        function apply() {
            const html = document.documentElement;
            const mode = resolvedMode();
            html.dataset.fxAccent = state.accent;
            html.dataset.fxMode = mode;
            html.dataset.fxDensity = state.density;
            html.dataset.fxCorners = state.corners;
            html.dataset.fxIcons = state.icons;
            html.dataset.fxFormWidth = state.formWidth;
            html.dataset.fxZebra = state.zebra ? "on" : "off";
            html.style.colorScheme = mode;
            document.body.classList.toggle("fx-sidebar-collapsed", state.sidebar === "collapsed");
        }

        function persist() {
            if (locked) {
                // Personal choices are not stored while the appearance is locked,
                // but pinned apps still are.
                try {
                    browser.localStorage.setItem(
                        STORAGE_KEY,
                        JSON.stringify({ pinned: [...state.pinned] })
                    );
                } catch {
                    /* storage unavailable */
                }
                return;
            }
            try {
                const { accent, mode, density, corners, sidebar, pinned } = state;
                browser.localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify({ accent, mode, density, corners, sidebar, pinned: [...pinned] })
                );
            } catch {
                // Storage can be unavailable (private mode); the theme still works for this session.
            }
        }

        if (media && media.addEventListener) {
            media.addEventListener("change", () => state.mode === "auto" && apply());
        }
        apply();

        return {
            state,
            get canSetDefaults() {
                return Boolean(user.isSystem);
            },
            set(key, value) {
                if (locked && key !== "sidebar") {
                    return;
                }
                if (FUSION_CHOICES[key] && FUSION_CHOICES[key].includes(value)) {
                    state[key] = value;
                    apply();
                    persist();
                }
            },
            toggleSidebar() {
                this.set("sidebar", state.sidebar === "collapsed" ? "expanded" : "collapsed");
            },
            isPinned(id) {
                return state.pinned.includes(id);
            },
            togglePin(id) {
                const i = state.pinned.indexOf(id);
                if (i >= 0) {
                    state.pinned.splice(i, 1);
                } else {
                    state.pinned.push(id);
                }
                persist();
            },
            reset() {
                Object.assign(state, pick(defaults, FUSION_CHOICES));
                apply();
                persist();
            },
            async saveAsDefault() {
                try {
                    for (const key of Object.keys(FUSION_CHOICES)) {
                        await orm.call("ir.config_parameter", "set_param", [
                            `fusion_theme.default_${key}`,
                            state[key],
                        ]);
                    }
                    notification.add(_t("These settings are now the default for everyone."), {
                        type: "success",
                    });
                } catch {
                    notification.add(_t("Only administrators can change the default appearance."), {
                        type: "danger",
                    });
                }
            },
        };
    },
};

registry.category("services").add("fusion_theme", fusionService);
