import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export function Chat() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex flex-row">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        Profile
                    </CardTitle>
                    <CardDescription>Online</CardDescription>
                </CardHeader>
            </Card>

            <Textarea
                placeholder="Type your message here."
                className="resize-none"
            />
            <Button>Send</Button>
        </div>
    );
}
