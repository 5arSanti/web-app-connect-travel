import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { AuthChangeEvent, Session, User } from '@supabase/supabase-js';

interface AuthContextType {
    user: any | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; data?: any; error?: any }>;
    logout: () => Promise<{ success: boolean; error?: any }>;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    login: () => Promise.resolve({ success: false, error: 'Not implemented' }),
    logout: () => Promise.resolve({ success: false, error: 'Not implemented' }),
    isAuthenticated: false
});

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUser();

        const { data: { subscription } } = authService.onAuthStateChange(async (event: AuthChangeEvent, session: Session | null) => {
            if (session?.user) {
                const userWithProfile = await authService.getCurrentUser();
                setUser(userWithProfile);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);


    const checkUser = async () => {
        try {
            const currentUser = await authService.getCurrentUser();
            setUser(currentUser);
        } catch (error) {
            console.error('Error checking user:', error);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const data = await authService.login(email, password);
            setUser(data.user);
            return { success: true, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
            return { success: true };
        } catch (error) {
            console.error('Logout error:', error);
            return { success: false, error: error.message };
        }
    };

    const value = {
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}; 