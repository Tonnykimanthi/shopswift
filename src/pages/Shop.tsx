import useFetch from "../hooks/useFetch";
import Search from "../components/Search";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { useEffect, useState } from "react";
import AddToCartBtn from "../components/AddToCartBtn";
import NoResultsFound from "../components/NoResultsFound";
import { Link } from "react-router-dom";
import EmptyLikeButton from "../components/EmptyLikeButton";
import FilledLikeButton from "../components/FilledLikeButton";

interface productProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface likeProps {
  [id: number]: boolean
}

const Shop = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const [products, setProducts] = useState<productProps[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [like, setLike] = useState<likeProps>({});

  useEffect(() => {
    handleSearchProduct();

      // Get liked products from LS
      const likedProducts = localStorage.getItem("likedProducts")
      if(likedProducts){
        setLike(JSON.parse(likedProducts));
      }
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

  const handleLike = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    e.preventDefault()
    setLike((prevState) => {
      const likedProducts = {...prevState, [id]: !prevState[id] }
      localStorage.setItem("likedProducts", JSON.stringify(likedProducts))
      return likedProducts;
    });
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
            <Search
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              handleSearchProduct={handleSearchProduct}
            />
          )}

          <main className="mt-3 w-full grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {(products as productProps[]).map((item) => (
              <Link to={`/shop/${item.id}`} key={item.id}>
                <article className="bg-white flex flex-col p-4 rounded cursor-pointer overflow-hidden group relative">
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
          {products.length === 0 && !loading && <NoResultsFound />}
        </div>
      )}
    </div>
  );
};

export default Shop;
