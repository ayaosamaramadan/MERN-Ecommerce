import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../main";
import { FiUser } from "react-icons/fi";
import { toast } from "react-toastify";

const Navi = () => {
  const item1 = useSelector((state: RootState) => state.cartt.items);
  const items2 = useSelector((state: RootState) => state.wish.items);
  const theAuth = useSelector((state: RootState) => state.auth);
  const cartItemCount = item1.reduce((total, item) => total + item.quantity, 0);
  const wishItemCount = items2.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const handlelOut = () => {
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
            <span className="font-bold text-white underline cursor-pointer xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[13px] 2sm:text-[9px] 2xl:w-full xl:w-[80px] lg:w-[80px] md:w-[180px] 2sm:w-[9px]">
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
          <Link onClick={handlelOut} to="/">
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
            />
            <CiSearch className="text-black text-[25px] ml-2" />
          </div>

          <div className="text-black flex 2xl:text-[26px] xl:text-[26px] md:text-[20px] sm:text-[19px] 2sm:text-[18px] mt-2 lg:mt-0 lg:mr-[50px] xl:pl-5">
            {theAuth._id ? (
              <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to="./wishlist"
              >
          <IoIosHeartEmpty className="mr-[10px] cursor-pointer" />
              </Link>
            ) : (
              <IoIosHeartEmpty
          className="mr-[10px] cursor-pointer"
          onClick={() => toast.error("Please login first")}
              />
            )}
            {wishItemCount === 0 ? null : (
              <span
          className={`bg-red-500 text-white p-1 ${
            theAuth._id ? "right-[8.2rem]" : "right-[5.5rem]"
          } rounded-full w-5 h-5 flex items-center justify-center absolute top-[6rem] right-[5.5rem] text-[0.8rem] pb-[0.4rem]`}
              >
          {wishItemCount}
              </span>
            )}

            {theAuth._id ? (
              <Link
          to="./cart"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
          <IoCartOutline className="ml-[10px] cursor-pointer" />
              </Link>
            ) : (
              <IoCartOutline
          className="ml-[10px] cursor-pointer"
          onClick={() => toast.error("Please login first")}
              />
            )}

            {cartItemCount === 0 ? null : (
              <span
          className={`bg-red-500 text-white p-1 rounded-full w-5 h-5 flex items-center justify-center absolute top-[6rem] ${
            theAuth._id ? "right-[5.5rem]" : "right-[2.5rem]"
          } text-[0.8rem] pb-[0.4rem]`}
              >
          {cartItemCount}
              </span>
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
