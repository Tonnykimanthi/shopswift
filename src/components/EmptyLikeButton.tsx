import { FaRegHeart } from "react-icons/fa";

const EmptyLikeButton = () => {
  return (
    <button className="self-start p-2 rounded-full hover:bg-primary-orange/30 transition max-md:absolute top-2 right-2">
      <FaRegHeart className="w-6 h-6 fill-primary-orange" />
    </button>
  );
};

export default EmptyLikeButton;
