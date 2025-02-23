import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface MessageProps {
    content: string;
    variant: "single" | "top" | "middle" | "bottom";
    color: "self" | "other";
}

function Message({ content, variant, color }: MessageProps) {
    const variants = {
        single: "rounded-2xl",
        top: "rounded-t-2xl rounded-br-2xl rounded-bl-xs",
        middle: "rounded-r-2xl rounded-l-xs",
        bottom: "rounded-b-2xl rounded-tr-2xl rounded-tl-xs",
    };

    const colors = {
        self: "from-green-500 to-teal-500",
        other: "from-indigo-500 to-purple-500",
    };

    const messageStyle = `py-0.5 px-2 w-fit bg-gradient-to-br text-white whitespace-break-spaces ${variants[variant]} ${colors[color]}`;
    return <div className={messageStyle}>{content}</div>;
}

interface MessageStackProps {
    contentArr: Array<string>;
    color: "self" | "other";
}

function MessageStack({ contentArr, color }: MessageStackProps) {
    if (contentArr.length === 1) {
        return (
            <Message content={contentArr[0]} color={color} variant={"single"} />
        );
    }
    return (
        <>
            {contentArr.map((msg, ind) => {
                if (ind === 0) {
                    return (
                        <Message content={msg} color={color} variant={"top"} />
                    );
                }
                if (ind === contentArr.length - 1) {
                    return (
                        <Message
                            content={msg}
                            color={color}
                            variant={"bottom"}
                        />
                    );
                }
                return (
                    <Message content={msg} color={color} variant={"middle"} />
                );
            })}
        </>
    );
}

interface MessageGroup {
    sender: string;
    messages: Array<string>;
    timestamp: string;
}

interface MessageGroupProps {
    group: MessageGroup;
    fromSelf: boolean;
}

export function MessageGroup({ group, fromSelf }: MessageGroupProps) {
    return (
        <div className="m-2 flex flex-row">
            <Avatar className="my-1">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="px-2 space-y-0.5 items-end">
                <div className="flex flex-row space-x-2 leading-none p-1">
                    <h1 className="font-semibold leading-none">
                        {group.sender}
                    </h1>
                    <p className="text-gray-500 text-xs">{group.timestamp}</p>
                </div>

                <MessageStack
                    contentArr={group.messages}
                    color={fromSelf ? "self" : "other"}
                />
            </div>
        </div>
    );
}
