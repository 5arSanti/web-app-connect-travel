import { AuthChangeEvent, Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase';
import { AuthLoginResponse, AuthStateResponse } from '../interfaces/auth';

export const authService = {
    async login(email: string, password: string): Promise<AuthLoginResponse> {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) throw error;
        return {
            user: data.user,
            session: data.session
        };
    },

    async logout(): Promise<void> {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    },

    async getCurrentUser(): Promise<User | null> {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) return null;
        return user;
    },

    async isAuthenticated(): Promise<boolean> {
        const { data: { session } } = await supabase.auth.getSession();
        return !!session;
    },

    onAuthStateChange(callback: (event: AuthChangeEvent, session: Session | null) => Promise<void>): AuthStateResponse {
        return supabase.auth.onAuthStateChange(callback);
    }
}; 