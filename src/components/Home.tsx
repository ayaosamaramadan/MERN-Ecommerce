import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Sales from "./Sales";

const Home = () => {

  
    const calcTime = () => {
        let time = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        const now = +new Date("2025-12-31") - +new Date();
   
        time = {
            days: 3,
            hours: Math.floor((now / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((now / 1000 / 60) % 60),
            seconds: Math.floor((now / 1000) % 60),
          };

          return time;
        //   console.log(time);
    };
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(calcTime());
          }, 1000);
      
          return () => clearInterval(timer);
   
    }
    , []);

  return (
    <>
      <div className="flex">
        <div className="border-r-2 border-black-100 w-[280px] pr-20">
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

        <div className="ml-20 mt-10">
          <div className="text-white bg-black w-[90%] h-[400px] p-10 ">
            <img
              src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740722034/iphoneSlider_yc1km0.jpg"
              alt="image"
              className="w-[100%]"
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

      <div className="flex mt-10">
        <img src="/src/assets/Rectangle 17.png" alt="" />
        <p className="text-red-500 font-bold ml-5 mt-2">Today’s</p>
      </div>

      <div>
        <div>
          <h1>Flash Sales</h1>
          <div>
            <ul className="flex">
              <li className="pl-3">Days </li>
              <li className="pl-3">
                <span>:</span> Hours
              </li>
              <li className="pl-3">
                <span>:</span>Minutes
              </li>
              <li className="pl-3">
                <span>:</span>Seconds
              </li>
            </ul>
            <ul className="flex">
              <li className="p-5">{time.days || '00'}</li>
              <li className="p-5">{time.hours || '00'}</li>
              <li className="p-5">{time.minutes || '00'}</li>
              <li className="p-5">{time.seconds || '00'}</li>
            </ul>
          </div>
        </div>

        <Sales/>
      </div>
    </>
  );
};

export default Home;
