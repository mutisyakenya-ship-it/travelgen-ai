import { Send } from "lucide-react";

type Props = {
  value: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
};

function ChatInput({
  value,
  loading,
  onChange,
  onSend,
}: Props) {
  return (
    <div className="border-t bg-white p-4">

      <div className="flex gap-3">

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSend();
            }
          }}
          placeholder="Ask anything about travelling..."
          className="
          flex-1
          rounded-xl
          border
          px-4
          py-3
          focus:border-green-600
          focus:outline-none
        "
        />

        <button
          onClick={onSend}
          disabled={loading}
          className="
          rounded-xl
          bg-green-700
          px-4
          text-white
          transition
          hover:bg-green-800
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
        >
          <Send size={18} />
        </button>

      </div>

    </div>
  );
}

export default ChatInput;