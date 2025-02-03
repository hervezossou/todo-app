import { createContext } from "react";
import { Session, User } from "@supabase/supabase-js";

// Type du contexte
interface AuthContextType {
    user: User | null;
    session: Session | null;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
