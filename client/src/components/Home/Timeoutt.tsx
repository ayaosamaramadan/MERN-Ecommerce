import { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Timeoutt = () => {
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
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calcTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row ml-[5%] mt-[5%] mr-[5%] justify-between">
        <div>
          <div className="flex mt-[5%]">
        <img src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740961661/react%20eco/bexzrdyfcykbnoamh2zd.png" alt="" />
        <p className="text-red-500 2xl:font-bold xl:font-bold lg:font-bold md:font-semibold ml-[3%] mt-2">Today’s</p>
          </div>
          <div>
        <div className="flex flex-col  md:flex-row mt-5">
          <h1 className=" 2xl:text-[2rem] xl:text-[2rem] lg:text-[2rem] md:text-[1.4rem] md:w-[50px] font-semibold 2xl:w-auto xl:w-auto lg:w-auto">Flash Sales</h1>
          
          <div className="mt-5 2xl:mt-0 xl:mt-[-32px] lg:mt-3 md:mt-[6px] md:ml-10">
            <ul className="flex justify-between md:justify-start ">
          <li className="2xl:pl-3 xl:pl-3 lg:pl-3 md:pl-0 font-semibold">Days</li>
          <li className="2xl:pl-14 xl:pl-12 lg:pl-11 md:pl-5 font-semibold">Hours</li>
          <li className="2xl:pl-14 xl:pl-12 lg:pl-11 md:pl-5 font-semibold">Minutes</li>
          <li className="2xl:pl-14 xl:pl-12 lg:pl-11 md:pl-5 font-semibold">Seconds</li>
            </ul>
            <ul className="flex justify-between md:justify-start mt-[-10px] 2xl:text-[2rem] xl:text-[2rem] lg:text-[2rem] md:text-[1rem]">
          <li className="font-semibold p-5 pl-5 2xl:pl-5 xl:pl-5 lg:pl-5 md:pl-1">
            {time.days || "00"}
          </li>
          <li className="font-semibold p-5">
            <span className="text-red-600 pr-5 2xl:pl-3 xl:pl-3 lg:pl-3 md:pl-[0px] font-bold">:</span>
            {time.hours || "00"}
          </li>
          <li className="font-semibold p-5">
            <span className="text-red-600 pr-5 2xl:pl-3 xl:pl-3 lg:pl-3 md:pl-3 font-bold">:</span>
            {time.minutes || "00"}
          </li>
          <li className="font-semibold p-5">
            <span className="text-red-600 pr-5 2xl:pl-3 xl:pl-3 lg:pl-3 md:pl-3 font-bold">:</span>
            {time.seconds || "00"}
          </li>
            </ul>
          </div>
        </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-start 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-[-80px] 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-[-90px] 2xl:text-[2.5rem] xl:text-[2.5rem] lg:text-[2.5rem] md:text-[2rem]">
          <IoIosArrowRoundBack className="hover:bg-slate-300 bg-slate-100 mt-[105px] mr-3 rounded-3xl" />
          <IoIosArrowRoundForward className="bg-slate-100 mt-[105px] mr-3 rounded-3xl hover:bg-slate-300" />
        </div>
      </div>
    </>
  );
};

export default Timeoutt;
