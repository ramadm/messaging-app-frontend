import { createContext, useContext } from "react";

export interface User {
    id: number;
    username: string;
}

export interface AuthContextType {
    auth: User | null;
    setAuth: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Error: useAuth must be used within an AuthProvider.");
    }
    return context;
}
