import "@fortawesome/fontawesome-free/css/all.min.css";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Navi = () => {
  return (
    <>
      <div className="border-b-2 border-black-100">
        <div className="bg-black flex p-4 justify-between pr-20">
          <div className="pl-96">
            <span className="text-white pr-3">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <span className="font-bold text-white underline cursor-pointer">
              Shop Now
            </span>
          </div>

          <div className="text-white flex">
            <span>English</span>
            <i className="fa-solid fa-chevron-down pt-[4px] pl-3"></i>
          </div>
        </div>

        <div className="flex mt-10 mb-5 justify-between">
            <div className="text-2xl font-bold ml-10">Exclusive</div>
          <ul className="flex">
            <li className="mr-12 hover:underline">Home</li>
            <li className="mr-12 hover:underline">Content</li>
            <li className="mr-12 hover:underline">About</li>
            <li className="mr-12 hover:underline">Sign Up</li>
          </ul>

          <div className="flex bg-slate-100 p-2 px-4 rounded w-[300px] justify-between mt-[-10px]">
            <input type="search" placeholder="What are you looking for?" className="bg-slate-100"/>
            <CiSearch className="text-black text-[25px]" />
          </div>

          <div className="text-black flex text-[26px] mt-[-2px] mr-[50px]">
             
            <IoIosHeartEmpty className="mr-[20px]"/>
            <IoCartOutline />
          </div>
        </div>

      </div>
    </>
  );
};

export default Navi;
