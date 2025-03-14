import { FiTwitter } from "react-icons/fi";
import { aboutt, aboutt2 } from "../api/productss";
// import Footer from "./Home/Footer";
import Serv from "./Home/Serv";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <>
     <div className="2xl:mt-52 xl:mt-52 lg:mt-52 md:mt-64 2sm:mt-64 sm:mt-64 2xl:ml-40 xl:ml-40 lg:ml-20 md:ml-20 2sm:ml-10 sm:ml-20">
       
       <span className="text-gray-400">Home / </span>
        <span>About</span>
      </div>

      <div className="2xl:ml-40 xl:ml-40 lg:ml-20 md:ml-20 sm:ml-20 2sm:ml-10 flex flex-col xl:flex-row 2xl:flex-row 2xl:mt-28 xl:mt-28 md:mt-10 sm:mt-5 2sm:mt-5 ">
        <div>
          <h1 className="2xl:text-[3.5rem] xl:text-[3.4rem] lg:text-[3.2rem] md:text-[3rem] sm:text-[2.7rem] 2sm:text-[2.5rem] font-semibold pb-10 ">Our Story</h1>
          <p className="w-[75%] pb-7">
        Launced in 2015, Exclusive is South Asia’s premier online shopping
        makterplace with an active presense in Bangladesh. Supported by wide
        range of tailored marketing, data and service solutions, Exclusive
        has 10,500 sallers and 300 brands and serves 3 millioons customers
        across the region.
          </p>
          <p className="w-[75%]">
        Exclusive has more than 1 Million products to offer, growing at a
        very fast. Exclusive offers a diverse assotment in categories
        ranging from consumer.
          </p>
        </div>
        <div>
          <img
        className=" mt-[-90px] 2xl:w-[1500px] 2xl:h-[450px] xl:w-[1500px] xl:h-[450px] md:w-[450px] md:h-[400px] md:mt-10 sm:mt-10 2sm:mt-10"
        src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740788375/mktbg7abmglqm46udn3k.png"
        alt=""
          />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row 2xl:flex-row justify-center mt-20">
        {aboutt.map((item, index) => (
          <div
        key={item.id}
        className={`rounded mt-10 text-center m-8 p-5 shadow-lg ${
          index === 1 ? "bg-red-500 text-white" : "bg-white"
        }`}
          >
        <div className="flex flex-col items-center">
          <img src={item.image[0]} alt="" className="w-[70px] h-[70px]" />
          <p className="text-2xl pt-3 font-semibold mt-3">{item.num}</p>
          <p className="mt-2">{item.desc}</p>
        </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col xl:flex-row 2xl:flex-row justify-center mt-20">
        {aboutt2.map((item) => (
          <div key={item.id} className="rounded mt-10 ml-5">
        <div className="flex flex-col">
          <img src={item.image[0]} alt="" className="w-[80%]" />
          <p className="text-2xl pt-3 font-semibold mt-3">{item.name}</p>
          <p className="mt-2">{item.desc}</p>
        </div>
        <div className="flex mt-5 pr-5">
          <FiTwitter className="mr-2" />
          <FaInstagram className="mr-2" />
          <FaLinkedinIn className="mr-2" />
        </div>
          </div>
        ))}
      </div>

      <Serv />
    </>
  );
};

export default About;
