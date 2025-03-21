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
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Wishlist = () => {
  const navigate = useNavigate();
  const items = useSelector((state: RootState) => state.wish.items);
  const theAuth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const wishItemCount = items.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const handleAddToCart = (product: Productpro) => {
    dispatch(addToCart(product));
  };
  const goToProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  const removefromwish = (product: Productpro) => {
    dispatch(removeFromWish(product));
  };

  return (
    <>
      <div className="2xl:mt-52 xl:mt-52 lg:mt-52 md:mt-64 2sm:mt-64 sm:mt-64 ml-4 mr-4 sm:ml-8 sm:mr-8 md:ml-16 md:mr-16 lg:ml-24 lg:mr-20">
      <div className="justify-between flex ml-2 sm:ml-5 mb-5">
        <span className="text-[1rem] sm:text-[1.3rem] mt-3">Wishlist ({wishItemCount})</span>
        <button
        type="submit"
        className="mr-[0.5rem] sm:mr-[1rem] border-2 border-gray-300 hover:bg-red-500 px-4 sm:px-8 rounded text-black hover:text-white py-2 sm:py-3 text-center"
        >
        Move All To Bag
        </button>
      </div>

      {items.length === 0 ? (
        <div className="justify-center flex w-full sm:w-[90%] mt-10 py-10 border-2 ml-2 sm:ml-14">
        <p className="text-center text-gray-500">Your wishlist is empty</p>
        </div>
      ) : (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {items.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col col-span-4 rounded hover:opacity-100 relative group m-2 sm:m-4 border border-gray-200 p-2 sm:p-4 bg-slate-100">
            <div className="justify-items-end w-full">
              <BsTrash3
              className="bg-white mt-2 rounded-2xl cursor-pointer text-[1.5rem] sm:text-[2rem] p-1 sm:p-1.5 mr-[10px] sm:mr-[14px]"
              onClick={() => removefromwish(item)}
              />
            </div>

            <img
              src={item.image[0]}
              alt="item"
              onClick={() => goToProduct(item.id)}
              className="w-full h-[150px] sm:w-[230px] sm:h-[180px] hover:opacity-80"
            />

            <div className="bg-black rounded flex text-white py-2 text-center justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 w-full">
              <IoCartOutline className="text-[1rem] sm:text-[1.2rem]" />
              <button
              type="submit"
              onClick={() => handleAddToCart(item)}
              className="text-[0.8rem] sm:text-[0.9rem]"
              >
              Add To Cart
              </button>
            </div>
            </div>
            <div className="flex flex-col rounded hover:opacity-100 relative group mt-4 p-2 sm:p-4">
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

      <div className="justify-between flex mt-20 mr-2 sm:mr-4 ml-2 sm:ml-5 mb-3">
        <div>
        <div className="flex">
          <img
          src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740961661/react%20eco/bexzrdyfcykbnoamh2zd.png"
          alt=""
          className="w-12 h-12 sm:w-16 sm:h-16"
          />
          <p className="ml-2 sm:ml-5 text-[1.2rem] sm:text-[1.5rem] mt-2">Just For You</p>
        </div>
        </div>

        <div>
        <button className="border-2 border-gray-300 hover:bg-red-500 px-4 sm:px-8 rounded text-black hover:text-white py-2 sm:py-3 text-center">
          See All
        </button>
        </div>
      </div>

     <div className="flex flex-wrap justify-center">
             {salesProducts.slice(5, 9).map((product: Productpro) => (
               <div key={product.id}>
                 <div className="flex flex-col rounded hover:opacity-100 relative group m-4 border border-gray-200 p-4 bg-slate-100">
                   <div className="justify-items-end w-full">
                
     
                     <IoEyeOutline
                       className="bg-white mt-2 rounded-2xl text-3xl p-1 mr-[14px] cursor-pointer"
                       onClick={() => {
                         goToProduct(product.id);
                         window.scrollTo({ top: 0, behavior: "smooth" });
                       }}/>
                   </div>
     
                   <img
                     src={product.image[0]}
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
      </div>
    </>
  );
};

export default Wishlist;
