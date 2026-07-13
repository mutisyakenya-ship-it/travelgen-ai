import { ThumbsUp } from "lucide-react";

type Props = {
  likes: number;
  liked: boolean;
  onClick: () => void;
};

function LikeButton({
  likes,
  liked,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
      inline-flex
      items-center
      gap-2
      rounded-xl
      px-5
      py-3
      font-semibold
      text-white
      transition

      ${
        liked
          ? "bg-blue-700 hover:bg-blue-800"
          : "bg-blue-600 hover:bg-blue-700"
      }
      `}
    >
      <ThumbsUp
        size={18}
        fill={liked ? "currentColor" : "none"}
      />

      {likes}
    </button>
  );
}

export default LikeButton;