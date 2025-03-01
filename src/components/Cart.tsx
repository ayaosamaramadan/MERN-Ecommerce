// import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../main";

const Cart = () => {
  const items = useSelector((state: RootState) => state.cartt.items);

  return (
    <div className="mt-52 ml-40">
      <span className="text-gray-400">Home / </span>
      <span>Cart</span>
    
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
