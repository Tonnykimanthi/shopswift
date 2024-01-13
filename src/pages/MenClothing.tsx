import { Link } from "react-router-dom";
import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import AddToCartBtn from "../components/AddToCartBtn";
// Icons
import EmptyLikeButton from "../components/EmptyLikeButton";
import FilledLikeButton from "../components/FilledLikeButton";
import { ContextProps, appContext } from "../App";

interface productProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const MenClothing = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const {like, handleLike} = useContext(appContext) as ContextProps;

  return (
    <div className="p-5 flex flex-col items-center">
      {loading && <Loader />}

      {!loading && error ? (
        <ErrorMessage />
      ) : (
        <div className="flex flex-col items-center w-full">

          <main className="mt-3 grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {(data as productProps[] || []).map((item) => (
              <Link to={`/shop/${item.id}`} key={item.id}>
              <article
                className="bg-white flex flex-col p-4 rounded cursor-pointer overflow-hidden group relative"
              >
                <div className="absolute top-1 right-1 z-10" onClick={(e) => {
                    handleLike(e, item.id)
                  }}>
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
            ))}
          </main>
        </div>
      )}
    </div>
  );
};

export default MenClothing;
