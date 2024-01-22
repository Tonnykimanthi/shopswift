import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProps, appContext } from "../App";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";

const AccountInfo = () => {
  const { navIsActive, setNavIsActive, likeCount, productsInCartCount } = useContext(appContext) as ContextProps;

  return (
    <div className="mr-2.5 flex items-center gap-x-5">
      <button className="mr-2 max-md:mr-0 text-primary-blue text-lg py-1 rounded hover:text-secondary-blue transition">
        <Link to="/login">Login</Link>
      </button>

      {/* Favorites */}
      <Link to="/shop/savedproducts" className="max-md:hidden relative">
        <MdFavoriteBorder className="w-6 h-6 fill-primary-darkblue"/>
        <small className="text-white text-xs font-medium w-5 h-5 flex justify-center items-center rounded-full absolute -top-1.5 -right-2.5 bg-primary-orange">{likeCount}</small>
      </Link>

      {/* Carts' */}
      <Link to="" className="flex gap-x-1 relative">
        <FaCartArrowDown className="w-6 h-6 fill-secondary-dark-blue"/>
        <small className="text-white text-xs font-medium w-5 h-5 flex justify-center items-center rounded-full absolute -top-1.5 -right-2.5 bg-primary-orange">{productsInCartCount}</small>
      </Link>

      {/* Btn to show sm screens navbar */}
      <button className="hidden max-md:block ml- p-2 rounded-full hover:text-slate-50 hover:bg-primary-darkblue transition" onClick={(e)=>{
        e.stopPropagation()
        setNavIsActive(!navIsActive)
      }}>
        <HiOutlineMenu className="w-6 h-6"/>
      </button>
    </div>
  );
};

export default AccountInfo;
