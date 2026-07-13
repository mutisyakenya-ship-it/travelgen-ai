import { FileDown } from "lucide-react";

type Props = {
  onClick: () => void;
};

function ExportButton({
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
      bg-green-600
      px-5
      py-3
      font-semibold
      text-white
      transition
      hover:bg-green-700
      "
    >
      <FileDown size={18} />

      Export PDF
    </button>
  );
}

export default ExportButton;