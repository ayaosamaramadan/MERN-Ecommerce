import { servicees } from "../../api/productss";

const Serv = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center mt-20">
        {servicees.map((service) => (
          <div key={service.id} className="mt-10 text-center m-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="flex flex-col items-center">
          <img src={service.image} alt="" className="w-[70px] h-[70px]" />
          <p className="text-lg font-semibold mt-3">{service.title}</p>
          <p className="mt-2">{service.desc}</p>
        </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Serv;
