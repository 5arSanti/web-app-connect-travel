import React from "react";
import { AppContext } from "../../Context";
import { Navigate, useRoutes } from "react-router-dom";

import { Home } from "../Screens/Home";

const AppRoutes = () => {

    const context = React.useContext(AppContext);
    const { auth } = context;

    let routes = useRoutes([
        {path: "/home", element: <Home/>},
        {path: "/*", element: <Navigate replace to={"/home"}/>},
    ]);
    
    return routes;
}

export { AppRoutes };