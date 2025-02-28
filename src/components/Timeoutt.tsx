import { useEffect, useState } from "react";

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
      <div className="ml-32 mt-32">
        
        <div className="flex mt-10">
          <img src="/src/assets/Rectangle 17.png" alt="" />
          <p className="text-red-500 font-bold ml-5 mt-2">Today’s</p>
        </div>
        <div>
          <div className="flex mt-5">
            <h1 className="text-[2rem] font-semibold">Flash Sales</h1>
            <div className="mt-[-34px] ml-12">
              <ul className="flex">
                <li className="pl-3 font-semibold">Days </li>
                <li className="pl-14 font-semibold">
                   Hours
                </li>
                <li className="pl-14 font-semibold">
                  Minutes
                </li>
                <li className="pl-14 font-semibold">
                  Seconds
                </li>
              </ul>
              <ul className="flex mt-[-10px]">
                <li className="text-[2rem] font-semibold p-5">{time.days || "00"}</li>
                <li className="text-[2rem] font-semibold p-5"><span className="text-red-600 pr-5 pl-3 font-bold">:</span>{time.hours || "00"}</li>
                <li className="text-[2rem] font-semibold p-5"><span className="text-red-600 pr-5 pl-3 font-bold">:</span>{time.minutes || "00"}</li>
                <li className="text-[2rem] font-semibold p-5"><span className="text-red-600 pr-5 pl-3 font-bold">:</span>{time.seconds || "00"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeoutt;
