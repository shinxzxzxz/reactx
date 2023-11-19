import React from "react";

const Admin = {
    Dashboard: React.lazy(() => import("../pages/admin/dashboard")),
    Event: React.lazy(() => import("../pages/admin/event")),
    Donor: React.lazy(() => import("../pages/admin/donor")),
    Hospital: React.lazy(() => import("../pages/admin/hospital")),
    Request: React.lazy(() => import("../pages/admin/request")),
    Reports: React.lazy(() => import("../pages/admin/reports")),
    // Settings: React.lazy(() => import("../pages/admin/settings")),
    Login: React.lazy(() => import("../pages/admin/login")),
}

const Hospital = {
    Dashboard: React.lazy(() => import("../pages/hospital/dashboard")),
    Request: React.lazy(() => import("../pages/hospital/request")),
    Reports: React.lazy(() => import("../pages/hospital/reports")),
    Settings: React.lazy(() => import("../pages/hospital/settings")),
}

const Public = {
    // About: React.lazy(() => import("../pages/public/about")),
    Home: React.lazy(() => import("../pages/public/home")),

};

export { Admin, Hospital, Public };
