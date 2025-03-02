// import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../main";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const items = useSelector((state: RootState) => state.cartt.items);

  return (
    <div className="mt-52 ml-40">
      <span className="text-gray-400">Home / </span>
      <span>Cart</span>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
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
                         <ul className="items-left flex justify-between w-[90%] mt-5 p-5 px-12 border-2">
                <li className="flex ">
                  <img
                    src={item.image}
                    alt="product img"
                    className="w-10 h-10 mr-4"
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
                    <button type="submit" title="btn" className="mb-1"><IoIosArrowUp /></button>
                    <button type="submit" title="btn" className="mt-1"><IoIosArrowDown /></button>
                  </div>
                </li>
                <li>${item.afterdiscount * (item.quantity || 1)}</li>
              </ul>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
