import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ProductItem from "../components/ProductItem";
import CategoriesTitle from "../components/CategoriesTitle";

interface productProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const MenClothing = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing",
  );

  return (
    <div className="flex flex-col items-center p-5">
      {loading && <Loader />}

      {!loading && !error && <CategoriesTitle title="Men's clothing" />}

      {!loading && error ? (
        <ErrorMessage />
      ) : (
        <div className="flex w-full flex-col items-center">
          <main className="mt-3 grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {((data as productProps[]) || []).map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
          </main>
        </div>
      )}
    </div>
  );
};

export default MenClothing;
