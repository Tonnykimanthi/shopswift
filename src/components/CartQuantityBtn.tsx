import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { ContextProps, appContext } from "../App";
import { productProps } from "../pages/Shop";

interface itemProps {
  item: productProps;
}

const CartQuantityBtn = ({ item }: itemProps) => {
  const { handleDecreaseQuantity, handleIncreaseQuantity, productQuantity } =
    useContext(appContext) as ContextProps;

  return (
    <div className="border border-primary-orange/50 flex justify-evenly items-center w-full py-1 px-5 font-medium transition" onClick={e => e.preventDefault()}>
      <button className="bg-primary-orange hover:scale-105 active:scale-100 rounded text-white p-2 transition"
        onClick={() => {
          handleDecreaseQuantity(item.id);
        }}
      >
        <FaMinus className="text-xl" />
      </button>
      <span className="text-xl">{productQuantity[item.id] || 0}</span>
      <button className="bg-primary-orange hover:scale-105 active:scale-100 rounded text-white p-2 transition"
        onClick={() => {
          handleIncreaseQuantity(item.id);
        }}
      >
        <FaPlus className="text-xl" />
      </button>
    </div>
  );
};

export default CartQuantityBtn;
