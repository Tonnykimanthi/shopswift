import { Link } from "react-router-dom";
import { productProps } from "../pages/Shop";
import { ContextProps } from "../App";
import { appContext } from "../App";
import { useContext } from "react";
import AddToCartBtn from "./AddToCartBtn";
import FilledLikeButton from "./FilledLikeButton";
import EmptyLikeButton from "./EmptyLikeButton";

interface productItemProps {
  item: productProps;
}

const ProductItem = ({ item }: productItemProps) => {
  const { like, handleLike } = useContext(appContext) as ContextProps;
  return (
    <Link to={`/shop/${item.id}`}>
      <article className="bg-white flex flex-col p-4 rounded cursor-pointer overflow-hidden group relative">
        <div
          className="absolute top-1 right-1 z-10"
          onClick={(e) => {
            handleLike(e, item.id);
          }}
        >
          {like[item.id] ? <FilledLikeButton /> : <EmptyLikeButton />}
        </div>
        <div className="flex justify-center h-40 overflow-hidden">
          <img
            className="h-full object-cover group-hover:scale-125 transition-all duration-500"
            src={item.image}
            alt={item.title}
          />
        </div>
        <h3 className="mt-2 text-primary-dark-blue font-medium leading-tight line-clamp-1">
          {item.title}
        </h3>

        <div className="flex flex-col mt-auto gap-y-1">
          <span className="text-lg font-bold">{`$${item.price}`}</span>
          <AddToCartBtn />
        </div>
      </article>
    </Link>
  );
};

export default ProductItem;
