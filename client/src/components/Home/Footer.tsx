import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { LuSendHorizontal } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="pt-10 bg-black mt-10 w-full text-white">
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between space-y-10 sm:space-y-0 sm:space-x-10 bg-black text-white px-5 sm:px-10">
        <div className="flex flex-col sm:w-1/2 md:w-1/5">
          <h2 className="text-lg pb-3">Exclusive</h2>
          <h3 className="text-base">Subscribe</h3>
          <p className="text-base pb-3 pt-5">Get 10% off your first order</p>
          <div className="flex border-2 rounded-md justify-between mt-2 w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-1 pl-3 w-full bg-transparent rounded-l-xl"
            />
            <button
              className="text-white p-2 rounded-r-xl"
              title="btn"
              type="submit"
            >
              <LuSendHorizontal className="text-xl" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start mt-1 sm:w-1/2 md:w-1/5">
          <h3 className="text-base pb-5">Support</h3>
          <p className="text-base pb-3">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-base pb-3">exclusive@gmail.com</p>
          <p className="text-base pb-3">+88015-88888-9999</p>
        </div>

        <div className="flex flex-col items-start sm:w-1/2 md:w-1/5">
          <h3 className="text-base pb-5">Account</h3>
          <p className="text-base pb-3">My Account</p>
          <p className="text-base pb-3">Login / Register</p>
          <p className="text-base pb-3">Cart</p>
          <p className="text-base pb-3">Wishlist</p>
          <p className="text-base pb-3">Shop</p>
        </div>

        <div className="flex flex-col items-start sm:w-1/2 md:w-1/5">
          <h3 className="text-base pb-5">Quick Link</h3>
          <p className="text-base pb-3">Privacy Policy</p>
          <p className="text-base pb-3">Terms Of Use</p>
          <p className="text-base pb-3">FAQ</p>
          <p className="text-base pb-3">Contact</p>
        </div>

        <div className="flex flex-col items-start sm:w-1/2 md:w-1/5">
          <h3 className="text-base pb-5">Download App</h3>
          <p className="text-base text-gray-400 pb-2">
            Save $3 with App New User Only
          </p>
          <div className="flex">
            <img
              src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740784679/react%20eco/adhzzy7rvy8wjrkqv9nx.png"
              alt="qrcode"
              className="w-16 h-16"
            />
            <div className="flex flex-col space-y-2 ml-2">
              <img
                src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740784759/react%20eco/jxehpv5wyrbx7icaoa65.png"
                alt="app store"
                className="w-16 h-5"
              />
              <img
                src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740784759/react%20eco/gkjj6ktfvpkvuvgkoaoe.png"
                alt="google play"
                className="w-16 h-5"
              />
            </div>
          </div>
          <div className="flex space-x-3 mt-3">
            <FaFacebookF />
            <FiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="flex bg-black text-base pb-5 text-gray-700 justify-center mt-5">
        <FaRegCopyright />
        <p className="ml-2">Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
