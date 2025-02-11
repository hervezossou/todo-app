import { useReducer, useEffect, ReactNode } from "react";
import supabase from "../services/supabase";
import { AuthChangeEvent, Session, User } from "@supabase/supabase-js";
import { AuthContext } from "./AuthContext";

// Définition du type de l'état global de l'authentification
interface AuthState {
    user: User | null;
    session: Session | null;
}

// Définition des actions possibles pour le reducer
type AuthAction =
  | { type: "LOGIN"; payload: { user: User; session: Session } }
  | { type: "LOGOUT" }
  | { type: "SET_SESSION"; payload: Session | null };

// État initial
const initialAuthState: AuthState = {
    user: null,
    session: null,
};


// Reducer pour gérer les actions
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case "LOGIN":
        return { user: action.payload.user, session: action.payload.session };
      case "LOGOUT":
        return { user: null, session: null };
      case "SET_SESSION":
        return { user: action.payload?.user || null, session: action.payload };
      default:
        return state;
    }
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);

    useEffect(() => {
        // Vérifier la session actuelle de chargement
        const fetchSession = async () => {
            const { data } = await supabase.auth.getSession();
            dispatch({ type: "SET_SESSION", payload: data.session})
        }

        fetchSession();

        // Écoute les changements de session utilisateur
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (_event: AuthChangeEvent, session: Session | null) => {
                dispatch({ type: "SET_SESSION", payload: session });
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        }
    }, []);

    // Fonction d'inscription 
    const register = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({email, password});
        if (error) {
            throw error;
        }
        if (data.session) {
            dispatch({ type: "LOGIN", payload: { user: data.session.user, session: data.session } })
        }
    }

    // Fonction de connexion 
    const login = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({email, password});
        if (error) {
            throw error;
        }
        if (data.session) {
            dispatch({ type: "LOGIN", payload: { user: data.session.user, session: data.session } })
        }
    }

    // Fonction de déconnexion 
    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            throw error;
        }
        dispatch({ type: "LOGOUT" });
    } 

    return (
        <AuthContext.Provider value={{...state, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};