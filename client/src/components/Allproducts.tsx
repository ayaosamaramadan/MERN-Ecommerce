import { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { salesProducts } from "../api/productss";
import { Productpro } from "../types/product";
import { addToWish, removeFromWish } from "../reducers/wishlistt";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../main";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { addToCart } from "../reducers/cart";

const Allproducts = () => {
  const wishitem = useSelector((state: RootState) => state.wish.items);
  const theAuth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sortOption, setSortOption] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");


  const handleAddToCart = (product: Productpro) => {
    dispatch(addToCart(product));
  };

  const goToProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  const addtowish = (product: Productpro) => {
    dispatch(addToWish(product));
  };

  const removefromwish = (product: Productpro) => {
    dispatch(removeFromWish(product));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = salesProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "low") {
      return a.afterdiscount - b.afterdiscount;
    } else if (sortOption === "high") {
      return b.afterdiscount - a.afterdiscount;
    } else {
      return 0;
    }
  });

  return (
    <>
    <div className="2xl:mt-52 xl:mt-52 lg:mt-52 md:mt-64 sm:mt-72 2sm:mt-72 ml-4 md:ml-16 flex flex-col md:flex-row mx-20 mb-10">
      <div className="mb-4 md:mb-0">
        <span className="text-gray-400">Home</span>
        <span className="text-gray-400 ml-2">/</span>
        <span className="ml-2">Products</span>
      </div>
      <div className="flex justify-end w-full mt-5 cursor-pointer">
        <section>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border cursor-pointer border-gray-300 rounded-md p-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
          />
          <select
            className="border cursor-pointer border-gray-300 rounded-md p-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="default" className="cursor-pointer">
              Default
            </option>
            <option value="low" className="cursor-pointer">
              Sort by price (Low)
            </option>
            <option value="high" className="cursor-pointer">
              Sort by price (High)
            </option>
          </select>
        </section>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 justify-center">
      {sortedProducts.map((product: Productpro) => (
        <div key={product.id}>
          <div className="flex flex-col rounded hover:opacity-100 relative group m-4 border border-gray-200 p-4 bg-slate-100">
            <div className="justify-items-end w-full">
              {wishitem.find((item) => item.id === product.id) ? (
                <IoIosHeart
                  className="cursor-pointer text-red-500 bg-white mt-2 rounded-2xl mr-[14px] text-3xl p-1"
                  onClick={() => removefromwish(product)}
                />
              ) : (
                <IoIosHeartEmpty
                  className="cursor-pointer bg-white mt-2 rounded-2xl mr-[14px] text-3xl p-1"
                  onClick={() =>
                    theAuth._id
                      ? addtowish(product)
                      : toast.error("Please login to add to wishlist")
                  }
                />
              )}

              <IoEyeOutline
                className="bg-white mt-2 rounded-2xl text-3xl p-1 mr-[14px] cursor-pointer"
                onClick={() => {
                  goToProduct(product.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>

            <img
              src={product.image[0]}
              alt="product"
              className="w-[230px] hover:opacity-80"
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
              </div>
            </div>
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
                ({product.rate})
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default Allproducts;
