import { useContext } from "react";
import { ContextProps, appContext } from "../App";
import { productProps } from "../pages/Shop";

interface itemProps{
  item: productProps;
}

const AddToCartBtn = ({item}: itemProps ) => {
  const { handleIncreaseQuantity } = useContext(appContext) as ContextProps;


  return (
    <button className="w-full py-2.5 text-white uppercase font-medium bg-primary-orange/80 hover:bg-primary-orange transition" onClick={(e)=>{
      e.preventDefault()
      handleIncreaseQuantity(item.id)
    }}>
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
