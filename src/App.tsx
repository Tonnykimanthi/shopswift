import Header from "./layouts/Header";
import SmScreensNavbar from "./components/SmScreensNavbar";
// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Electronics from "./pages/Electronics";
import Jewelleries from "./pages/Jewelleries";
import MenClothing from "./pages/MenClothing";
import WomenClothing from "./pages/WomenClothing";
import ProductDetails from "./pages/ProductDetails";
// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import SavedProducts from "./pages/SavedProducts";
import Carts from "./pages/Carts";

export interface ContextProps {
  navIsActive: boolean;
  setNavIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  likedProducts: likedProductsProps;
  handleLike: (e: React.MouseEvent<HTMLDivElement>, id: number) => void;
  likeCount: number;
  handleIncreaseQuantity: (id: number) => void;
  handleDecreaseQuantity: (id: number) => void;
  productQuantity: productQuantityTypes;
  productsInCartCount: number;
}
interface likedProductsProps {
  [id: number]: boolean;
}
interface productQuantityTypes {
  [id: number]: number;
}

export const appContext = createContext<ContextProps | null>(null);

function App() {
  const [navIsActive, setNavIsActive] = useState(false);
  const [likedProducts, setLikedProducts] = useState<likedProductsProps>({});
  const [likeCount, setLikeCount] = useState(0);
  const [productQuantity, setProductQuantity] = useState<productQuantityTypes>(
    {},
  );
  const [productsInCartCount, setproductsInCartCount] = useState(0);

  useEffect(() => {
    // Get product quantity from LS
    const productQuantityFromLS = localStorage.getItem("product-quantity");
    if (productQuantityFromLS) {
      setProductQuantity(JSON.parse(productQuantityFromLS));

      setproductsInCartCount(
        Object.values(JSON.parse(productQuantityFromLS)).filter(
          (value) => value,
        ).length,
      );
    }

    // Get liked products from LS
    const likedProductsFromLS = localStorage.getItem("liked-products");
    if (likedProductsFromLS) {
      setLikedProducts(JSON.parse(likedProductsFromLS));

      // Set likeCount
      setLikeCount(
        Object.values(JSON.parse(likedProductsFromLS)).filter((value) => value)
          .length,
      );
    }
  }, []);

  const handleLike = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    e.preventDefault();
    setLikedProducts((prevState) => {
      const likedProducts = { ...prevState, [id]: !prevState[id] };
      localStorage.setItem("liked-products", JSON.stringify(likedProducts));

      // Set likeCount
      setLikeCount(
        Object.values(likedProducts).filter((value) => value).length,
      );

      return likedProducts;
    });
  };

  const handleIncreaseQuantity = (id: number) => {
    setProductQuantity((prev) => {
      const productsQuantity = { ...prev, [id]: (prev[id] || 0) + 1 };
      localStorage.setItem(
        "product-quantity",
        JSON.stringify(productsQuantity),
      );
      setproductsInCartCount(
        Object.values(productsQuantity).filter((value) => value).length,
      );
      return productsQuantity;
    });
  };
  const handleDecreaseQuantity = (id: number) => {
    setProductQuantity((prev) => {
      const productsQuantity = {
        ...prev,
        [id]: Math.max((prev[id] || 0) - 1, 0),
      };
      localStorage.setItem(
        "product-quantity",
        JSON.stringify(productsQuantity),
      );
      setproductsInCartCount(
        Object.values(productsQuantity).filter((value) => value).length,
      );
      return productsQuantity;
    });
  };

  return (
    <appContext.Provider
      value={{
        navIsActive,
        setNavIsActive,
        likedProducts,
        handleLike,
        likeCount,
        handleDecreaseQuantity,
        handleIncreaseQuantity,
        productQuantity,
        productsInCartCount,
      }}
    >
      <Router>
        <Header />
        {/* Nav for sm screens */}
        <SmScreensNavbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/shop" Component={Shop} />
          <Route path="/electronics" Component={Electronics} />
          <Route path="/jewelery" Component={Jewelleries} />
          <Route path="/men's clothing" Component={MenClothing} />
          <Route path="/women's clothing" Component={WomenClothing} />
          <Route path="/shop/:id" Component={ProductDetails} />
          <Route path="/shop/saved" Component={SavedProducts} />
          <Route path="/shop/carts" Component={Carts} />
        </Routes>
      </Router>
    </appContext.Provider>
  );
}

export default App;
