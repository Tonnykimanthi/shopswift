import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const CartQuantityBtn = () => {
  return (
    <div className="border border-primary-orange/80 flex justify-around items-center w-full py-2 font-medium transition">
        <button>
            <FaMinus className="text-xl"/>
        </button>
        <span className="text-xl">0</span>
        <button>
            <FaPlus className="text-xl"/>
        </button>
    </div>
  )
}

export default CartQuantityBtn