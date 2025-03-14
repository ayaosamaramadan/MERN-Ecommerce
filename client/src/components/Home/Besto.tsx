import { useEffect, useState } from "react";
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoIosArrowRoundUp,
  IoIosHeart,
  IoIosHeartEmpty,
} from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Products from "./Products";
import { salesProducts } from "../../api/productss";
import { Productpro } from "../../types/product";
import Button from "@mui/material/Button";
import Serv from "./Serv";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../reducers/cart";
import { addToWish, removeFromWish } from "../../reducers/wishlistt";
import { RootState } from "../../main";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

const Besto = () => {
  const navigate = useNavigate();
  // const item1 = useSelector((state: RootState) => state.cartt.items);
  const wishitem = useSelector((state: RootState) => state.wish.items);
  const theAuth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const handleAddToCart = (product: Productpro) => {
    dispatch(addToCart(product));
  };

  // const [isLove, setIsLove] = useState<{ [key: number]: boolean }>({});
  const addtowish = (product: Productpro) => {
    dispatch(addToWish(product));
  };

  const removefromwish = (product: Productpro) => {
    dispatch(removeFromWish(product));
  };

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

  const goToProduct = (id: number) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row ml-[5%] mt-[5%] mr-[5%] justify-between">
      <div>
          <div className="flex mt-10">
            <img
              src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740961661/react%20eco/bexzrdyfcykbnoamh2zd.png"
              alt="Product image"
            />
            <p className="text-red-500 font-bold ml-5 mt-2">This Month</p>
          </div>
          <div className=" mt-5">
            <h1 className="2xl:text-[2rem] xl:text-[2rem] lg:text-[1.8rem] md:text-[1.4rem] font-semibold">Best Selling Products</h1>
          </div>
        </div>

        <div>
        
            <Button
            variant="contained"
            type="submit"
            sx={{
              mb: 5,
              backgroundColor: "#DB4444",
              "&:hover": { backgroundColor: "#C43D3D" },
              px: 6,
              py: 2,
              mt: 10,
              color: "#fff",
              textAlign: "center",
              borderRadius: "4px",
            }}
            >
            View All
            </Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {salesProducts.slice(5, 9).map((product: Productpro) => (
          <div key={product.id}>
            <div className="flex flex-col rounded hover:opacity-100 relative group m-4 border border-gray-200 p-4 bg-slate-100">
              <div className="justify-items-end w-full">
                {wishitem.find((item) => item.id === product.id) ? (
                  <IoIosHeart
                    className="cursor-pointer text-red-500 bg-white mt-2 rounded-2xl mr-[14px] text-3xl p-1"
                    onClick={() => removefromwish(product)}
                  />
                ) : (
                  <IoIosHeartEmpty
                    className="cursor-pointer bg-white mt-2 rounded-2xl mr-[14px] text-3xl p-1"
                    onClick={() =>
                      theAuth._id
                        ? addtowish(product)
                        : toast.error("Please login to add to wishlist")
                    }
                  />
                )}

                <IoEyeOutline
                  className="bg-white mt-2 rounded-2xl text-3xl p-1 mr-[14px] cursor-pointer"
                  onClick={() => {
                    goToProduct(product.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}/>
              </div>

              <img
                src={product.image}
                alt="product"
                className="w-[230px] h-[180px] hover:opacity-80"
              />

              <div className="bg-black rounded text-white py-2 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 w-full">
                <button
                  type="submit"
                  onClick={() =>
                    theAuth._id
                      ? handleAddToCart(product)
                      : toast.error("Please login to add to cart")
                  }
                >
                  Add To Cart
                </button>
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
                  <>
                    <span key={i} className="flex pr-1 mt-2">
                      {(product.stars || 0) > i ? (
                        <FaStar className="text-yellow-500" />
                      ) : (
                        <CiStar className="text-gray-900" />
                      )}
                    </span>
                  </>
                ))}
                <div className="text-gray-600 mt-2 ml-1 text-sm">
                  ({product.rate})
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-32">
        <img
          src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740776148/react%20eco/vecqbwrofwmkkalmj14b.png"
          alt=""
          className="w-[80%] h-[80%]"
        />
      </div>

      <div className="flex flex-col md:flex-row ml-[5%] mt-[5%] mr-[5%] mb-[5%] justify-between">
        <div>
          <div className="flex mt-10">
            <img
              src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740961661/react%20eco/bexzrdyfcykbnoamh2zd.png"
              alt=""
            />
            <p className="text-red-500 font-bold ml-5 mt-2">Our Products</p>
          </div>
          <div className=" mt-5">
            <h1 className="2xl:text-[2rem] xl:text-[2rem] lg:text-[1.8rem] md:text-[1.4rem]  font-semibold">Explore Our Products</h1>
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

      <Link
          to="./Allproducts"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: "#DB4444",
          padding: "12px",
          paddingX: "25px",
          color: "#fff",
        }}
          >
        View All Products
          </Button>
        </Link>
      </div>

      <div className="justify-between ml-[5%] mr-32 mt-24 mb-10 ">
    
      <div className="flex mt-10">
          <img
            src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740961661/react%20eco/bexzrdyfcykbnoamh2zd.png"
            alt=""
          />
          <p className="text-red-500 font-bold ml-5 mt-2">Featured</p>
        </div>
        <div className=" mt-5">
          <h1 className="2xl:text-[2rem] xl:text-[2rem] lg:text-[1.8rem] md:text-[1.4rem]  font-semibold">New Arrival</h1>
        </div>
      </div>
      

      <div className="flex flex-col lg:flex-row 2xl:m-20 xl:m-10 lg:m-5 justify-center">
        <div className="flex justify-center lg:justify-start mb-5 mr-5">
          <img
            className="w-full mr-0 xl:mt-0 lg:mr-5"
            src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740781499/react%20eco/rx6lldjcbvsva9a8vg5k.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <div className="mb-5">
        <img
          className="2xl:w-full 2xl:h-auto xl:w-full xl:h-auto lg:w-[500px] lg:h-[210px]"
          src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740781499/react%20eco/q7qxpob47cz0o4hgpdds.png"
          alt=""
        />
          </div>

            <div className="flex flex-col lg:flex-row">
            <img
              key="image1"
              className="w-full h-auto lg:w-[48%] lg:mr-5 mb-5 lg:mb-0"
              src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740781499/react%20eco/avunqcypikpcv9j9av77.png"
              alt=""
            />
            <img
              key="image2"
              className="w-full h-auto lg:w-[48%]"
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
