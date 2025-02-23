import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";

export default function ForgotPassword() {
    return (
        <div className="bg-slate-100 w-full h-screen flex items-center justify-center">
            <Card className="w-sm">
                <CardHeader className="text-center">
                    <CardTitle>Forgot your password?</CardTitle>
                    <CardDescription>I'm working on that...</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col space-y-2">
                    <span className="font-semibold">Sorry.</span>
                    <span>
                        At the moment there's no way to reset your password
                        since you don't use an email to sign up. I'll add this
                        feature soon!
                    </span>
                    <Link
                        to="/login"
                        className="underline underline-offset-4 text-right"
                    >
                        Back to login
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}
