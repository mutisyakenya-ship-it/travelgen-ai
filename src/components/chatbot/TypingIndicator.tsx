import { Bot } from "lucide-react";

function TypingIndicator() {
  return (
    <div className="mb-5 flex justify-start">

      <div className="flex gap-3">

        <Bot
          size={22}
          className="mt-1 text-green-700"
        />

        <div className="rounded-2xl bg-white px-4 py-3 shadow">

          <div className="flex gap-1">

            <span className="h-2 w-2 animate-bounce rounded-full bg-green-600" />

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-green-600"
              style={{ animationDelay: "0.2s" }}
            />

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-green-600"
              style={{ animationDelay: "0.4s" }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default TypingIndicator;