import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faBars } from "@fortawesome/free-solid-svg-icons";
import { IoMdContact } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-white">
      <div className="bg-black">
        <h1 className="text-center text-white text-sm py-2">
          Free Standard Shipping Over $49 within Continental United States
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4 gap-4 bg-white">
        <div className="flex w-full items-center justify-between md:hidden">
          <button
            className="text-gray-700 text-2xl cursor-pointer active:scale-95 transition-transform"
            aria-label="Toggle menu"
           
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="flex items-center gap-4 text-lg text-gray-700 cursor-pointer">
            <IoSearchSharp className="hover:text-black transition" />
            <IoMdContact className="hover:text-black transition" />
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="hover:text-black transition"
            />
          </div>
        </div>

        <div className="hidden md:block w-full">
          <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-10 text-sm font-medium text-gray-800">
            <li>
              <a href="#feature" className="hover:text-gray-600">
                Gift Sets
              </a>
            </li>
            <li>
              <a href="#pledge" className="hover:text-gray-600">
                Bath & Body Care
              </a>
            </li>
            <li>
              <a href="#product" className="hover:text-gray-600">
                All Products
              </a>
            </li>
            <li>
              <img
                src="src/assets/img/logo.png"
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </li>
            <li>
              <a href="#order" className="hover:text-gray-600">
                Our Difference
              </a>
            </li>
            <li>
              <a href="#footer" className="hover:text-gray-600">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex justify-end items-center gap-4 text-lg text-gray-700 cursor-pointer">
          <IoSearchSharp className="hover:text-black transition" />
          <IoMdContact className="hover:text-black transition" />
          <FontAwesomeIcon
            icon={faShoppingBag}
            className="hover:text-black transition"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
