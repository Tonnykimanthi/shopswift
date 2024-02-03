import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { ContextProps, appContext } from "../App";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";

const AccountInfo = () => {
  const {
    navIsActive,
    setNavIsActive,
    likeCount,
    productsInCartCount,
    totalPrice,
  } = useContext(appContext) as ContextProps;
  const [modelIsOpen, setModelIsOpen] = useState<boolean>(false);
  const modal = useRef<HTMLDivElement>(null);

  const handleToggleModel = () => {
    setModelIsOpen((prevState) => !prevState);
  };

  const handleItemsQuantity = (quantity: number) => {
    if (quantity < 1) {
      return "No Items";
    } else if (quantity === 1) {
      return quantity + " Item";
    } else {
      return quantity + " Items";
    }
  };

  useEffect(() => {
    const handleCloseModal = (e: Event) => {
      if (modal.current === null) return;
      if (!modal.current.contains(e.target as HTMLDivElement)) {
        setModelIsOpen(false);
      }
    };
    document.addEventListener("click", handleCloseModal);

    return () => {
      document.removeEventListener("click", handleCloseModal);
    };
  }, []);

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

      {/* Carts */}
      <div ref={modal} className="relative flex gap-x-1">
        <Link to="/carts" className="relative" onClick={handleToggleModel}>
          <FaCartArrowDown className="h-6 w-6 fill-secondary-dark-blue" />
          <small className="absolute -right-2.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-orange text-xs font-medium text-white">
            {productsInCartCount}
          </small>
        </Link>

        <div
          className={`absolute right-0 top-11 z-20 w-64 origin-top-right bg-black p-2 text-white shadow-xl shadow-primary-darkblue/40 transition ${modelIsOpen ? "scale-100" : "scale-0"}`}
        >
          <p className="text-lg font-medium text-primary-lightblue">
            {handleItemsQuantity(productsInCartCount)}
          </p>
          <p className="mt-4 flex justify-between text-primary-green">
            Subtotal: ${totalPrice?.toFixed(2)}
          </p>
          <Link
            to="/carts"
            className="mt-2 block rounded-sm bg-primary-blue py-1.5 text-center text-white transition hover:bg-primary-blue/90 active:scale-95"
          >
            Checkout
          </Link>
        </div>
      </div>

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
