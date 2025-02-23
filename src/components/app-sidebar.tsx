import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/pages/auth/authContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// Menu items.
const items = [
    {
        title: "Friends",
        url: "/friends",
        icon: Home,
    },
    {
        title: "Chat",
        url: "/chat",
        icon: Inbox,
    },
    {
        title: "Profile",
        url: "/profile",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
];

export function AppSidebar() {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        fetch("http://localhost:3000/logout", {
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                setAuth(null);
                navigate("/login");
            } else {
                console.log(res.status);
            }
        });
    };

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton size={"lg"}>
                                    <Avatar className="rounded-lg">
                                        <AvatarImage
                                            src="hhhttps://github.com/shadcn.png"
                                            alt="@shadcn"
                                        />
                                        <AvatarFallback className="rounded-lg bg-slate-700 text-white">
                                            CN
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">
                                            {auth && auth.username}
                                        </span>
                                        <span className="truncate text-xs">
                                            {auth && "User ID: " + auth.id}
                                        </span>
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <Button onClick={handleLogout}>Logout</Button>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
