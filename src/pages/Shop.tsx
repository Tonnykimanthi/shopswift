import { useEffect, useState } from "react";
// Components
import useFetch from "../hooks/useFetch";
import Search from "../components/Search";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import NoResultsFound from "../components/NoResultsFound";
import ProductItem from "../components/ProductItem";
import CategoriesTitle from "../components/CategoriesTitle";

export interface productProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Shop = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const [products, setProducts] = useState<productProps[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    handleSearchProduct();
  }, [data, searchValue]);

  const handleSearchProduct = () => {
    if (!data) {
      setProducts([]);
      return;
    }

    if (searchValue === "") {
      setProducts(data);
      return;
    } else {
      const filterBySearch = (data as productProps[]).filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setProducts(filterBySearch);
    }
  };

  return (
    <div className="mt-4 px-5 flex flex-col items-center">
      {loading && <Loader />}

      {!loading && error ? (
        <ErrorMessage />
      ) : (
        <div className="flex flex-col items-center w-full">
          {/* Search */}
          {!loading && (
            <>
              <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleSearchProduct={handleSearchProduct}
              />
              <CategoriesTitle title="All Categories"/>
            </>
          )}

          <main className="mt-3 w-full grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {(products as productProps[]).map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
          </main>
          {products.length === 0 && !loading && <NoResultsFound />}
        </div>
      )}
    </div>
  );
};

export default Shop;
