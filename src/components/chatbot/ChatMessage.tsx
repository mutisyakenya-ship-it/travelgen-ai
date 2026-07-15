import { Bot, User } from "lucide-react";
import type { ChatMessage as Message } from "../../types/chat";

type Props = {
  message: Message;
};

function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`mb-5 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-[85%] gap-3 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        <div className="mt-1">
          {isUser ? (
            <User size={22} className="text-slate-700" />
          ) : (
            <Bot size={22} className="text-green-700" />
          )}
        </div>

        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isUser
              ? "bg-green-700 text-white"
              : "bg-white shadow"
          }`}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;