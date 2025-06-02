import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white font-sans" id="footer">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex-1 flex flex-col">
          <img
            src="src/assets/img/footer-logo.png"
            alt="Footer Logo"
            className="mb-4 w-40 md:w-48"
          />
          <p className="text-[#E1E1E1] text-sm leading-relaxed mb-12 max-w-xs">
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting in
          </p>
          <div className="flex items-center gap-4 text-white text-lg mb-6">
            <a href="#" aria-label="LinkedIn" style={{ fontSize: "24px" }}>
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Facebook" style={{ fontSize: "24px" }}>
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" style={{ fontSize: "24px" }}>
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" style={{ fontSize: "24px" }}>
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col lg:ml-[165px]">
          <h2 className="text-xl font-semibold mb-7">Useful Links</h2>
          <ul className="space-y-7 mb-4 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bestsellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline ">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex flex-col ">
          <h2 className="text-xl font-semibold mb-8">Contact Info</h2>
          <p className="text-sm leading-relaxed mb-7 max-w-xs">
            920 Yonge Street, Suite No. 900,
            <br />
            Toronto, ON M4W 3C7
          </p>
          <p className="text-sm mb-7">
            <a href="tel:1-866-529-3033" className="hover:underline">
              1-866-529-3033
            </a>
          </p>
          <p className="text-sm">Mon to Fri : 09:00 AM - 05:00 PM</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-7 text-sm text-white">
        Copyright © 2023, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
