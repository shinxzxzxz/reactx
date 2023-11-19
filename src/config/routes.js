const Admin = {
    Index: "/admin",
    Login: "/public/login",
    Dashboard: "/admin/dashboard",
    Donor: "/admin/donor",
    Event: "/admin/event",
    History: "/admin/history",
    Hospital: "/admin/hospital",
    Reports: "/admin/reports",
    Request: "/admin/request",
    Settings: "/admin/settings",
};

const Public = {
    Index: "/",
    About: "/public/about",
    Home: "/public/home",
    Forgot: "/public/home",
};

const Hospital = {
    Index: "/hospital",
    Event: "/hospital/event",
    Dashboard: "/hospital/dashboard",
    History: "/hospital/history",
    Reports: "/hospital/reports",
    Request: "/hospital/request",
    Settings: "/hospital/settings",
};

export { Admin as AdminUrl, Hospital as HospitalUrl, Public as PublicUrl };