import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

export default function LoginPage({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const handleSubmit = async (formData) => {
        const user = {
            username: formData.get("email"),
            password: formData.get("password"),
        };
        console.log(user);
        const res = await fetch("http://localhost:3000/login/password", {
            method: "POST",
            withCredentials: true,
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!res.ok) {
            throw new Error(`${res.status}: ${await res.text()}`);
        }

        res.json().then((val) => console.log(val));
    };

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-slate-100">
            <div
                className={cn("flex flex-col gap-6 w-xs", className)}
                {...props}
            >
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Welcome back</CardTitle>
                        <CardDescription>
                            Enter your email and password below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form action={handleSubmit}>
                            <div className="grid gap-6">
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="m@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">
                                                Password
                                            </Label>
                                            <Link
                                                to="#"
                                                className="ml-auto text-sm underline-offset-4 hover:underline"
                                            >
                                                Forgot your password?
                                            </Link>
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Login
                                    </Button>
                                </div>
                                <div className="text-center text-sm">
                                    Don&apos;t have an account?{" "}
                                    <Link
                                        to="/register"
                                        className="underline underline-offset-4"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
