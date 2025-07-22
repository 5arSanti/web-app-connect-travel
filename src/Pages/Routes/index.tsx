import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useAuth } from '../../Context/AuthContext';

import { LoginScreen } from "../Screens/LoginScreen";
import { AdminDashScreen } from "../Screens/AdminDashScreen";
import { Home } from "../Screens/Home";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, loading } = useAuth();

    if (loading) return null;

    if (!isAuthenticated) return <Navigate to="/home" replace />;

    return children;
}

const AppRoutes = () => {

    let routes = useRoutes([
        { path: "/home", element: <Home /> },
        { path: "/login", element: <LoginScreen /> },
        {
            path: "/admin/dashboard", element: (
                <ProtectedRoute>
                    <AdminDashScreen />
                </ProtectedRoute>
            )
        },
        { path: "/*", element: <Navigate replace to={"/home"} /> },
    ]);

    return routes;
}

export { AppRoutes };