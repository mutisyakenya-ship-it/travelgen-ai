import { Trash2 } from "lucide-react";

type Props = {
  onClick: () => void;
};

function DeleteButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
      inline-flex
      items-center
      gap-2
      rounded-xl
      bg-red-600
      px-5
      py-3
      font-semibold
      text-white
      transition
      hover:bg-red-700
      "
    >
      <Trash2 size={18} />

      Delete Trip
    </button>
  );
}

export default DeleteButton;