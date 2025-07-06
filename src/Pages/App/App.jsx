//Dependencies
import React from "react";
import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

// CSS
import './App.css';
import "./styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Context
import { AppProvider } from "../../Context";

// Components
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "../Routes";
import { FloatingNav } from "../components/FloatingNav";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

// Utils
import { scrollToValue } from "../utils/scrollToValue";
import { Header } from "../components/Header";

import { HeaderContact } from "../components/HeaderContact";

const Wrapper = ({ children }) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        scrollToValue();
    }, [location.pathname]);

    return children;
}

const App = () => {
    return (
        <AppProvider>
            <HashRouter>
                <Wrapper>

                    <AppRoutes />

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </Wrapper>
            </HashRouter>
        </AppProvider>
    );
}

export default App;

