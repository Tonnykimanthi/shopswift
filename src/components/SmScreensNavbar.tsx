import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { appContext } from "../App";
import { IoMdClose } from "react-icons/io";

interface NavcontextProps {
  navIsActive: boolean;
  setNavIsActive: (navIsActive: boolean) => void;
}

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Electronics",
    href: "/electronics",
  },
  {
    name: "Jewelery",
    href: "/jewelery",
  },
  {
    name: "Favorites",
    href: "/saved",
  },
];

const SmScreensNavbar = () => {
  const { navIsActive, setNavIsActive } = useContext(
    appContext,
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
  }, []);

  return (
    <nav
      ref={navBar}
      className={`absolute bottom-0 left-2/4 right-0 top-0 z-20 flex origin-top-right justify-center bg-primary-darkblue transition ${
        navIsActive ? "scale-100" : "scale-0"
      }`}
    >
      {/* Close nav btn */}
      <button
        className="absolute right-6 top-6 text-slate-50 transition hover:scale-125 hover:text-primary-red"
        onClick={() => {
          setNavIsActive(!navIsActive);
        }}
      >
        <IoMdClose className="h-6 w-6" />
      </button>

      <ul className="mt-20 space-y-5 text-xl text-primary-yellow">
        {navLinks.map((item) => (
          <li key={item.name} className="transition-colors hover:text-primary-orange">
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                isActive ? "text-primary-orange" : ""
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SmScreensNavbar;
