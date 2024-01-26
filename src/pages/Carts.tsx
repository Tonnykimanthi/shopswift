import { useContext, useEffect, useState } from "react";
import { ContextProps, appContext } from "../App";
import useFetch from "../hooks/useFetch";
import { productProps } from "./Shop";
import Loader from "../components/Loader";
import CategoriesTitle from "../components/CategoriesTitle";
import ErrorMessage from "../components/ErrorMessage";
import ProductItem from "../components/ProductItem";

const Carts = () => {
  const { productQuantity } = useContext(appContext) as ContextProps;
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products",
  );
  const [carts, setCarts] = useState<productProps[]>();

  useEffect(() => {
    if (data) {
      const filterProductQuantityByIds = Object.keys(productQuantity)
        .filter((id) => productQuantity[Number(id)] > 0)
        .map(Number);

      console.log("ids", filterProductQuantityByIds);

      const filteredData = (data as productProps[]).filter((product) => {
        return filterProductQuantityByIds.includes(product.id);
      });
      setCarts(filteredData);
    }
  }, [data]);

  console.log(carts);

  return (
    <div className="mt-4 flex flex-col items-center px-5">
      {loading && <Loader />}
      {!loading && !error && carts?.length !== 0 && (
        <CategoriesTitle title="Carts" />
      )}

      {!loading && error ? (
        <ErrorMessage />
      ) : (
        <>
          <main className="mt-3 grid w-full grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {carts?.map((item) => <ProductItem item={item} key={item.id} />)}
          </main>
          {carts?.length === 0 && (
            <p className="text-xl text-slate-100">You have no carts</p>
          )}
        </>
      )}
    </div>
  );
};

export default Carts;
