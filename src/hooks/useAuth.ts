import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Hook personnalisé pour éviter le problème de Fast Refresh
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};