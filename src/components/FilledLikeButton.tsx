import { FaHeart } from "react-icons/fa";


const FilledLikeButton = () => {
  return (
    <button className="self-start p-2 rounded-full hover:bg-primary-orange/30 transition max-md:absolute top-2 right-2">
      <FaHeart className="w-6 h-6 fill-primary-orange" />
    </button>
  )
}

export default FilledLikeButton