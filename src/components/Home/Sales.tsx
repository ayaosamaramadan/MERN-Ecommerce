import { CiStar } from "react-icons/ci";
import { catigorys, salesProducts } from "../../api/sales";
import { FaStar } from "react-icons/fa";
import Timeoutt from "./Timeoutt";
import { IoEyeOutline } from "react-icons/io5";
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoIosHeartEmpty,
} from "react-icons/io";
import { Productpro } from "../../types/product.";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cart";
import { addToWish } from "../../reducers/wishlistt";

const Sales = () => {

  const dispatch = useDispatch();
  const handleAddToCart = (product: Productpro) => {
    dispatch(addToCart(product));
  };

  const addtowish = (product: Productpro) => {
    dispatch(addToWish(product));
  }


  return (
    <>
      <Timeoutt />
      <div className="flex flex-wrap justify-center">
        {salesProducts.slice(0, 4).map((product: Productpro) => (
          <div key={product.id}>
            <div className="flex flex-col rounded hover:opacity-100 relative group m-4 border border-gray-200 p-4 bg-slate-100">
              <div className="justify-items-end w-full">
                <IoIosHeartEmpty className="bg-white mt-2 rounded-2xl mr-[14px] text-3xl p-1" onClick={() => addtowish(product)}/>
                <IoEyeOutline className="bg-white mt-2 rounded-2xl text-3xl p-1 mr-[14px]" />
              </div>
              <img
                src={product.image}
                alt="product"
                className="w-[230px] h-[180px] hover:opacity-80"
              />
              <div className="bg-black rounded text-white py-2 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 w-full">
                <button type="submit" onClick={() => handleAddToCart(product)}>Add To Cart</button>
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
      <div className="text-center mt-14">
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 px-8 rounded text-white py-3 text-center"
        >
          View All Products
        </button>
      </div>

      <div className="justify-between flex ml-32 mt-24 mr-32">
        <div>
          <div className="flex mt-10">
            <img src="/src/assets/Rectangle 17.png" alt="" />
            <p className="text-red-500 font-bold ml-5 mt-2">Categories</p>
          </div>
          <div className=" mt-5">
            <h1 className="text-[2rem] font-semibold">Browse By Category</h1>
          </div>
        </div>

        <div className="flex ml-12 text-[2.5rem]">
          <IoIosArrowRoundBack className="hover:bg-slate-300 bg-slate-100 mt-[105px] mr-3 rounded-3xl" />
          <IoIosArrowRoundForward className="bg-slate-100 mt-[105px] mr-3 rounded-3xl hover:bg-slate-300" />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div>
          <div className="flex flex-wrap justify-center">
            {catigorys.map((catigory, index) => (
              <div
                key={catigory.id}
                className={`text-center px-10 py-7 flex-col rounded hover:opacity-100 relative group m-4 border border-gray-200 ${
                  index === 3 ? "bg-red-500" : "bg-white"
                } flex`}
              >
                <img
                  src={catigory.image}
                  alt="product"
                  className="w-[45px] h-[45px] hover:opacity-80 m-auto"
                />
                <p
                  className={`flex-col ${index === 3 ? "text-white" : ""} flex`}
                >
                  {catigory.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
