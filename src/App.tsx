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
import { createContext, useState } from "react";

interface NavContextProps {
  navIsActive: boolean;
  setNavIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const navContext = createContext<NavContextProps | null>(null);

function App() {
  const [navIsActive, setNavIsActive] = useState(false);

  return (
    <navContext.Provider value={{ navIsActive, setNavIsActive }}>
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
    </navContext.Provider>
  );
}

export default App;
