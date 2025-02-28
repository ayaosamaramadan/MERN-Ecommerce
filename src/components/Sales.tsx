
import { salesProducts } from "../api/sales";

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
            <div>
              <p>${product.afterdiscount}</p>
              <p>{product.stars}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Sales;
