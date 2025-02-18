import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageGroup } from "@/components/messages";
import { RocketIcon } from "@radix-ui/react-icons";

const msgGroups = [
    {
        sender: "Rama",
        messages: [
            "Testing\nTesting",
            "Hey man, what's up",
            "u been practicing the panflute lately?",
        ],
        timestamp: "1/20/2025 11:36 AM",
    },
    {
        sender: "Not_Rama",
        messages: ["nm bro", "ya, lil bit"],
    },
];

export function Chat() {
    return (
        <div className="flex flex-col w-full">
            <Card className="m-1">
                <CardHeader className="flex flex-row">
                    <Avatar className="size-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center">
                        <CardTitle className="text-lg leading-none">
                            Profile
                        </CardTitle>
                        <CardDescription className="leading-none">
                            Online
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
            <div className="h-full">
                {msgGroups.map((group) => (
                    <MessageGroup
                        group={group}
                        fromSelf={group.sender === "Rama"}
                    />
                ))}
            </div>
            <div className="border-t p-1">
                <div className="flex flex-row items-center space-x-1 w-full">
                    <Input placeholder="Type your message here." />
                    <Button>
                        <RocketIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}
