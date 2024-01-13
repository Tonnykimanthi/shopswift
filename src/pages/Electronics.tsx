import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ProductItem from "../components/ProductItem";

interface productProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Electronics = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );



  return (
    <div className="p-5 flex flex-col items-center">
      {loading && <Loader />}

      {!loading && error ? (
        <ErrorMessage />
      ) : (
        <div className="flex flex-col items-center w-full">
          <main className="mt-3 grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {((data as productProps[]) || []).map((item) => (
              <ProductItem item={item} key={item.id}/>
            ))}
          </main>
        </div>
      )}
    </div>
  );
};

export default Electronics;
