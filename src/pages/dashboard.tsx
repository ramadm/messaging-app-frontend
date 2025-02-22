import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "./auth/authContext";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Dashboard() {
    const { auth, setAuth } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/session", {
            method: "POST",
            withCredentials: true,
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setAuth(data))
            .catch(() => setAuth(null))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="flex h-svh w-full items-center justify-center bg-slate-100">
                <Card className="p-10">
                    <CardHeader className="items-center">
                        <Loader2 className="animate-spin" size={64} />
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-3xl">Loading...</h1>
                    </CardContent>
                </Card>
            </div>
        );
    } else if (auth) {
        return (
            <SidebarProvider>
                <AppSidebar />
                <Outlet />
            </SidebarProvider>
        );
    } else {
        return <Navigate to="/login" />;
    }
}
