import { Session, User } from "@supabase/supabase-js";

export interface AuthLoginResponse {
    user: User;
    session: Session;
}

export interface AuthStateResponse {
    data: {
        subscription: {
            unsubscribe: () => void;
        };
    };
}