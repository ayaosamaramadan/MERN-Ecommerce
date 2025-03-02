import { useSelector } from "react-redux";
// import {salesProducts} from '../api/sales';
// import { Productpro } from '../types/product.';
import { RootState } from "../main";

const Wishlist = () => {
  const items = useSelector((state: RootState) => state.wish.items);

  return (
    <>
      <div className="mt-52 ml-40">
        <div className="justify-between flex">
          <span className="text-[1.3rem]">Wishlist ({3})</span>
          <button
            type="submit"
            className="mr-[7.4rem] border-2 border-gray-300 hover:bg-red-500 px-8 rounded text-black hover:text-white py-3 text-center"
          >
            Move All To Bag
          </button>
        </div>

        {items.length === 0 ? (
          <div className="justify-center flex w-[90%] mt-10 py-10 border-2">
            <p className="text-center text-gray-500">Your wishlist is empty</p>
          </div>
        ) : (
          <>
            <div className="flex">
              {items.map((item) => (
                <ul key={item.id}>
                  <li>
                    <img src={item.image} alt="product img" />
                    <p>{item.name.split(" ").slice(0, 2).join(" ")}</p>
                  </li>
                  <li>${item.afterdiscount}</li>
                  
                </ul>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Wishlist;
