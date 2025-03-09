// import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Header = () => {
  return (
    <>
      <div className="flex">
        <div className="2xl:block xl:block lg:block md:hidden 2sm:hidden sm:hidden border-r-2 border-black-100 w-[280px] pr-20">
          <div className="w-[250px] pt-10 pl-10">
            <ul>
              <li className="flex pb-4">
                Woman’s Fashion <FaChevronRight className="mt-1 ml-[50px]" />
              </li>
              <li className="flex pb-4">
                Men’s Fashion <FaChevronRight className="mt-1 ml-[79px]" />
              </li>
              <li className="pb-4">Electronics</li>
              <li className="pb-4">Home & Lifestyle</li>
              <li className="pb-4">Medicine</li>
              <li className="pb-4">Sports & Outdoor</li>
              <li className="pb-4">Baby’s & Toys</li>
              <li className="pb-4">Groceries & Pets</li>
              <li className="pb-4">Health & Beauty</li>
            </ul>
          </div>
        </div>

        <div className="ml-[10%] mr-[10%] 2xl:mt-[5%] xl:mt-[5%] lg:mt-[5%] md:mt-[22%] sm:mt-[32%] 2sm:mt-[29%]">
          <div className="text-white bg-black w-full p-10 ">
            <img
              src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740722034/iphoneSlider_yc1km0.jpg"
              alt="image"
              className="w-auto"
            />
            <div>
              <ul className="flex w-[10%] mt-10 ml-[40%]">
                <li>
                  <GoDotFill />
                </li>
                <li>
                  <GoDotFill />
                </li>
                <li>
                  <GoDotFill />
                </li>
                <li>
                  <GoDotFill />
                </li>
                <li>
                  <GoDotFill />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
