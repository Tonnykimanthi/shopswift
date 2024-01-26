import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProps, appContext } from "../App";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";

const AccountInfo = () => {
  const { navIsActive, setNavIsActive, likeCount, productsInCartCount } =
    useContext(appContext) as ContextProps;

  return (
    <div className="mr-2.5 flex items-center gap-x-5">
      <button className="mr-2 rounded py-1 text-lg text-primary-blue transition hover:text-secondary-blue max-md:mr-0">
        <Link to="/login">Login</Link>
      </button>

      {/* to Saved */}
      <Link to="/saved" className="relative max-md:hidden">
        <MdFavoriteBorder className="h-6 w-6 fill-primary-darkblue" />
        <small className="absolute -right-2.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-orange text-xs font-medium text-white">
          {likeCount}
        </small>
      </Link>

      {/* to Carts' */}
      <Link to="/carts" className="relative flex gap-x-1">
        <FaCartArrowDown className="h-6 w-6 fill-secondary-dark-blue" />
        <small className="absolute -right-2.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-orange text-xs font-medium text-white">
          {productsInCartCount}
        </small>
      </Link>

      {/* Btn to show sm screens navbar */}
      <button
        className="ml- hidden rounded-full p-2 transition hover:bg-primary-darkblue hover:text-slate-50 max-md:block"
        onClick={(e) => {
          e.stopPropagation();
          setNavIsActive(!navIsActive);
        }}
      >
        <HiOutlineMenu className="h-6 w-6" />
      </button>
    </div>
  );
};

export default AccountInfo;
