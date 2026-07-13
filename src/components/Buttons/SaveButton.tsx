import { Save } from "lucide-react";

type Props = {
  onClick: () => void;
  loading?: boolean;
};

function SaveButton({
  onClick,
  loading = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
      inline-flex
      items-center
      gap-2
      rounded-xl
      bg-emerald-600
      px-5
      py-3
      font-semibold
      text-white
      transition
      hover:bg-emerald-700
      disabled:cursor-not-allowed
      disabled:opacity-60
      "
    >
      <Save size={18} />

      {loading ? "Saving..." : "Save Trip"}
    </button>
  );
}

export default SaveButton;