import { supabase } from './supabase';

export const authService = {
    async login(email, password) {
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

    async register(userData) {
        const { email, password, full_name, phone } = userData;

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name,
                    phone
                }
            }
        });

        if (error) throw error;

        if (data.user) {
            const { error: profileError } = await supabase
                .from('profiles')
                .insert([
                    {
                        id: data.user.id,
                        full_name,
                        email,
                        phone,
                        avatar_url: null,
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString()
                    }
                ]);

            if (profileError) {
                console.error('Error creating profile:', profileError);
            }
        }

        return data;
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

    onAuthStateChange(callback) {
        return supabase.auth.onAuthStateChange(callback);
    }
}; 