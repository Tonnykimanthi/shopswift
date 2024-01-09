import { FaRegHeart } from "react-icons/fa";

const LikeButton = () => {
  return (
    <button className="self-start p-2 rounded-full hover:bg-primary-orange/30 transition">
      <FaRegHeart className="w-6 h-6 fill-primary-orange" />
    </button>
  );
};

export default LikeButton;
