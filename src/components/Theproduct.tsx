import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { salesProducts } from "../api/productss";
import { Productpro } from "../types/product";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import { decFromCart, inctoCart } from "../reducers/cart";
import { IoIosArrowDown, IoIosArrowUp, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { addToWish, removeFromWish } from "../reducers/wishlistt";

const Theproduct = () => {
  const cart = useSelector((state: RootState) => state.cartt.items);
  const wishitem = useSelector((state: RootState) => state.wish.items);
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


  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <>
      <div className="mt-52 ml-40 space-x-2 flex">
        <span className="text-gray-400">Account</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400">Gaming</span>
        <span className="text-gray-400">/</span>
        <span>{product.name}</span>
      </div>

      <div ref={ref} className="flex mt-10 ml-40 space-x-10">
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <div className="border-b-2">
            <h1>{product.name}</h1>
            <div className="flex">
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
                ({product.rate}) |{" "}
                <span className="text-green-500"> In Stock</span>
              </div>
            </div>
            <p>${product.afterdiscount}.00</p>
            <p>{product.desc}</p>
          </div>
          <div className="flex">
            <h2>Colours:</h2>
            <div className="flex">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full ml-2"></div>
            </div>
          </div>
          <div className="flex">
            <h2>Size:</h2>
            <div className="flex">
              <div className="border-[0.01rem] border-black ml-2 px-1 rounded">
                XS
              </div>
              <div className="border-[0.01rem] border-black ml-2 px-1 rounded">
                S
              </div>
              <div className="border-[0.01rem] border-black ml-2 px-1 rounded">
                M
              </div>
              <div className="border-[0.01rem] border-black ml-2 px-1 rounded">
                L
              </div>
              <div className="border-[0.01rem] border-black ml-2 px-1 rounded">
                XL
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center">
              <button
                type="submit"
                title="btn"
                onClick={() => inc(product)}
                className="mb-1"
              >
                <IoIosArrowUp />
              </button>
              <p>{cartItem ? cartItem.quantity : 0}</p>
              <button
                type="submit"
                title="btn"
                onClick={() => dec(product)}
                className="mt-1"
              >
                <IoIosArrowDown />
              </button>
            </div>
        
         <Link to="/cart">
         <button className="bg-black text-white p-2 rounded ml-2">
            Buy Now
          </button>
 </Link>

            {wishitem.find((item) => item.id === product.id) ? (
                            <IoIosHeart
                              className="cursor-pointer text-red-500 bg-white mt-2 rounded-2xl mr-[14px] text-3xl p-1"
                              onClick={() => removefromwish(product)}
                            />
                          ) : (
                            <IoIosHeartEmpty
                              className="cursor-pointer bg-white mt-2 rounded-2xl mr-[14px] text-3xl p-1"
                              onClick={() => addtowish(product)}
                            />
                          )}
                            </div>
        
        </div>
      </div>
    </>
  );
};

export default Theproduct;
