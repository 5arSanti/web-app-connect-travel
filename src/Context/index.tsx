import React from "react";
import { MenuItem } from "../config/interfaces/menu-items";
import { User } from "@supabase/supabase-js";
import { getMenuItems } from "../Pages/utils/menu-item.utils";

interface AppContextType {
    loading: boolean | null;
    setLoading: React.Dispatch<React.SetStateAction<boolean | null>>;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    selectedItem: MenuItem | null;
    setSelectedItem: React.Dispatch<React.SetStateAction<MenuItem | null>>;
    windowWidth: number;
    setWindowWidth: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = React.createContext<AppContextType>({
    loading: null,
    setLoading: () => { },
    user: null,
    setUser: () => { },
    selectedItem: null,
    setSelectedItem: () => { },
    windowWidth: 0,
    setWindowWidth: () => { },
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {

    //LOADING
    const [loading, setLoading] = React.useState<boolean | null>(null);

    //Login Auth
    const [user, setUser] = React.useState<User | null>(null);

    const [windowWidth, setWindowWidth] = React.useState<number>(0);


    const [selectedItem, setSelectedItem] = React.useState<MenuItem | null>(null);

    React.useEffect(() => {
        const menuItems = getMenuItems();
        setSelectedItem(menuItems[0]);
    }, []);

    React.useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setWindowWidth])

    return (
        <AppContext.Provider
            value={{
                loading,
                setLoading,

                user,
                setUser,

                selectedItem,
                setSelectedItem,

                windowWidth,
                setWindowWidth
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider }