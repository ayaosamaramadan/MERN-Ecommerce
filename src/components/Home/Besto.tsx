import { useEffect, useState } from "react";
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoIosArrowRoundUp,
  IoIosHeartEmpty,
} from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Products from "./Products";
import { salesProducts } from "../../api/sales";
import { Productpro } from "../../types/product.";

import Serv from "./Serv";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cart";
import { addToWish } from "../../reducers/wishlistt";

const Besto = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product: Productpro) => {
    dispatch(addToCart(product));
  };

  
    const addtowish = (product: Productpro) => {
        dispatch(addToWish(product));
      }


  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlescrow = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return (
    <>
      <div className="justify-between flex ml-32 mt-24 mr-32">
        <div>
          <div className="flex mt-10">
            <img src="/src/assets/Rectangle 17.png" alt="" />
            <p className="text-red-500 font-bold ml-5 mt-2">This Month</p>
          </div>
          <div className=" mt-5">
            <h1 className="text-[2rem] font-semibold">Best Selling Products</h1>
          </div>
        </div>

        <div>
          <button className="mb-5 bg-red-600 hover:bg-red-700 px-8 rounded text-white py-3 text-center mt-24">
            View All
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {salesProducts.slice(5, 9).map((product: Productpro) => (
          <div key={product.id}>
            <div className="flex flex-col rounded hover:opacity-100 relative group m-4 border border-gray-200 p-4 bg-slate-100">
              <div className="justify-items-end w-full">
                <IoIosHeartEmpty className="bg-white mt-2 rounded-2xl mr-[14px] text-3xl p-1" onClick={()=>addtowish(product)}/>
                <IoEyeOutline className="bg-white mt-2 rounded-2xl text-3xl p-1 mr-[14px]" />
              </div>

              <img
                src={product.image}
                alt="product"
                className="w-[230px] h-[180px] hover:opacity-80"
              />

              <div className="bg-black rounded text-white py-2 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 w-full">
                <button type="submit" onClick={()=>handleAddToCart(product)}>Add To Cart</button>
              </div>
            </div>
            <div className="flex flex-col rounded hover:opacity-100 relative group mt-4 p-4">
              <div className="mt-2 ">
                <p className="font-semibold mb-2">{product.name}</p>
                <div className="flex">
                  <p className="text-red-600 pr-5">${product.afterdiscount}</p>
                  <del className="text-gray-500">${product.price}</del>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="flex pr-1 mt-2">
                    {product.stars > i ? (
                      <FaStar className="text-yellow-500" />
                    ) : (
                      <CiStar className="text-gray-900" />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-32">
        <img
          src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740776148/react%20eco/vecqbwrofwmkkalmj14b.png"
          alt=""
          className="w-auto h-auto"
        />
      </div>

      <div className="justify-between flex ml-32 mt-24 mb-16 mr-32">
        <div>
          <div className="flex mt-10">
            <img src="/src/assets/Rectangle 17.png" alt="" />
            <p className="text-red-500 font-bold ml-5 mt-2">Our Products</p>
          </div>
          <div className=" mt-5">
            <h1 className="text-[2rem] font-semibold">Explore Our Products</h1>
          </div>
        </div>

        <div className="flex ml-12 text-[2.5rem]">
          <IoIosArrowRoundBack className="hover:bg-slate-300 bg-slate-100 mt-[105px] mr-3 rounded-3xl" />
          <IoIosArrowRoundForward className="bg-slate-100 mt-[105px] mr-3 rounded-3xl hover:bg-slate-300" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <Products />
      </div>

      <div className="text-center mt-14">
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 px-8 rounded text-white py-3 text-center"
        >
          View All Products
        </button>
      </div>

      <div className="justify-between ml-40 mt-24 mb-10 mr-32">
        <div className="flex mt-10">
          <img src="/src/assets/Rectangle 17.png" alt="" />
          <p className="text-red-500 font-bold ml-5 mt-2">Featured</p>
        </div>
        <div className=" mt-5">
          <h1 className="text-[2rem] font-semibold">New Arrival</h1>
        </div>
      </div>

      <div className="flex ml-40">
        <div className="flex ">
          <img
            className="w-[500px] h-[523px] mr-5"
            src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740781499/react%20eco/rx6lldjcbvsva9a8vg5k.png"
            alt=""
          />
        </div>
        <div>
          <div>
            <img
              className="w-[500px] h-[250px] mb-5"
              src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740781499/react%20eco/q7qxpob47cz0o4hgpdds.png"
              alt=""
            />
          </div>

          <div className="flex">
            <img
              className="w-[240px] mr-5"
              src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740781499/react%20eco/avunqcypikpcv9j9av77.png"
              alt=""
            />
            <img
              className="w-[240px]"
              src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740781500/react%20eco/aa8lr7pgrhhd75rf3kmz.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Serv />

      <div
        className={`fixed right-5 bottom-5 transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        onClick={handlescrow}
      >
        <div className="flex ml-12 text-[2.5rem]">
          <IoIosArrowRoundUp className="hover:bg-slate-300 bg-slate-100 mt-[105px] mr-3 p-2 cursor-pointer rounded-3xl" />
        </div>
      </div>
    </>
  );
};

export default Besto;
