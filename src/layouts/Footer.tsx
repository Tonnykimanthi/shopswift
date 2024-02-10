import { TbWorld } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-5 px-5 text-white max-sm:px-2">
      <div className="flex justify-evenly bg-black/30 p-5">
        <article>
          <h5 className="mb-4 text-lg font-medium">Social</h5>
          <section className="space-y-2 text-gray-300">
            <Link
              to="https://tonykimanthi.github.io/personal-portfolio/public/"
              target="_blank"
              className="flex items-center gap-x-2 hover:text-primary-lightblue transition"
            >
              <TbWorld className="h-5 w-5" />
              <span>Resume</span>
            </Link>
            <Link
              to="https://www.linkedin.com/in/tonnykimanthi/"
              target="_blank"
              className="flex items-center gap-x-2 hover:text-primary-lightblue transition"
            >
              <FaLinkedinIn className="h-5 w-5" />
              <span>LinkedIn</span>
            </Link>
            <Link
              to="https://twitter.com/km_tonny"
              target="_blank"
              className="flex items-center gap-x-2 hover:text-primary-lightblue transition"
            >
              <FaXTwitter className="h-5 w-5" />
              <span>Twitter</span>
            </Link>
            <Link
              to="https://www.instagram.com/toney.k_/"
              target="_blank"
              className="flex items-center gap-x-2 hover:text-primary-lightblue transition"
            >
              <FaInstagram className="h-5 w-5" />
              <span>Instagram</span>
            </Link>
          </section>
        </article>

        <article>
          <h5 className="mb-4 text-lg font-medium">Company</h5>
          <section className="space-y-2 text-gray-300 [&>a]:block">
            <Link to="/" className="hover:text-primary-lightblue transition">
              About Us
            </Link>
            <Link to="/" className="hover:text-primary-lightblue transition">
              Contact Us
            </Link>
            <Link to="/" className="hover:text-primary-lightblue transition">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-primary-lightblue transition">
              Terms of Service
            </Link>
          </section>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
