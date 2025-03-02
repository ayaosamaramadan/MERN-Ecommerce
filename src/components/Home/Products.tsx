import { IoIosHeartEmpty } from "react-icons/io";
import { salesProducts } from "../../api/sales";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Productpro } from "../../types/product.";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cart";

const Products = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Productpro) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      {salesProducts.slice(9, 17).map((product: Productpro) => (
        <div key={product.id}>
          <div className="flex flex-col rounded hover:opacity-100 relative group m-4 border border-gray-200 p-4 bg-slate-100">
            <div className="justify-items-end w-full">
              <IoIosHeartEmpty className="bg-white mt-2 rounded-2xl mr-[14px] text-3xl p-1" />
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




    </>
  );
};

export default Products;
