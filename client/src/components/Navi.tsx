import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../main";
import { FiUser } from "react-icons/fi";
import { toast } from "react-toastify";

// import '../index.css';

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
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
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
          <div className="2xl:text-2xl xl:text-2xl lg:text-[1.3rem] md:text-[1.2rem] sm:text-[0.9rem] 2sm:text-[1rem] font-bold ml-4 lg:ml-10 mb-4 lg:mb-0 md:mb-1 sm:mb-[4px] 2sm:mb-[4px]">
            Exclusive
          </div>
          <ul className="flex flex-wrap justify-center xl:pl-3 2xl:text-[1rem] xl:text-[1rem] lg:text-[0.8rem] md:text-[0.8rem] sm:text-[0.8rem] 2sm:text-[0.8rem] ">
            <li className="2xl:mr-12 xl:mr-12 lg:mr-4 md:mr-6 sm:mr-5 2sm:mr-3 hover:underline">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="2xl:mr-12 xl:mr-12 lg:mr-4 md:mr-6 sm:mr-5 2sm:mr-3 hover:underline">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/content"
              >
                Content
              </Link>
            </li>
            <li className="2xl:mr-12 xl:mr-12 lg:mr-4 md:mr-6 sm:mr-5 2sm:mr-3 hover:underline">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="2xl:mr-4 xl:mr-4 lg:mr-4 md:mr-6 sm:mr-5 2sm:mr-3 hover:underline">
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
            </li>
          </ul>

          <div className="flex bg-slate-100 p-2 px-4 rounded 2xl:text-[1rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.6rem] 2sm:text-[0.8rem] w-full 2xl:lg:w-[300px] xl:w-[300px] md:w-[300px] sm:w-[250px] 2sm:w-[250px] lg:w-[200px] justify-between mt-2 lg:mt-0 ">
            <input
              type="search"
              placeholder="What are you looking for?"
              className="bg-slate-100 w-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <CiSearch className="text-black text-[25px] ml-2 cursor-pointer" onClick={handleSearch} />
          </div>

          <div className="text-black flex 2xl:text-[26px] xl:text-[26px] md:text-[20px] sm:text-[19px] 2sm:text-[18px] mt-2 lg:mt-0 lg:mr-[50px] xl:pl-5 relative">
            {theAuth._id ? (
              <Link
                to="./wishlist"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <IoIosHeartEmpty className="mr-[10px] cursor-pointer relative" />
                {wishItemCount > 0 && (
                  <span className="bg-red-500 text-white p-1 rounded-full 2xl:w-5 2xl:h-5 xl:w-5 xl:h-5 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-4 sm:h-4 2sm:w-4 2sm:h-4 flex items-center justify-center absolute 2xl:top-[-10px] xl:top-[-10px] md:top-[-4px] lg:top-[-6px] 2sm:top-[-4px] sm:top-[-4px] 2xl:right-[33px] xl:right-[33px] lg:right-[29px] md:right-[29px] sm:right-[25px] 2sm:right-[26px] 2xl:text-[0.8rem] xl:text-[0.8rem] lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.6rem] 2sm:text-[0.5rem]">
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
      </div>
    </>
  );
};

export default Navi;
