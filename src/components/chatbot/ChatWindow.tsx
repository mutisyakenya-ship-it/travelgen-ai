import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useItineraryStore } from "../../pages/store/itineraryStore";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

import { askTravelAssistant } from "../../services/gemini/chatService";
import type { ChatMessage as Message } from "../../types/chat";

type Props = {
  open: boolean;
  onClose: () => void;
};

function ChatWindow({
  open,
  onClose,
}: Props) {
  const trips = useItineraryStore((state) => state.trips);
  const currentTrip = useItineraryStore((state) => state.currentTrip);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        " Hello,I'm TravelGen AI. I can help you plan trips, recommend destinations, hotels, transport, budgets and answer any travel related questions.",
      createdAt: new Date(),
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);

  if (!open) return null;


  async function sendMessage() {

    if (!input.trim() || loading) return;

    const question = input.trim();

    const userMessage: Message = {

      id: crypto.randomUUID(),

      role: "user",

      content: question,

      createdAt: new Date(),

    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");

    setLoading(true);

    try {

      const reply =
        await askTravelAssistant(
          question,
          currentTrip,
          trips
        );

      const assistantMessage: Message = {

        id: crypto.randomUUID(),

        role: "assistant",

        content: reply,

        createdAt: new Date(),

      };

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ]);

    } catch (error) {
      console.error ("TravelGen AI:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            " Ooh Sorry, something went wrong. Please try again.",
          createdAt: new Date(),
        },
      ]);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div
      className="
      fixed
      bottom-24
      right-6
      z-50
      flex
      h-[650px]
      w-[390px]
      flex-col
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      shadow-2xl
      "
    >

    

      <div
        className="
        flex
        items-center
        justify-between
        bg-gradient-to-r
        from-green-700
        to-emerald-600
        px-6
        py-5
        text-white
        "
      >

        <div>

          <h2 className="text-lg font-bold">

            TravelGen AI

          </h2>

          <p className="text-sm text-green-100">

            Your Personal Travelgen assistant

          </p>

        </div>

        <button

          onClick={onClose}

          className="
          rounded-full
          p-2
          transition
          hover:bg-white/10
          "

        >

          <X size={20} />

        </button>

      </div>

      //messages

      <div
        className="
        flex-1
        overflow-y-auto
        bg-slate-50
        p-5
        "
      >

        {messages.map((message) => (

          <ChatMessage

            key={message.id}

            message={message}

          />

        ))}

        {loading && <TypingIndicator />}

        <div ref={bottomRef} />

      </div>

  

      <ChatInput

        value={input}

        loading={loading}

        onChange={setInput}

        onSend={sendMessage}

      />

    </div>

  );

}

export default ChatWindow;