import { FiTwitter } from "react-icons/fi";
import { aboutt, aboutt2 } from "../api/sales";
import Footer from "./Home/Footer";
import Serv from "./Home/Serv";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="mt-52 ml-40">
        <span className="text-gray-400">Home / </span>
        <span>About</span>
      </div>

      <div className="flex ml-40 mt-28">
        <div>
          <h1 className="text-[3.5rem] font-semibold pb-10">Our Story</h1>
          <p className="w-[75%] pb-7">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="w-[75%]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div>
          <img
            className=" mt-[-90px] w-[1500px] h-[450px]"
            src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1740788375/mktbg7abmglqm46udn3k.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-center mt-20">
        {aboutt.map((item, index) => (
          <div
            key={item.id}
            className={`rounded mt-10 text-center m-8 p-5 shadow-lg ${
              index === 1 ? "bg-red-500 text-white" : "bg-white"
            }`}
          >
            <div className="flex flex-col items-center">
              <img src={item.image} alt="" className="w-[70px] h-[70px]" />
              <p className="text-2xl pt-3 font-semibold mt-3">{item.num}</p>
              <p className="mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        {aboutt2.map((item) => (
          <div key={item.id} className="rounded mt-10 ml-5">
            <div className="flex flex-col">
              <img src={item.image} alt="" className="w-[80%]" />
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
      <Footer />
    </>
  );
};

export default About;
