import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { Home } from "../Screens/Home";
import { LoginScreen } from "../Screens/LoginScreen";

const AppRoutes = () => {

    let routes = useRoutes([
        {path: "/home", element: <Home/>},
        {path: "/login", element: <LoginScreen/>},
        {path: "/*", element: <Navigate replace to={"/home"}/>},
    ]);
    
    return routes;
}

export { AppRoutes };