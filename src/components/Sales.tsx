
import { CiStar } from "react-icons/ci";
import { salesProducts } from "../api/sales";
import { FaStar } from "react-icons/fa";

type Productpro = {
    id: number;
    name: string;
    price: number;
    image: string;
    afterdiscount: number;
    stars: number;
};

const Sales = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {
        salesProducts.map((product: Productpro) => (
          <div key={product.id} >
            <img src={product.image} alt="product" className="w-[100px]" />
            <div >
              <p>{product.name}</p>
              <del>${product.price}</del>
            </div>
            <div className="flex">
              {
                [...Array(5)].map((_, i) => (
                  <span key={i} className="flex">
                    {product.stars > i ? (
                        <FaStar className="text-yellow-500" />
                    ) : (
                        <CiStar className="text-gray-400" />
                    )}
                  </span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Sales;
