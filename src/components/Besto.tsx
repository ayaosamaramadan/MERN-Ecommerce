import { FaStar } from "react-icons/fa";
import { bestSellers } from "../api/sales";
import { CiStar } from "react-icons/ci";
const Besto = () => {
  type Productpro = {
    id: number;
    name: string;
    price: number;
    image: string;
    afterdiscount: number;
    stars: number;
  };

  return (
    <>
      <div className="flex flex-wrap justify-center mt-20">
        {bestSellers.map((product: Productpro) => (
          <div key={product.id}>
            <img src={product.image} alt="product" className="w-[100px]" />
            <div>
              <p>{product.name}</p>
              <del>${product.price}</del>
              <p>${product.afterdiscount}</p>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="flex">
                  {product.stars > i ? (
                    <FaStar className="text-yellow-500" />
                  ) : (
                    <CiStar className="text-gray-400" />
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Besto;
