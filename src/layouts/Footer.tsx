import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-5 px-5 text-white">
      <div className="bg-black/30 p-5">
        <article>
          <h5 className="mb-4 font-medium underline underline-offset-4">
            CONTACT US
          </h5>
          <div className="flex items-center text-gray-100">
            <HiOutlineMail className="h-5 w-5" />
            <span className="ml-2">shopswift@gmail.com</span>
          </div>
          <div className="mt-2 flex items-center text-gray-100">
            <BsTelephone className="h-5 w-5" />
            <span className="ml-2">+01 234 567 89</span>
          </div>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
