import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";
import Slider from "react-slick";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="2sm:hidden sm:hidden xl:block md:hidden 2xl:block border-r-2 border-black-100 w-[280px] pr-4 md:pr-20">
          <div className="w-full md:w-[250px] pt-4 md:pt-10 pl-4 md:pl-10">
            <ul>
              <li className="flex pb-4 hover:text-red-500 cursor-pointer">
                Woman’s Fashion <FaChevronRight className="mt-1 ml-auto md:ml-[50px]" />
              </li>
              <li className="flex pb-4 hover:text-red-500 cursor-pointer">
                Men’s Fashion <FaChevronRight className="mt-1 ml-auto md:ml-[79px]" />
              </li>
              <li className="pb-4 hover:text-red-500 cursor-pointer">Electronics</li>
              <li className="pb-4 hover:text-red-500 cursor-pointer">Home & Lifestyle</li>
              <Link to="./phones">
                <li className="pb-4 hover:text-red-500 cursor-pointer">Phones</li>
              </Link>
              <li className="pb-4 hover:text-red-500 cursor-pointer">Sports & Outdoor</li>
              <li className="pb-4 hover:text-red-500 cursor-pointer">Baby’s & Toys</li>
              <li className="pb-4 hover:text-red-500 cursor-pointer">Groceries & Pets</li>
              <li className="pb-4 hover:text-red-500 cursor-pointer">Health & Beauty</li>
            </ul>
          </div>
        </div>

        <Slider {...settings} className="text-white w-full md:w-[70%] items-center 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-15 sm:mt-20 2sm:mt-20 justify-center p-4 md:p-10 mx-auto">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1742005703/bcrhl9xjz3jw9ic98vkj.png"
              alt="image"
              className=""
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740776148/react%20eco/vecqbwrofwmkkalmj14b.png"
              alt="image"
              className=""
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Header;
