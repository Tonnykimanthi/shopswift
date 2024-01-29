import { NavLink } from "react-router-dom";

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
];

const Navbar = () => {
  return (
    <nav className="max-md:hidden">
      <ul className="flex items-center gap-x-5 text-xl">
        {navLinks.map((item) => (
          <li key={item.name} className="transition-colors hover:text-secondary-blue">
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                isActive ? "text-primary-blue" : ""
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

export default Navbar;
