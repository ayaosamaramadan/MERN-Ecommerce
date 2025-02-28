import { CiStar } from "react-icons/ci";
import { salesProducts } from "../api/sales";
import { FaStar } from "react-icons/fa";
import Timeoutt from "./Timeoutt";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
type Productpro = {
  id: number;
  name: string;
  price: number;
  image: string;
  afterdiscount: number;
  stars: number;
};

const Sales = () => {
  return (
    <>
      <Timeoutt />
      <div className="flex flex-wrap justify-center">
        {salesProducts.slice(0, 4).map((product: Productpro) => (
          <div
            key={product.id}
            className="flex flex-col rounded hover:opacity-80 relative group m-4 border border-gray-200 p-4"
          >
            <div className="justify-items-end w-full">
              <IoIosHeartEmpty className="bg-white mt-2 rounded-2xl mr-[14px] text-3xl p-1" />
              <IoEyeOutline className="bg-white mt-2 rounded-2xl text-3xl p-1 mr-[14px]" />
            </div>

            <img
              src={product.image}
              alt="product"
              className="w-[250px] h-[180px]"
            />

            <div className="bg-red-600 rounded text-white py-2 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 w-full">
              <button type="submit">Add To Cart</button>
            </div>

            <div className="mt-2">
              <p>{product.name}</p>
              <del>${product.price}</del>
              <p>${product.afterdiscount}</p>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="flex">
                  {product.stars > i ? (
                    <FaStar className="text-yellow-500" />
                  ) : (
                    <CiStar className="text-gray-400" />
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-14">
        <button
          type="submit"
          className="bg-red-600 px-8 rounded text-white py-3 text-center"
        >
          View All Products
        </button>
      </div>
    </>
  );
};

export default Sales;
