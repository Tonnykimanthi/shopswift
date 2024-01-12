import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { appContext } from "../App";
import { IoMdClose } from "react-icons/io";

interface NavcontextProps {
  navIsActive: boolean;
  setNavIsActive: (navIsActive: boolean) => void;
}
const SmScreensNavbar = () => {
  const { navIsActive, setNavIsActive } = useContext(
    appContext
  ) as NavcontextProps;

  const navBar = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleCloseNavbar = (e: Event) => {
      if (navBar.current === null) return;

      if (!navBar.current.contains(e.target as HTMLBodyElement)) {
        setNavIsActive(false);
      }
    };

    document.body.addEventListener("click", handleCloseNavbar);

    return () => {
      document.body.removeEventListener("click", handleCloseNavbar);
    };
  });

  return (
    <nav
      ref={navBar}
      className={`absolute top-0 left-2/4 right-0 bottom-0 flex justify-center bg-primary-darkblue transition origin-top-right z-10 ${
        navIsActive ? "scale-100" : "scale-0"
      }`}
    >
      {/* Close nav btn */}
      <button
        className="absolute top-6 right-6 text-slate-50 hover:text-primary-red hover:scale-125 transition"
        onClick={() => {
          setNavIsActive(!navIsActive);
        }}
      >
        <IoMdClose className="w-6 h-6" />
      </button>

      <ul className="mt-20 space-y-5 text-cente text-primary-yellow text-xl">
        <li className="hover:text-primary-orange transition-colors">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-primary-orange transition-colors">
          <Link to="/shop">Shop</Link>
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
