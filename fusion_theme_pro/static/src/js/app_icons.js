/** @odoo-module **/
// Fusion Theme Pro - sidebar icons.
//  * "original" style shows each app's own icon image (nothing is changed).
//  * "line" / "tile" styles use the outlined set below, chosen by the app's
//    module prefix (language independent), then by name as a fallback.
import { markup } from "@odoo/owl";

// 24x24 outline glyphs, drawn with currentColor strokes.
const GLYPHS = {
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    discuss: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    todo: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>',
    contacts: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6"/>',
    crm: '<path d="M4 5h16l-6 8v6l-4-2v-4z"/>',
    sales: '<path d="M3.5 12.5V4.5h8l9 9-8 8z"/><circle cx="8" cy="9" r="1.2"/>',
    dashboards: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="4" rx="1.5"/><rect x="13" y="10" width="7" height="10" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/>',
    pos: '<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9a2.7 2.7 0 005.3 0 2.7 2.7 0 005.4 0A2.7 2.7 0 0020 9"/><path d="M5.5 12v8h13v-8"/><path d="M10 20v-4h4v4"/>',
    invoicing: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/>',
    project: '<rect x="5" y="5" width="14" height="16" rx="2.5"/><path d="M9 5V3.5h6V5M8.5 11h7M8.5 15h4"/>',
    purchase: '<path d="M3 4h2.5l2 11h10.5l2-8H6.5"/><circle cx="9.5" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>',
    inventory: '<path d="M12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z"/><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9"/>',
    manufacturing: '<path d="M3.5 20V9l6 3.5V9l6 3.5V5h5v15z"/><path d="M8 16h1M13 16h1M18 16h1"/>',
    employees: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3 19.5c0-3.2 2.7-5.2 6-5.2s6 2 6 5.2"/><path d="M16 5.6a3.2 3.2 0 010 5.8M18.5 14.6c1.7.7 2.5 2.2 2.5 4.4"/>',
    recruitment: '<circle cx="10" cy="8.5" r="3.5"/><path d="M3.5 20c0-3.5 2.9-5.5 6.5-5.5"/><path d="M18 14v6M15 17h6"/>',
    attendance: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    timeoff: '<circle cx="12" cy="12" r="3.5"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/>',
    expenses: '<path d="M4 7.5A2.5 2.5 0 016.5 5H18v3"/><rect x="4" y="8" width="16.5" height="11.5" rx="2.5"/><circle cx="16" cy="13.8" r="1.1"/>',
    maintenance: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
    fleet: '<path d="M5 16V11l2-5h10l2 5v5z"/><path d="M5 11h14"/><circle cx="8.5" cy="16.5" r="1.5"/><circle cx="15.5" cy="16.5" r="1.5"/>',
    timesheets: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v4l2.5 1.5"/>',
    events: '<path d="M3.5 8.5a2 2 0 012-2h13a2 2 0 012 2v1.5a2 2 0 000 4v1.5a2 2 0 01-2 2h-13a2 2 0 01-2-2V14a2 2 0 000-4z"/><path d="M14 7v10" stroke-dasharray="2 2"/>',
    elearning: '<path d="M2.5 9L12 4.5 21.5 9 12 13.5z"/><path d="M6.5 11.5V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.5M21.5 9v5"/>',
    surveys: '<rect x="5" y="5" width="14" height="16" rx="2.5"/><path d="M9 5V3.5h6V5M9 13l2 2 4-4.5"/>',
    email: '<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="M4 7.5l8 6 8-6"/>',
    sms: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"/>',
    livechat: '<path d="M4.5 14v-2a7.5 7.5 0 0115 0v2"/><rect x="3.5" y="13" width="4" height="6" rx="1.5"/><rect x="16.5" y="13" width="4" height="6" rx="1.5"/><path d="M18.5 19c0 1.4-1.6 2-4 2h-2"/>',
    website: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.5 5.2 3.5 8.5s-1.1 6.1-3.5 8.5c-2.4-2.4-3.5-5.2-3.5-8.5S9.6 5.9 12 3.5z"/>',
    link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3A4 4 0 0011 18.7l1-1"/>',
    lunch: '<path d="M7 3v8M4.5 3v5a2.5 2.5 0 005 0V3M7 11v10"/><path d="M17 21V3c-2.5 1.5-3.5 5-3.5 8H17"/>',
    notes: '<path d="M5 4h14v11l-5 5H5z"/><path d="M14 20v-5h5M8.5 9h7"/>',
    repairs: '<path d="M14 4l6 6-3 3-6-6z"/><path d="M11 10l-7 7v3h3l7-7"/>',
    members: '<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><circle cx="9" cy="11" r="2"/><path d="M5.8 16c.5-1.6 1.7-2.4 3.2-2.4s2.7.8 3.2 2.4M14.5 10H18M14.5 13.5H17.5"/>',
    apps: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/><path d="M16.5 4v7M13 7.5h7"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2.8l1.6 2.2 2.7-.5.8 2.6 2.6.9-.5 2.7L21 12l-2.2 1.6.5 2.7-2.6.9-.8 2.6-2.7-.5L12 21.2l-1.6-2.2-2.7.5-.8-2.6-2.6-.9.5-2.7L3 12l2.2-1.6-.5-2.7 2.6-.9.8-2.6 2.7.5z"/>',
    generic: '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="1.3"/>',
};

// Odoo module prefix of the app's xmlid -> glyph (works in every language).
const MODULE_GLYPH = {
    sale: "sales", sale_management: "sales", crm: "crm", account: "invoicing", accountant: "invoicing",
    stock: "inventory", purchase: "purchase", project: "project", project_todo: "todo",
    point_of_sale: "pos", mrp: "manufacturing", hr: "employees", hr_holidays: "timeoff",
    hr_expense: "expenses", hr_attendance: "attendance", hr_recruitment: "recruitment",
    maintenance: "maintenance", fleet: "fleet", hr_timesheet: "timesheets", event: "events",
    website_slides: "elearning", survey: "surveys", mass_mailing: "email", mass_mailing_sms: "sms",
    im_livechat: "livechat", lunch: "lunch", note: "notes", repair: "repairs", mail: "discuss",
    calendar: "calendar", contacts: "contacts", board: "dashboards", website: "website",
    link_tracker: "link", utm: "link", membership: "members",
};

// Name fallback for apps from other vendors (English names).
const NAME_RULES = [
    [/home/i, "home"], [/discuss|chat|message/i, "discuss"], [/calendar/i, "calendar"],
    [/to-?do|task/i, "todo"], [/contact|customer|partner/i, "contacts"], [/crm|pipeline|lead/i, "crm"],
    [/sale/i, "sales"], [/dashboard/i, "dashboards"], [/point of sale|pos/i, "pos"],
    [/invoic|account|bill/i, "invoicing"], [/project/i, "project"], [/purchase|buy/i, "purchase"],
    [/inventory|stock|warehouse/i, "inventory"], [/manufactur|production/i, "manufacturing"],
    [/employee|staff/i, "employees"], [/recruit|hiring/i, "recruitment"], [/attendance/i, "attendance"],
    [/time off|leave|holiday/i, "timeoff"], [/expense/i, "expenses"], [/maintenance/i, "maintenance"],
    [/fleet|vehicle/i, "fleet"], [/timesheet/i, "timesheets"], [/event/i, "events"],
    [/learn|course|slide/i, "elearning"], [/survey|poll/i, "surveys"], [/email|mail/i, "email"],
    [/sms/i, "sms"], [/website|web/i, "website"], [/link/i, "link"], [/lunch|meal/i, "lunch"],
    [/note/i, "notes"], [/repair/i, "repairs"], [/member/i, "members"], [/setting|config/i, "settings"],
    [/apps?$/i, "apps"],
];

function glyphKey(app) {
    const xmlid = app.xmlid || "";
    const module = xmlid.split(".")[0];
    if (module === "base") {
        return /administration|setting/.test(xmlid) ? "settings" : "apps";
    }
    if (MODULE_GLYPH[module]) {
        return MODULE_GLYPH[module];
    }
    const rule = NAME_RULES.find(([re]) => re.test(app.name || ""));
    return rule ? rule[1] : "generic";
}

/** Outlined icon for an app, as safe static markup. */
export function appLineIcon(app) {
    return markup(
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ` +
            `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${GLYPHS[glyphKey(app)]}</svg>`
    );
}

export const FUSION_GLYPHS = GLYPHS; // exposed for tests / documentation

// ---- fallback tiles for apps without an icon image --------------------------
function hash(text) {
    let h = 0;
    for (const ch of String(text)) {
        h = (h * 31 + ch.charCodeAt(0)) % 360;
    }
    return h;
}

/** Inline CSS custom properties giving each app its own hue. */
export function appTileStyle(app) {
    const hue = hash(app.xmlid || app.name);
    return `--t-a: hsl(${hue} 62% 44%); --t-b: hsl(${(hue + 32) % 360} 66% 34%);`;
}

export function appInitial(app) {
    return (app.name || "?").trim().charAt(0).toUpperCase();
}
