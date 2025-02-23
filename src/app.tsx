import { useState } from "react";
import Dashboard from "./pages/dashboard.tsx";
import Login from "./pages/auth/login.tsx";
import Register from "./pages/auth/register.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Friends } from "./pages/friends.tsx";
import { Chat } from "./pages/chat.tsx";
import { AuthContext, User } from "./pages/auth/authContext.ts";
import ForgotPassword from "./pages/auth/forgot.tsx";

export default function App() {
    const [auth, setAuth] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route path="/" element={<Dashboard />}>
                        <Route path="/friends" element={<Friends />} />
                        <Route path="/chat" element={<Chat />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}
