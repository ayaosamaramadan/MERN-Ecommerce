import { servicees } from "../../api/productss";

const Serv = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        {servicees.map((service) => (
          <div key={service.id} className="mt-10 text-center m-8">
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
