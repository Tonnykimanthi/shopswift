import { useContext } from "react";
import { ContextProps, appContext } from "../App";
import { productProps } from "../pages/Shop";

interface itemProps {
  item: productProps;
}

const AddToCartBtn = ({ item }: itemProps) => {
  const { handleIncreaseQuantity } = useContext(appContext) as ContextProps;

  return (
    <button
      className="w-full bg-primary-orange/80 py-2.5 font-medium uppercase text-white transition hover:bg-primary-orange"
      onClick={(e) => {
        e.preventDefault();
        handleIncreaseQuantity(item.id);
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
