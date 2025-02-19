import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";

export default function Dashboard({ isAuth }) {
    // useEffect(() => {
    //     // TODO: add useContext for user logged-in status
    // }, [])

    // persistence
    // 1. Get logged-in status working until refresh using useContext
    // 2. Implement log-out
    // 3. When we load the page for the first time, we send a GET request w/ out header to the server
    // 4. The server can either respond OK and send us the user details, or reject
    // 5. On success we re-populate auth context
    // 6. On failure we re-direct to log-in page (and delete cookie if it's present?)

    return isAuth ? (
        <SidebarProvider>
            <AppSidebar />
            <Outlet />
        </SidebarProvider>
    ) : (
        <Navigate to="/login" />
    );
}
