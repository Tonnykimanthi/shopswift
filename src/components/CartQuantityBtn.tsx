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
    <div className="border border-primary-orange/80 flex justify-around items-center w-full py-2 font-medium transition" onClick={e => e.preventDefault()}>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleDecreaseQuantity(item.id);
        }}
      >
        <FaMinus className="text-xl" />
      </button>
      <span className="text-xl">{productQuantity[item.id] || 0}</span>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleIncreaseQuantity(item.id);
        }}
      >
        <FaPlus className="text-xl" />
      </button>
    </div>
  );
};

export default CartQuantityBtn;
