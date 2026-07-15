import { useState } from "react";
import { Bot, Sparkles, X } from "lucide-react";

import ChatWindow from "./ChatWindow";

function ChatButton() {
  const [open, setOpen] = useState(false);

  function toggleChat() {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <button
        onClick={toggleChat}
        className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        rounded-full
        bg-gradient-to-r
        from-emerald-600
        via-green-700
        to-teal-600
        px-6
        py-4
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-green-500/40
        "
      >
        {open ? (
          <>
            <X size={22} />
            <span className="font-semibold">
              Close Chat
            </span>
          </>
        ) : (
          <>
            <div className="relative">
              <Bot size={22} />

              <Sparkles
                size={12}
                className="
                absolute
                -right-1
                -top-1
                text-yellow-300
                "
              />
            </div>

            <span className="font-semibold">
              Ask TravelGen AI
            </span>
          </>
        )}
      </button>

      <ChatWindow
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default ChatButton;