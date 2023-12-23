import { Link } from "react-router-dom";
import { useContext } from "react";
import { navContext } from "../App";
import { IoMdClose } from "react-icons/io";


interface NavcontextProps {
    navIsActive: boolean;
    setNavIsActive: (navIsActive: boolean) => void;
  }
const SmScreensNavbar = () => {
  const { navIsActive, setNavIsActive } = useContext(navContext) as NavcontextProps;

  return (
    <nav
      className={`absolute top-0 left-0 right-0 bottom-0 flex justify-center bg-primary-dark-blue transition origin-top-right ${
        navIsActive ? "scale-100" : "scale-0"
      }`}
    >
      {/* Close nav btn */}
      <button className="absolute top-5 right-5 text-slate-50 hover:text-primary-red hover:scale-125 transition" onClick={()=>{
        setNavIsActive(!navIsActive)
      }}>
        <IoMdClose className="w-6 h-6 " />
      </button>

      <ul className="mt-20 space-y-5 text-cente text-primary-yellow text-xl">
        <li className="hover:text-primary-orange transition-colors">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-primary-orange transition-colors">
          <Link to="/about">About Us</Link>
        </li>
        <li className="hover:text-primary-orange transition-colors">
          <Link to="/electronics">Electronics</Link>
        </li>
        <li className="hover:text-primary-orange transition-colors">
          <Link to="/jewelery">Jewelery</Link>
        </li>
        <li className="hover:text-primary-orange transition-colors">
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SmScreensNavbar;