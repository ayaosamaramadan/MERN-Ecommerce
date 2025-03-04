import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { salesProducts } from "../api/productss";
import { Productpro } from "../types/product";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import { addToCart, decFromCart, inctoCart } from "../reducers/cart";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { addToWish, removeFromWish } from "../reducers/wishlistt";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const Theproduct = () => {
  const cart = useSelector((state: RootState) => state.cartt.items);
  const wishitem = useSelector((state: RootState) => state.wish.items);
 const theAuth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const { id } = useParams<{ id: string }>();
  const product = id
    ? salesProducts.find((product: Productpro) => product.id === parseInt(id))
    : undefined;

  if (!product) {
    return <div>Product not found</div>;
  }

  const inc = (product: Productpro) => {
    dispatch(inctoCart(product));
  };

  const dec = (product: Productpro) => {
    dispatch(decFromCart(product.id));
  };

  const addtowish = (product: Productpro) => {
    dispatch(addToWish(product));
  };

  const removefromwish = (product: Productpro) => {
    dispatch(removeFromWish(product));
  };

  const handleAddToCart = (product: Productpro) => {
    dispatch(addToCart(product));
  };
  const goToProduct = (id: number) => {
    window.location.href = `/product/${id}`;
  };

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <>
      <div className="mt-52 ml-[10.5rem] space-x-2 flex">
        <span className="text-gray-400">Account</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400">Gaming</span>
        <span className="text-gray-400">/</span>
        <span>{product.name}</span>
      </div>

      <div
        ref={ref}
        className="flex mt-10 ml-[10rem] mr-[10rem] space-x-10 justify-center"
      >
        <div className="w-[100%] h-[50%] p-20 bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div className="border-b-2 pb-4 mb-4 w-full">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="flex pr-1 mt-2">
                  {(product.stars || 0) > i ? (
                    <FaStar className="text-yellow-500" />
                  ) : (
                    <CiStar className="text-gray-900" />
                  )}
                </span>
              ))}
              <div className="text-gray-600 mt-2 ml-1 text-sm">
                ({product.rate}) |
                <span className="text-green-500"> In Stock</span>
              </div>
            </div>
            <p className="text-xl mt-2">${product.afterdiscount}.00</p>
            <p className="mt-2 text-[1rem] w-full">{product.desc}</p>
          </div>
          <div className="flex items-center mb-4">
            <h2 className="mr-2 text-[1rem]">Colours:</h2>
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <h2 className="mr-2 text-[1rem]">Size:</h2>
            <div className="flex space-x-2 text-[1rem]">
              <div className="border-[0.01rem] cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500 border-black px-2 py-1 rounded">
                XS
              </div>
              <div className="border-[0.01rem] cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500 border-black px-2 py-1 rounded">
                S
              </div>
              <div className="border-[0.01rem] cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500 border-black px-2 py-1 rounded">
                M
              </div>
              <div className="border-[0.01rem] cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500 border-black px-2 py-1 rounded">
                L
              </div>
              <div className="border-[0.01rem] cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500 border-black px-2 py-1 rounded">
                XL
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center mb-4 text-[1rem] mr-3 border-[0.1rem] border-gray-500 rounded">
              <button
                type="submit"
                title="btn"
                onClick={() => theAuth._id ? dec(product) : toast.error("Please login to add to wishlist")}
                  
                className="border-r-[0.1rem] hover:bg-red-500 hover:border-red-500 hover:text-white border-gray-500 px-3 text-xl rounded"
              >
                -
              </button>
              <p className="px-3 text-[1rem] mx-2 mt-1">
                {cartItem ? cartItem.quantity : 0}
              </p>
              <button
                type="submit"
                title="btn"
                
                onClick={() => theAuth._id ? inc(product) : toast.error("Please login to add to wishlist")}
                  
                className="border-l-[0.1rem] hover:bg-red-500 hover:border-red-500 hover:text-white border-gray-500 px-3 text-xl rounded"
              >
                +
              </button>
            </div>
            <div className="flex items-center mb-4 text-[1rem]">
            {theAuth._id ? (
              <Link to="/cart">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Buy Now
                </button>
              </Link>
            ) : (
              <Link to="/sign">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Buy Now
                </button>
              </Link>
            )}
              <div className="border-2 border-gray-200 p-2 rounded ml-2 text-[1.1rem]">
              {/* className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded" */}
                {wishitem.find((item) => item.id === product.id) ? (
                  <IoIosHeart
                    className="cursor-pointer text-red-500 bg-white rounded-2xl"
                    onClick={() => removefromwish(product)}
                  />
                ) : (
                  <IoIosHeartEmpty
                    className="cursor-pointer bg-white rounded-2xl"
                    onClick={() => theAuth._id ? addtowish(product) : toast.error("Please login to add to wishlist")}
                                      
                  />
                )}
              </div>
            </div>
          </div>

          <div className="border-[0.2rem] rounded p-4 w-[80%] text-[1rem] mt-5">
            <div className="flex border-b-[0.2rem] pb-4">
              <div className="pr-2">
                <img
                  src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1741045606/cdqjcyixdpodrdvi0mtz.png"
                  alt=""
                />
              </div>
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="underline text-[0.9rem]">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex pt-4">
              <div className="pr-2">
                <img
                  src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1741045606/mstatpxvwndmk3tajxux.png"
                  alt=""
                />
              </div>
              <div>
                <p className="font-semibold">Return Delivery</p>
                <p className="text-[0.9rem]">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-24 mr-20">
        <div className="justify-between flex mt-20 mr-4 ml-5 mb-3">
          <div>
            <div className="flex">
              <img
                src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740961661/react%20eco/bexzrdyfcykbnoamh2zd.png"
                alt=""
              />
              <p className="ml-5 text-[1.2rem] text-red-500 mt-2">
                Related Item
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 justify-center">
          {salesProducts.slice(8, 12).map((item) => (
            <div key={item.id}>
              <div className="flex flex-col col-span-4 rounded hover:opacity-100 relative group m-4 border border-gray-200 p-4 bg-slate-100">
                <div className="justify-items-end w-full">
                  <IoEyeOutline
                    className="bg-white rounded-2xl cursor-pointer text-[2rem] p-1.5 mr-[14px]"
                    onClick={() => goToProduct(item.id)}
                  />
                </div>

                <img
                  src={item.image}
                  alt="item"
                  className="w-[230px] h-[180px] hover:opacity-80"
                />

                <div className="bg-black rounded flex text-white py-2 text-center justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 w-full">
                  <IoCartOutline className="text-[1.2rem]" />
                  <button
                    type="submit"
                    onClick={() => handleAddToCart(item)}
                    className="text-[0.9rem]"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="flex flex-col rounded hover:opacity-100 relative group mt-4 p-4">
                <div className="mt-2 ">
                  <p className="font-semibold mb-2">{item.name}</p>
                  <div className="flex">
                    <p className="text-red-600 pr-5">${item.afterdiscount}</p>
                    <del className="text-gray-500">${item.price}</del>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="flex pr-1 mt-2">
                        {(item.stars || 0) > i ? (
                          <FaStar className="text-yellow-500" />
                        ) : (
                          <CiStar className="text-gray-900" />
                        )}
                      </span>
                    ))}
                    <div className="text-gray-600 mt-2 ml-1 text-sm">
                      ({product.rate})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Theproduct;
