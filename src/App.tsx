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

export interface ContextProps {
  navIsActive: boolean;
  setNavIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  like: likeProps;
  handleLike: (e: React.MouseEvent<HTMLDivElement>, id: number) => void
}
interface likeProps {
  [id: number]: boolean;
}

export const appContext = createContext<ContextProps | null>(null);

function App() {
  const [navIsActive, setNavIsActive] = useState(false);
  const [like, setLike] = useState<likeProps>({});

  useEffect(() => {
    // Get liked products from LS
    const likedProducts = localStorage.getItem("likedProducts");
    if (likedProducts) {
      setLike(JSON.parse(likedProducts));
    }
  }, []);

  const handleLike = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    e.preventDefault();
    setLike((prevState) => {
      const likedProducts = { ...prevState, [id]: !prevState[id] };
      localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
      return likedProducts;
    });
  };

  return (
    <appContext.Provider value={{ navIsActive, setNavIsActive, like, handleLike }}>
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
        </Routes>
      </Router>
    </appContext.Provider>
  );
}

export default App;
