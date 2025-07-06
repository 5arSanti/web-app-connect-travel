import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_DB_PROJECT_URL;
const supabaseAnonKey = import.meta.env.VITE_DB_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const storage = supabase.storage;
export const functions = supabase.functions; 