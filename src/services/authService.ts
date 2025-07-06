import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

export const authService = {
    async login(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) throw error;

        const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .single();

        return {
            user: { ...data.user, ...profile },
            session: data.session
        };
    },

    async logout() {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    },

    async getCurrentUser() {
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
            const { data: profile } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', user.id)
                .single();

            return { ...user, ...profile };
        }

        return null;
    },

    async isAuthenticated() {
        const { data: { session } } = await supabase.auth.getSession();
        return !!session;
    },

    onAuthStateChange(callback: (event: AuthChangeEvent, session: Session | null) => Promise<void>) {
        return supabase.auth.onAuthStateChange(callback);
    }
}; 