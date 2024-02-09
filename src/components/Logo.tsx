import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="w-40 max-lg:w-32" src="images/logo.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
