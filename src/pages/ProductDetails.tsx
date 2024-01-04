import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import AddToCartBtn from "../components/AddToCartBtn";

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

  const [product, setProduct] = useState<productProps | null>(null);

  useEffect(() => {
    if (data) {
      setProduct(data);
      console.log(product);
    }
  }, [data]);

  return (
    <div className="mt-5 px-8 flex flex-col items-center">
      {loading && <Loader />}
      {!loading && error ? (
        <ErrorMessage />
      ) : (
        <>
          {product && (
            <main className="p-4 bg-slate-50">
              <section className="flex gap-x-5 bg-slate-50">
                <aside className="w-1/3 max-w-72 overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={product.image}
                    alt={product.title}
                  />
                </aside>

                <div>
                  {/* Title */}
                  <div className="flex -mt-2">
                    <h2 className="-mt-0.5 text-3xl font-medium leading-tight">
                      {product.title}
                    </h2>
                    <button className="self-start p-2 rounded-full hover:bg-primary-orange/30 transition">
                      <FaRegHeart className="w-6 h-6 fill-primary-orange" />
                    </button>
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
                  </div>
                  <button className="mt-5 w-full">
                    <AddToCartBtn />
                  </button>
                </div>

                <aside className="-mt-4 p-3 bg-slate-100">
                  <button className="bg-primary-orange text-white w-52 py-1">
                    Order now
                  </button>
                </aside>
              </section>

              {/* Product Description */}
              <section className="mt-8">
                <h3 className="text-2xl font-medium">Product Description</h3>
              </section>
            </main>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetails;
