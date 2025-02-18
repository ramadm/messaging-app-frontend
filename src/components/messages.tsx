import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function Message({ content, variant, color }) {
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

function MessageStack({ contentArr, color }) {
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

export function MessageGroup({ group, fromSelf }) {
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
