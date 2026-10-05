/** @odoo-module **/
// Fusion Theme - line icons for the "Outline" and "Colored tiles" menu styles.
// Every glyph is a list of SVG path strings on a 24x24 grid, drawn with a
// round-capped stroke (the stroke itself is set in sidebar.scss). Keeping them
// as plain data lets the OWL template render them without raw HTML.

export const GLYPHS = {
    home: ["M3 11.5 12 4l9 7.5", "M5.5 10v9.5h13V10", "M10 19.5v-5h4v5"],
    discuss: [
        "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
        "M8 12h.01", "M12 12h.01", "M16 12h.01",
    ],
    calendar: [
        "M6.5 5h11A3 3 0 0 1 20.5 8v9.5a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z",
        "M3.5 10h17", "M8 3v4", "M16 3v4",
    ],
    todo: ["M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", "m9 11 3 3L22 4"],
    contacts: [
        "M6 3.5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z",
        "M12 12a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z",
        "M8.2 17c.4-2 1.9-3 3.8-3s3.4 1 3.8 3",
    ],
    crm: ["M3.5 5h17l-6.5 7.8V19l-4 1.8v-8z"],
    sales: [
        "M6 3.5h12a2.5 2.5 0 0 1 2.5 2.5v12a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V6A2.5 2.5 0 0 1 6 3.5z",
        "M15.5 8.5l-7 7", "M9 9h.01", "M15 15h.01",
    ],
    dashboards: [
        "M5.5 3.5h4A1.5 1.5 0 0 1 11 5v5a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 4 10V5a1.5 1.5 0 0 1 1.5-1.5z",
        "M14.5 3.5h4A1.5 1.5 0 0 1 20 5v2.5A1.5 1.5 0 0 1 18.5 9h-4A1.5 1.5 0 0 1 13 7.5V5a1.5 1.5 0 0 1 1.5-1.5z",
        "M14.5 12.5h4a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5z",
        "M5.5 15h4a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 4 19v-2.5A1.5 1.5 0 0 1 5.5 15z",
    ],
    pos: [
        "M4 9.5 5.5 4h13L20 9.5",
        "M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0",
        "M5.5 12.5V20h13v-7.5", "M10 20v-4.5h4V20",
    ],
    invoicing: ["M3.5 9.5 12 4l8.5 5.5", "M6 10.5v7M10 10.5v7M14 10.5v7M18 10.5v7", "M3.5 20.5h17"],
    project: [
        "M9.5 3h5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z",
        "M15.5 4.5H17a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2h1.5",
        "M9 11.5h6", "M9 15.5h4",
    ],
    purchase: ["M5 8h14l-1 12H6z", "M9 8V6.5a3 3 0 0 1 6 0V8"],
    inventory: ["M12 3 20.5 7.5v9L12 21l-8.5-4.5v-9z", "M3.8 7.6 12 12l8.2-4.4", "M12 12v9"],
    manufacturing: [
        "M3.5 20.5h17",
        "M5.5 20.5v-9.5l5 3.2V11l5 3.2V5h4.5v15.5",
        "M9 17.5h.01", "M13 17.5h.01",
    ],
    employees: [
        "M9 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
        "M2.8 20c.6-3.3 3-5 6.2-5s5.6 1.7 6.2 5",
        "M16 4.8a3.3 3.3 0 0 1 0 6.4", "M18 15.2c1.8.6 3 2.2 3.4 4.8",
    ],
    apps: ["M4.5 4h5v5h-5z", "M4.5 15h5v5h-5z", "M15 15h5v5h-5z", "M17.5 3.5v6M14.5 6.5h6"],
    settings: ["M4 7h9", "M17 7h3", "M4 17h3", "M11 17h9", "M15 4.5v5", "M9 14.5v5"],
    website: [
        "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M3 12h18",
        "M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z",
    ],
    email: ["M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z", "m3.5 7.5 8.5 6 8.5-6"],
    sms: ["M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "M8 9.5h8", "M8 13h5"],
    surveys: [
        "M9.5 3h5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z",
        "M15.5 4.5H17a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2h1.5",
        "m9 14 2.2 2.2L15.5 12",
    ],
    recruitment: [
        "M10 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
        "M3.5 20c.6-3.4 3.1-5.2 6.5-5.2s5.9 1.8 6.5 5.2",
        "M19 8v6M16 11h6",
    ],
    attendance: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 7v5l3 2"],
    timeoff: [
        "M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z",
        "M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4",
    ],
    expenses: [
        "M4.5 7.5V6a2 2 0 0 1 2-2H18v3.5",
        "M4.5 7.5a2 2 0 0 0 2 2H20a1 1 0 0 1 1 1V19a1.5 1.5 0 0 1-1.5 1.5h-13A2 2 0 0 1 4.5 18.5z",
        "M16.5 15h.01",
    ],
    maintenance: [
        "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    ],
    livechat: [
        "M4 14v-2a8 8 0 0 1 16 0v2", "M4 13h2.5v5H5a1 1 0 0 1-1-1z",
        "M20 13h-2.5v5H19a1 1 0 0 0 1-1z", "M18 18.5c0 1.4-2.5 2.5-6 2.5",
    ],
    lunch: ["M6 3v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V3", "M8 3v18", "M17.5 21V3c-2.2 1-3.5 3.5-3.5 7 0 1.7 1 2.5 2.5 2.5h1"],
    fleet: [
        "M5 17.5H4v-5l2-5.5h12l2 5.5v5h-1", "M4 12.5h16", "M7.5 15.5h.01", "M16.5 15.5h.01",
        "M5 17.5v2M19 17.5v2",
    ],
    timesheets: ["M12 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "M12 8.5v4l2.5 1.5", "M9.5 2.5h5"],
    events: [
        "M3.5 8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z",
        "M14 6.5v11",
    ],
    elearning: ["M2.5 9.5 12 5l9.5 4.5L12 14z", "M6.5 11.8V16c0 1.4 2.5 2.7 5.5 2.7s5.5-1.3 5.5-2.7v-4.2", "M21.5 9.5V15"],
    members: [
        "M4 5.5h16A1.5 1.5 0 0 1 21.5 7v10A1.5 1.5 0 0 1 20 18.5H4A1.5 1.5 0 0 1 2.5 17V7A1.5 1.5 0 0 1 4 5.5z",
        "M8.5 12a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z",
        "M5.8 16c.3-1.6 1.4-2.3 2.7-2.3s2.4.7 2.7 2.3", "M14 10h4.5M14 13.5h3",
    ],
    repairs: ["M10 9l4-4 5 5-4 4z", "M13.5 5.5 18.5 10.5", "M12 12 4.5 19.5a1.4 1.4 0 0 0 2 2L14 14"],
    link: [
        "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1",
        "M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
    ],
    notes: [
        "M5 3.5h14A1.5 1.5 0 0 1 20.5 5v9.5L14.5 20.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5z",
        "M14.5 20.5V15a.5.5 0 0 1 .5-.5h5.5", "M7.5 9h9M7.5 12.5h5",
    ],
    documents: ["M3.5 7a2 2 0 0 1 2-2h4l2 2.5h7a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"],
    planning: ["M4.5 5.5h7", "M8.5 11.5h10", "M6.5 17.5h8"],
    generic: [
        "M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
        "M9 9h.01", "M15 9h.01", "M9 15h.01", "M15 15h.01",
    ],
};

// Technical module name (the part of the menu xml id before the dot) -> glyph.
const MODULE_GLYPH = {
    mail: "discuss", calendar: "calendar", appointment: "calendar",
    project_todo: "todo", note: "notes", knowledge: "notes",
    contacts: "contacts", crm: "crm",
    sale: "sales", sale_management: "sales",
    spreadsheet_dashboard: "dashboards", board: "dashboards",
    point_of_sale: "pos",
    account: "invoicing", accountant: "invoicing", account_accountant: "invoicing",
    project: "project", purchase: "purchase", stock: "inventory", mrp: "manufacturing",
    hr: "employees", hr_recruitment: "recruitment", hr_attendance: "attendance",
    hr_holidays: "timeoff", hr_expense: "expenses", hr_timesheet: "timesheets",
    maintenance: "maintenance", im_livechat: "livechat", lunch: "lunch", fleet: "fleet",
    event: "events", website_slides: "elearning", membership: "members",
    repair: "repairs", link_tracker: "link", utm: "link",
    website: "website", mass_mailing: "email", mass_mailing_sms: "sms", survey: "surveys",
    documents: "documents", planning: "planning",
};

// Fallback when the xml id is unknown: look at the (English) menu name.
const NAME_HINTS = [
    ["discuss", "discuss"], ["calendar", "calendar"], ["to-do", "todo"], ["todo", "todo"],
    ["contact", "contacts"], ["crm", "crm"], ["dashboard", "dashboards"],
    ["point of sale", "pos"], ["invoic", "invoicing"], ["accounting", "invoicing"],
    ["project", "project"], ["purchase", "purchase"], ["inventory", "inventory"],
    ["manufactur", "manufacturing"], ["employee", "employees"], ["sales", "sales"],
    ["website", "website"], ["settings", "settings"], ["apps", "apps"], ["note", "notes"],
    ["document", "documents"], ["planning", "planning"], ["recruit", "recruitment"],
    ["attendance", "attendance"], ["time off", "timeoff"], ["expense", "expenses"],
    ["maintenance", "maintenance"], ["fleet", "fleet"], ["lunch", "lunch"],
    ["event", "events"], ["live chat", "livechat"], ["email marketing", "email"],
    ["sms", "sms"], ["survey", "surveys"], ["elearning", "elearning"],
    ["timesheet", "timesheets"], ["repair", "repairs"], ["member", "members"],
    ["link tracker", "link"],
];

/** Returns the list of SVG path strings for an app's line icon. */
export function appGlyph(app) {
    const xmlid = app.xmlid || "";
    if (xmlid === "base.menu_administration") {
        return GLYPHS.settings;
    }
    if (xmlid === "base.menu_management") {
        return GLYPHS.apps;
    }
    const key = MODULE_GLYPH[xmlid.split(".")[0]];
    if (key) {
        return GLYPHS[key];
    }
    const name = (app.name || "").toLowerCase();
    for (const [needle, glyph] of NAME_HINTS) {
        if (name.includes(needle)) {
            return GLYPHS[glyph];
        }
    }
    return GLYPHS.generic;
}
