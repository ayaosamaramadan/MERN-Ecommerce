import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <>
      <div className="border-b-2 border-black-100 fixed top-0 left-0 w-full z-50 bg-white">
        <div className="bg-black flex p-4 justify-between pr-4 2xl:pl-50 xl:pl-[15%] lg:pl-[5%] w-full">
          <div className="pl-4 flex justify-center md:justify-start w-full md:w-auto sm:w-auto 2sm:w-[220px]">
            <span className="text-white pr-3 text-sm xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[13px] 2sm:text-[13px] ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <span className="font-bold text-white underline cursor-pointer xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[13px] 2sm:text-[13px] 2xl:w-full xl:w-[80px] lg:w-[80px] md:w-[180px] 2m:w-[180px] 2sm:w-[310px]">
              Shop Now
            </span>
          </div>

          <div className="text-white flex">
            <span className="xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[13px] 2sm:text-[13px]">
              English
            </span>
            <i className="fa-solid fa-chevron-down pt-1 pl-3 xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[13px] 2sm:text-[13px]"></i>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mt-10 mb-5 justify-between items-center">
          <div className="2xl:text-2xl xl:text-2xl lg:text-[1.3rem] md:text-[1.6rem] sm:text-[1.6rem] 2sm:text-[1.6rem] font-bold ml-4 lg:ml-10 mb-4 lg:mb-0">
            Exclusive
          </div>
          <ul className="flex flex-wrap justify-center xl:pl-3 2xl:text-[1rem] xl:text-[1rem] lg:text-[0.8rem] ">
            <li className="2xl:mr-12 xl:mr-12 lg:mr-4 md:mr-6 sm:mr-5 2sm:mr-3 hover:underline">
              <Link to="/"> Home</Link>
            </li>
            <li className="2xl:mr-12 xl:mr-12 lg:mr-4 md:mr-6 sm:mr-5 2sm:mr-3 hover:underline">
              <Link to="/content"> Content</Link>
            </li>
            <li className="2xl:mr-12 xl:mr-12 lg:mr-4 md:mr-6 sm:mr-5 2sm:mr-3 hover:underline">
              <Link to="/about"> About</Link>
            </li>
            <li className="2xl:mr-4 xl:mr-4 lg:mr-4 md:mr-6 sm:mr-5 2sm:mr-3 hover:underline">
              Sign Up
            </li>
          </ul>

          <div className="flex bg-slate-100 p-2 px-4 rounded w-full 2xl:lg:w-[300px] xl:w-[300px] md:w-[300px] sm:w-[290px] 2sm:w-[260px] lg:w-[200px] justify-between mt-4 lg:mt-0">
            <input
              type="search"
              placeholder="What are you looking for?"
              className="bg-slate-100 w-full"
            />
            <CiSearch className="text-black text-[25px] ml-2" />
          </div>

          <div className="text-black flex 2xl:text-[26px] xl:text-[26px] sm:text-[22px] 2sm:text-[22px]  mt-4 lg:mt-0 lg:mr-[50px] xl:pl-5">
            <IoIosHeartEmpty className="mr-[10px]" />
            <IoCartOutline className="ml-[10px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navi;
