import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../main";
import { setUserCart, inctoCart, decFromCart, CartItem } from "../reducers/cart";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const cart = useSelector((state: RootState) => state.cartt);
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const items = useSelector((state: RootState) => state.cartt.items);

  useEffect(() => {
    if (auth.email) {
      dispatch(setUserCart(auth.email));
    }
  }, [auth.email, dispatch]);

  const inc = (product: CartItem) => {
    dispatch(inctoCart(product));
  };

  const dec = (product: CartItem) => {
    dispatch(decFromCart(product.id));
  };

  const goToProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="mt-52 ml-4 sm:ml-10 text-xs xl:text-base 2xl:text-lg ">
      <span className="text-gray-400 text-xs xl:text-base 2xl:text-lg 2xl:ml-28 lg:ml-20 md:ml-0 sm:ml-0 2sm:ml-0">Home / </span>
      <span className="text-xs xl:text-base 2xl:text-lg">Cart</span>
    
      {items.length === 0 ? (
        <div className="flex justify-center w-full sm:w-11/12 mt-10 py-10 border-2">
          <p className="text-center text-gray-500 text-xs xl:text-base 2xl:text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div className="flex justify-center shadow-md w-full sm:w-11/12 mt-10 overflow-x-auto">
          <table className="shadow-md w-full text-xs xl:text-base 2xl:text-lg">
            <thead>
              <tr className="shadow-md">
                <th className="p-2 sm:p-5 sm:px-10 text-center">Product</th>
                <th className="p-2 sm:p-5 sm:px-10 text-center">Price</th>
                <th className="p-2 sm:p-5 sm:px-10 text-center">Quantity</th>
                <th className="p-2 sm:p-5 sm:px-10 text-center">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="shadow-md">
                  <td className="flex items-center p-2 sm:p-5 text-center">
                    <img
                      src={item.image}
                      alt="product img"
                      onClick={() => goToProduct(item.id)}
                      className="w-10 h-10 mr-4 cursor-pointer"
                    />
                    <p className="max-w-xs">{item.name.split(" ").slice(0, 2).join(" ")}</p>
                  </td>
                  <td className="p-2 sm:p-5 text-center">${item.afterdiscount}</td>
                  <td className="flex items-center p-2 sm:p-5 text-center">
                    <p className="pr-2">{item.quantity}</p>
                    <div className="flex flex-col items-center">
                      <button
                      title="btn"
                        type="submit"
                        onClick={() => inc(item)}
                        className="mb-1"
                      >
                        <IoIosArrowUp />
                      </button>
                      <button
                      title="btn"
                        type="submit"
                        onClick={() => dec(item)}
                        className="mt-1"
                      >
                        <IoIosArrowDown />
                      </button>
                    </div>
                  </td>
                  <td className="p-2 sm:p-5 text-center">${item.afterdiscount * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between w-full sm:w-11/12 mt-10">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <button type="button" className="border-2 hover:bg-red-500 px-8 rounded text-black hover:text-white py-3 text-center text-xs xl:text-base 2xl:text-lg">
            Return To Shop
          </button>
        </Link>
        <button type="button" className="border-2 hover:bg-red-500 px-8 rounded text-black hover:text-white py-3 text-center mt-4 sm:mt-0 text-xs xl:text-base 2xl:text-lg">
          Update Cart
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-14 w-full sm:w-11/12">
        <div className="w-full md:w-1/2">
          <input
            className="input w-full border-2 rounded px-4 py-2 text-xs xl:text-base 2xl:text-lg"
            type="text"
            placeholder="Coupon Code"
          />
          <button type="button" className="bg-red-500 px-8 rounded mt-5 text-white py-3 text-center text-xs xl:text-base 2xl:text-lg">
            Apply Coupon
          </button>
        </div>
        <div className="border-2 border-black p-5 rounded w-full md:w-1/2 mt-5 md:mt-0 text-xs xl:text-base 2xl:text-lg">
          <h1 className="text-lg xl:text-xl 2xl:text-2xl">Cart Total</h1>
          <div className="flex justify-between mt-5 pb-3 border-b border-gray-400">
            <p>Subtotal</p>
            <p>${items.reduce((a, b) => a + b.afterdiscount * b.quantity, 0)}</p>
          </div>
          <div className="flex justify-between mt-5 pb-3 border-b border-gray-400">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between mt-5">
            <p>Total</p>
            <p>${items.reduce((a, b) => a + b.afterdiscount * b.quantity, 0)}</p>
          </div>
          <Link to="/checkout">
            <button
              type="button"
              className="w-full bg-red-500 px-8 rounded mt-5 text-white py-3 text-center text-xs xl:text-base 2xl:text-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Proceed To Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
