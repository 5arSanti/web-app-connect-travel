import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { LoginScreen } from "../Screens/LoginScreen";
import { AdminDashScreen } from "../Screens/AdminDashScreen";
import { Home } from "../Screens/Home";

const AppRoutes = () => {

    let routes = useRoutes([
        { path: "/home", element: <Home /> },
        { path: "/login", element: <LoginScreen /> },
        { path: "/admin/dashboard", element: <AdminDashScreen /> },
        { path: "/*", element: <Navigate replace to={"/home"} /> },
    ]);

    return routes;
}

export { AppRoutes };