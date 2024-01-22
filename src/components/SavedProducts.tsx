import { useContext, useEffect, useState } from "react";
import { ContextProps, appContext } from "../App";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { productProps } from "../pages/Shop";
import ProductItem from "./ProductItem";
import CategoriesTitle from "./CategoriesTitle";

const SavedProducts = () => {
  const { likedProducts } = useContext(appContext) as ContextProps;
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products",
  );
  const [savedProducts, setSavedProducts] = useState<productProps[]>();

  useEffect(() => {
    if (data) {
      const filterLikedProductIds = Object.keys(likedProducts)
        .filter((id) => likedProducts[Number(id)] === true)
        .map(Number);

      const filteredData = (data as productProps[]).filter((product) => {
        return filterLikedProductIds.includes(product.id);
      });

      setSavedProducts(filteredData);
    }
  }, [data]);


  return (
    <div className="mt-4 flex flex-col items-center px-5">
      {loading && <Loader />}
      {!loading && !error && savedProducts?.length !== 0 && <CategoriesTitle title="Saved" />}
      {!loading && error ? (
        <ErrorMessage />
      ) : (
        <>
          <main className="mt-3 grid w-full grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {savedProducts?.map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
          </main>
          {savedProducts?.length === 0 && <p className="text-slate-100 text-xl">You have no saved products</p>}
        </>
      )}
    </div>
  );
};

export default SavedProducts;
