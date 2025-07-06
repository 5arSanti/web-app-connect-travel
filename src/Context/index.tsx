import React from "react";
import { MenuItem } from "../interfaces/menu-items";
import { User } from "@supabase/supabase-js";

interface AppContextType {
    loading: boolean | null;
    setLoading: React.Dispatch<React.SetStateAction<boolean | null>>;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    selectedItem: MenuItem | null;
    setSelectedItem: React.Dispatch<React.SetStateAction<MenuItem | null>>;
}

export const AppContext = React.createContext<AppContextType>({
    loading: null,
    setLoading: () => { },
    user: null,
    setUser: () => { },
    selectedItem: null,
    setSelectedItem: () => { },
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {

    //LOADING
    const [loading, setLoading] = React.useState<boolean | null>(null);

    //Login Auth
    const [user, setUser] = React.useState<User | null>(null);


    const [selectedItem, setSelectedItem] = React.useState<MenuItem | null>(null);

    return (
        <AppContext.Provider
            value={{
                loading,
                setLoading,

                user,
                setUser,

                selectedItem,
                setSelectedItem
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider }