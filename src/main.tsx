import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dashboard from "./pages/dashboard.tsx";
import Login from "./pages/auth/login.tsx";
import Register from "./pages/auth/register.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Friends } from "./pages/friends.tsx";
import { Chat } from "./pages/chat.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Dashboard />}>
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/chat" element={<Chat />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
