import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageGroup } from "@/components/messages";
import { RocketIcon } from "@radix-ui/react-icons";

const msgGroups = [
    {
        sender: "Alex",
        messages: ["Hey Jamie, how's it going?"],
        timestamp: "2025-02-18T14:30:00Z",
    },
    {
        sender: "Jamie",
        messages: ["Hey Alex! Pretty good,", "just finished work.", "hbu?"],
        timestamp: "2025-02-18T14:30:45Z",
    },
    {
        sender: "Alex",
        messages: ["Oh nice! Any big weekend plans?", "I'm doin ok"],
        timestamp: "2025-02-18T14:31:10Z",
    },
    {
        sender: "Jamie",
        messages: [
            "Yeah, thinking about going hiking on Saturday",
            "if the weather holds up.",
        ],
        timestamp: "2025-02-18T14:31:30Z",
    },
    {
        sender: "Alex",
        messages: ["That sounds awesome.", "You should send me pics!"],
        timestamp: "2025-02-18T14:31:50Z",
    },
    {
        sender: "Jamie",
        messages: ["For sure!", "What about you, got any plans?"],
        timestamp: "2025-02-18T14:32:05Z",
    },
    {
        sender: "Alex",
        messages: [
            "Not much, just catching up on some shows.",
            "Been meaning to start a new one.",
        ],
        timestamp: "2025-02-18T14:32:30Z",
    },
    {
        sender: "Jamie",
        messages: ["Ooo, you should finally start that show I recommended!"],
        timestamp: "2025-02-18T14:32:50Z",
    },
    {
        sender: "Alex",
        messages: ["Haha, I know, I know.", "Fine, I'll start it tonight!"],
        timestamp: "2025-02-18T14:33:10Z",
    },
    {
        sender: "Jamie",
        messages: ["Yes! You won’t regret it.", "Text me when you do!"],
        timestamp: "2025-02-18T14:33:30Z",
    },
    {
        sender: "Alex",
        messages: ["Alright, talk later!", "Have fun!"],
        timestamp: "2025-02-18T14:33:50Z",
    },
    {
        sender: "Jamie",
        messages: ["Will do,", "catch you later!"],
        timestamp: "2025-02-18T14:34:05Z",
    },
];

export function Chat() {
    return (
        <div className="flex flex-row w-full">
            <div className="flex flex-col w-full h-screen">
                <Card className="m-1">
                    <CardHeader className="flex flex-row">
                        <Avatar className="size-12">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center">
                            <CardTitle className="text-lg leading-none">
                                Alex
                            </CardTitle>
                            <CardDescription className="leading-none">
                                Online
                            </CardDescription>
                        </div>
                    </CardHeader>
                </Card>
                <div className="overflow-auto">
                    {msgGroups.map((group) => (
                        <MessageGroup
                            group={group}
                            fromSelf={group.sender === "Jamie"}
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
            <Card className="w-96 m-1">
                <CardHeader className="flex flex-col items-center">
                    <Avatar className="size-20">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg leading-none">
                        Profile
                    </CardTitle>
                    <CardDescription className="leading-none">
                        Online
                    </CardDescription>
                </CardHeader>
                <CardContent className="bg-slate-200 rounded-2xl mx-4 p-4">
                    Some random info about the user. Perhaps more features will
                    be added later...
                </CardContent>
            </Card>
        </div>
    );
}
