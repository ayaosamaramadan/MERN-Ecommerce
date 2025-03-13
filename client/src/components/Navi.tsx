import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../main";
import { FiUser } from "react-icons/fi";
import { toast } from "react-toastify";
import { salesProducts } from "../api/productss";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";

const Navi = () => {
  const item1 = useSelector((state: RootState) => state.cartt.items);
  const items2 = useSelector((state: RootState) => state.wish.items);
  const theAuth = useSelector((state: RootState) => state.auth);
  const cartItemCount = item1.reduce((total, item) => total + item.quantity, 0);
  const wishItemCount = items2.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [isopen, setIsopen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    theAuth.token = "";
  };

  return (
    <>
   
      <div className="border-b-2 border-black-100 fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90">
        <div className="bg-black flex p-4 justify-between pr-4 2xl:pl-50 xl:pl-[15%] lg:pl-[5%] w-full">
          <div className="pl-4 flex justify-center md:justify-start w-full md:w-auto sm:w-auto 2sm:w-[220px]">
            <span className="text-white pr-3 text-sm xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[13px] 2sm:text-[9px] ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <span className="font-bold text-white underline cursor-pointer xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[13px] 2sm:text-[9px]">
              Shop Now
            </span>
          </div>
          <div className="text-white flex">
            <span className="xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[13px] 2sm:text-[9px]">
              English
            </span>
            <i className="fa-solid fa-chevron-down pt-1 pl-3 xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[13px] 2sm:text-[13px]"></i>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row 2xl:mt-10 2xl:mb-5 xl:mt-10 xl:mb-5 lg:mt-10 lg:mb-5 md:mt-2 md:mb-4 sm:mt-2 sm:mb-4 2sm:mt-2 2sm:mb-4 justify-between items-center h-auto">
          <div className="flex 2xl:text-2xl xl:text-2xl lg:text-[1.3rem] md:text-[1.2rem] sm:text-[0.9rem] 2sm:text-[1rem] font-bold ml-4 lg:ml-10 mb-4 lg:mb-0 md:mb-1 sm:mb-[4px] 2sm:mb-[4px]">
            <RxHamburgerMenu
              className="mt-1 2sm:mr-14 sm:mr-16 2sm:ml-[-100px] sm:ml-[-109px] md:ml-[-105px] md:block sm:block 2sm:block lg:hidden xl:hidden 2xl:hidden"
              onClick={() => {
                setIsopen(!isopen);
                console.log(isopen);
              }}
            />
            Exclusive
          </div>

            <ul className="flex flex-wrap justify-center xl:pl-3 2xl:text-[1rem] xl:text-[1rem] lg:text-[0.8rem] md:text-[0.8rem] sm:text-[0.8rem] 2sm:text-[0.8rem] ">
            <li className="2xl:mr-12 xl:mr-12 lg:mr-4 md:mr-6 sm:mr-5 2sm:mr-3 relative group">
              <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/"
              >
              Home
              </Link>
              <span className="block h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </li>
            <li className="2xl:mr-12 xl:mr-12 lg:mr-4 md:mr-6 sm:mr-5 2sm:mr-3 relative group">
              <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/content"
              >
              Content
              </Link>
              <span className="block h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </li>
            <li className="2xl:mr-12 xl:mr-12 lg:mr-4 md:mr-6 sm:mr-5 2sm:mr-3 relative group">
              <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/about"
              >
              About
              </Link>
              <span className="block h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </li>
            <li className="2xl:mr-4 xl:mr-4 lg:mr-4 md:mr-6 sm:mr-5 2sm:mr-3 relative group">
              {theAuth._id ? (
              <Link onClick={handleLogout} to="/">
                Log Out
              </Link>
              ) : (
              <Link
                onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
                }
                to="/sign"
              >
                Sign Up
              </Link>
              )}
              <span className="block h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </li>
            </ul>

          <div>
            <div className="flex bg-slate-100 p-2 px-4 rounded 2xl:text-[1rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.6rem] 2sm:text-[0.8rem] w-full lg:w-[300px] md:w-[300px] sm:w-[250px] 2sm:w-[250px] justify-between mt-2 lg:mt-0">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="bg-slate-100 w-full outline-none"
                value={searchQuery}
                onChange={handleSearch}
              />
              <CiSearch className="text-black text-[25px] ml-2 cursor-pointer" />
            </div>
            <div className="relative w-full">
              {searchQuery && (
                <div className="absolute bg-white w-full lg:w-[300px] mt-2 shadow-lg rounded-lg max-h-[300px] overflow-y-auto cursor-pointer z-50">
                  {salesProducts
                    .filter((product) =>
                      product.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    )
                    .map((product) => (
                      <Link to={`/product/${product.id}`} key={product.id}>
                        <div
                          onClick={() => {
                            setSearchQuery("");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="flex justify-between items-center p-2 border-b hover:bg-gray-100 transition-colors duration-200"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-[50px] h-[50px] object-cover rounded"
                          />
                          <div className="text-black ml-4 flex-1">
                            <p className="font-semibold">{product.name}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="text-black flex 2xl:text-[26px] xl:text-[26px] md:text-[20px] sm:text-[19px] 2sm:text-[18px] mt-2 lg:mt-0 lg:mr-[50px] xl:pl-5 relative">
            {theAuth._id ? (
              <Link
                to="./wishlist"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <IoIosHeartEmpty className="mr-[10px] cursor-pointer relative" />
                {wishItemCount > 0 && (
                  <span className="bg-red-500 text-white p-1 rounded-full 2xl:w-5 2xl:h-5 xl:w-5 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-4 sm:h-4 2sm:w-4 2sm:h-4 xl:h-5 flex items-center justify-center absolute 2xl:top-[-10px] xl:top-[-10px] md:top-[-4px] lg:top-[-6px] 2sm:top-[-4px] sm:top-[-4px] 2xl:right-[81px] xl:right-[81px] lg:right-[69px] cmd:right-[29px] sm:right-[66px] 2sm:right-[66px] 2xl:text-[0.8rem] xl:text-[0.8rem] lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.6rem] 2sm:text-[0.5rem]">
                    {wishItemCount}
                  </span>
                )}
              </Link>
            ) : (
              <IoIosHeartEmpty
                className="mr-[10px] cursor-pointer relative"
                onClick={() => toast.error("Please login first")}
              />
            )}

            {theAuth._id ? (
              <Link
                to="./cart"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <IoCartOutline className="ml-[10px] cursor-pointer relative" />
                {cartItemCount > 0 && (
                  <span className="bg-red-500 text-white p-1 rounded-full 2xl:w-5 2xl:h-5 xl:w-5 xl:h-5 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-4 sm:h-4 2sm:w-4 2sm:h-4 flex items-center justify-center absolute 2xl:top-[-10px] xl:top-[-10px] md:top-[-4px] lg:top-[-6px] 2sm:top-[-4px] sm:top-[-4px] 2xl:right-[33px] xl:right-[33px] lg:right-[29px] md:right-[29px] sm:right-[25px] 2sm:right-[26px] 2xl:text-[0.8rem] xl:text-[0.8rem] lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.6rem] 2sm:text-[0.5rem]">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            ) : (
              <IoCartOutline
                className="ml-[10px] cursor-pointer relative"
                onClick={() => toast.error("Please login first")}
              />
            )}

            {theAuth._id ? (
              <Link
                to="./account"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <FiUser className="ml-[20px]" />
              </Link>
            ) : null}
          </div>
        </div>

           {isopen && (

        <div className="z-50 2xl:hidden xl:hidden lg:hidden md:block 2sm:block sm:block border-r-2 border-black-100 w-[280px] bg-white opacity-95 shadow-lg fixed top-0 left-0 h-full overflow-y-auto">
          <MdKeyboardBackspace
            className="cursor-pointer ml-56 mt-5 text-2xl m-4 hover:text-gray-700 transition-colors duration-200 justify-end"
            onClick={() => setIsopen(false)}
          />
          <div className="w-[250px] pt-10 pl-10">
            <ul>
              <li className="text-[0.9rem] flex pb-4 hover:bg-gray-100 p-2 rounded transition-colors duration-200 hover:text-blue-500">
          Woman’s Fashion <FaChevronRight className="mt-1 ml-auto" />
              </li>
              <li className="text-[0.9rem] flex pb-4 hover:bg-gray-100 p-2 rounded transition-colors duration-200 hover:text-blue-500">
          Men’s Fashion <FaChevronRight className="mt-1 ml-auto" />
              </li>
              <li className="text-[0.9rem] pb-4 hover:bg-gray-100 p-2 rounded transition-colors duration-200 hover:text-blue-500">
          Electronics
              </li>
              <li className="text-[0.9rem] pb-4 hover:bg-gray-100 p-2 rounded transition-colors duration-200 hover:text-blue-500">
          Home & Lifestyle
              </li>
              <li className="text-[0.9rem] pb-4 hover:bg-gray-100 p-2 rounded transition-colors duration-200 hover:text-blue-500">
          Medicine
              </li>
              <li className="text-[0.9rem] pb-4 hover:bg-gray-100 p-2 rounded transition-colors duration-200 hover:text-blue-500">
          Sports & Outdoor
              </li>
              <li className="text-[0.9rem] pb-4 hover:bg-gray-100 p-2 rounded transition-colors duration-200 hover:text-blue-500">
          Baby’s & Toys
              </li>
              <li className="text-[0.9rem] pb-4 hover:bg-gray-100 p-2 rounded transition-colors duration-200 hover:text-blue-500">
          Groceries & Pets
              </li>
              <li className="text-[0.9rem] pb-4 hover:bg-gray-100 p-2 rounded transition-colors duration-200 hover:text-blue-500">
          Health & Beauty
              </li>
            </ul>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Navi;
