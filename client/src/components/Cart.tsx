import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../main";
import { setUserCart } from "../reducers/cart";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { inctoCart, decFromCart } from "../reducers/cart";
import { CartItem } from "../reducers/cart";
import { Link, useNavigate } from "react-router";

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cartt);
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (auth.email) {
      dispatch(setUserCart(auth.email));
    }
  }, [auth.email, dispatch]);

  const navigate = useNavigate();
  const items = useSelector((state: RootState) => state.cartt.items);

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
    <div className="mt-52 ml-40">
      <span className="text-gray-400">Home / </span>
      <span>Cart</span>
      <p>Total Items: {cart.itemCount}</p>
     
      {items.length === 0 ? (
        <div className="justify-center flex w-[90%] mt-10 py-10 border-2">
          <p className="text-center text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div>
            <ul className="items-left flex w-[90%] mt-10 p-5 px-10 border-2">
              <li className="pr-[21rem]">Product</li>
              <li className="pr-[13.4rem]">Price</li>
              <li className="pr-[12.5rem]">Quantity</li>
              <li>Subtotal</li>
            </ul>

            {items.map((item) => (
              <ul
                className="items-left flex justify-between w-[90%] mt-5 p-5 px-12 border-2"
                key={item.id}
              >
                <li className="flex">
                  <img
                    src={item.image}
                    alt="product img"
                    onClick={() => goToProduct(item.id)}
                    className="w-10 h-10 mr-4 cursor-pointer"
                  />
                  <p className="max-w-xs">
                    {item.name.split(" ").slice(0, 2).join(" ")}
                  </p>
                </li>
                <li>${item.afterdiscount}</li>
                <li className="items-center text-[0.8rem] rounded flex border-2 px-2">
                  <div className="">
                    <p className="pr-2">{item.quantity}</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <button
                      type="submit"
                      title="btn"
                      onClick={() => inc(item)}
                      className="mb-1"
                    >
                      <IoIosArrowUp />
                    </button>
                    <button
                      type="submit"
                      title="btn"
                      onClick={() => dec(item)}
                      className="mt-1"
                    >
                      <IoIosArrowDown />
                    </button>
                  </div>
                </li>
                <li>${item.afterdiscount * item.quantity}</li>
              </ul>
            ))}
          </div>
        </>
      )}

      <div className="justify-between w-[91.4%] mt-10 flex">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <button className="mr-[1rem] border-2 border-gray-300 hover:bg-red-500 px-8 rounded text-black hover:text-white py-3 text-center">
            Return To Shop
          </button>
        </Link>
        <button className="mr-[1rem] border-2 border-gray-300 hover:bg-red-500 px-8 rounded text-black hover:text-white py-3 text-center">
          Update Cart
        </button>
      </div>

      <div className="justify-between mt-14 mr-[7.3rem] flex">
        <div className="w-[49%]">
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Coupon Code"
          />
          <button className="bg-red-500 px-8  rounded m-5 mt-10 text-white py-3 text-center">
            Apply Coupon
          </button>
        </div>
        <div className="border-[0.1rem] border-black p-5 px-10 rounded">
          <h1 className="text-[1.2rem]">Cart Total</h1>
          <div className="flex justify-between mt-5 pb-3 border-gray-400 border-b-[0.1rem] w-full">
            <p>Subtotal</p>
            <p>
              ${items.reduce((a, b) => a + b.afterdiscount * b.quantity, 0)}
            </p>
          </div>
          <div className="flex justify-between mt-5 pb-3 border-gray-400 border-b-[0.1rem] w-full">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between mt-5">
            <p>Total</p>
            <p>
              ${items.reduce((a, b) => a + b.afterdiscount * b.quantity, 0)}
            </p>
          </div>
          <Link to="/checkout">
            <button
              className="ml-14 bg-red-500 px-8 justify-center rounded m-5 mt-10 text-white py-3 text-center"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Procees To Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
