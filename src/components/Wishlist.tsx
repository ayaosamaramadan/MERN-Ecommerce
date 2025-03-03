import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import { BsTrash3 } from "react-icons/bs";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { Productpro } from "../types/product";
import { addToCart } from "../reducers/cart";
import { removeFromWish } from "../reducers/wishlistt";
import { salesProducts } from "../api/productss";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Wishlist = () => {
  const items = useSelector((state: RootState) => state.wish.items);

  const dispatch = useDispatch();

  const wishItemCount = items.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const handleAddToCart = (product: Productpro) => {
    dispatch(addToCart(product));
  };

  const removefromwish = (product: Productpro) => {
    dispatch(removeFromWish(product));
  };

  return (
    <>
      <div className="mt-52 ml-24 mr-20">
        <div className="justify-between flex ml-5">
          <span className="text-[1.3rem]">Wishlist ({wishItemCount})</span>
          <button
            type="submit"
            className="mr-[1rem] border-2 border-gray-300 hover:bg-red-500 px-8 rounded text-black hover:text-white py-3 text-center"
          >
            Move All To Bag
          </button>
        </div>

        {items.length === 0 ? (
          <div className="justify-center flex w-[90%] mt-10 py-10 border-2 ml-14">
            <p className="text-center text-gray-500">Your wishlist is empty</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4 justify-center">
              {items.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col col-span-4 rounded hover:opacity-100 relative group m-4 border border-gray-200 p-4 bg-slate-100">
                    <div className="justify-items-end w-full">
                      <BsTrash3
                        className="bg-white mt-2 rounded-2xl cursor-pointer text-[2rem] p-1.5 mr-[14px]"
                        onClick={() => removefromwish(item)}
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
                        <p className="text-red-600 pr-5">
                          ${item.afterdiscount}
                        </p>
                        <del className="text-gray-500">${item.price}</del>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="justify-between flex mt-20 mr-4 ml-5 mb-3">
          <div>
            <div className="flex">
              <img
                src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740961661/react%20eco/bexzrdyfcykbnoamh2zd.png"
                alt=""
              />
              <p className="ml-5 text-[1.5rem] mt-2">Just For You</p>
            </div>
          
          </div>

          <div>
          <button className="border-2 border-gray-300 hover:bg-red-500 px-8 rounded text-black hover:text-white py-3 text-center">
         
              See All
            </button>
          </div>
        </div>

       
            <div className="grid grid-cols-4 gap-4 justify-center">
              {salesProducts.slice(0,4).map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col col-span-4 rounded hover:opacity-100 relative group m-4 border border-gray-200 p-4 bg-slate-100">
                    <div className="justify-items-end w-full">
                      <IoEyeOutline
                        className="bg-white rounded-2xl cursor-pointer text-[2rem] p-1.5 mr-[14px]"
                        onClick={() => removefromwish(item)}
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
                        <p className="text-red-600 pr-5">
                          ${item.afterdiscount}
                        </p>
                        <del className="text-gray-500">${item.price}</del>
                      </div>
                      <div className="flex">  {[...Array(5)].map((_, i) => (
                                      <span key={i} className="flex pr-1 mt-2">
                                        {(item.stars || 0) > i ? (
                                          <FaStar className="text-yellow-500" />
                                        ) : (
                                          <CiStar className="text-gray-900" />
                                        )}
                                      </span>
                                    ))}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
       
  
    </>
  );
};

export default Wishlist;
