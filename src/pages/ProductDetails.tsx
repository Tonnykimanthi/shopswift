import { useContext, useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
// Components/icons
import AddToCartBtn from "../components/AddToCartBtn";
import OrderNowSection from "../components/OrderNowSection";
import EmptyLikeButton from "../components/EmptyLikeButton";
import FilledLikeButton from "../components/FilledLikeButton";
import { ContextProps, appContext } from "../App";

type productProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );
  const { like, handleLike } = useContext(appContext) as ContextProps;

  const [product, setProduct] = useState<productProps | null>(null);

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  return (
    <div className="mt-5 px-8 flex flex-col items-center max-lg:px-5 max-sm:px-2">
      {loading && <Loader />}
      {!loading && error ? (
        <ErrorMessage />
      ) : (
        <>
          {product && (
            <main className="py-4 bg-slate-50 relative max-lg:px-5">
              <section className="flex gap-x-2 max-md:flex-col max-md:items-center bg-slate-50">
                <div className="flex-shrink-0 max-w-72 p-2 overflow-hidden max-md:w-full">
                  <img
                    className="object-cover w-full"
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                <div className="w-2/3 flex flex-grow max-lg:flex-col divide-y-2 max-md:w-full">
                  <div>
                    {/* Title */}
                    <div className="flex -mt-2 gap-x-2 max-md:mt-0">
                      <h2 className="mt-1 text-2xl font-medium leading-tight max-md:text-center">
                        {product.title}
                      </h2>
                      <div
                        onClick={(e) => {
                          handleLike(e, product.id);
                        }}
                      >
                        {like[product.id] ? (
                          <FilledLikeButton />
                        ) : (
                          <EmptyLikeButton />
                        )}
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="block text-3xl font-bold">
                        ${product.price}
                      </span>
                      <span className="mt-2 block text-lg italic font-medium">
                        Category:{" "}
                        <Link
                          to={`/${product.category}`}
                          className="not-italic text-primary-blue hover:underline underline-offset-2 capitalize"
                        >
                          {product.category}
                        </Link>
                      </span>
                      <span className="text-lg italic font-medium">
                        Rating:{" "}
                        <small className="text-lg text-primary-green font-medium">
                          {product.rating.rate}
                        </small>
                      </span>

                      {/* Product Description */}
                      <section className="mt-5">
                        <h3 className="text-xl font-medium underline underline-offset-2">
                          Product Description
                        </h3>
                        <p className="mt-1">{product.description}</p>
                      </section>
                    </div>
                    <div className="mt-5 px-2 w-full">
                      <AddToCartBtn />
                    </div>
                  </div>

                  <OrderNowSection />
                </div>
              </section>
            </main>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetails;
