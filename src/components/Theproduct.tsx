import { useRef } from "react";
import { useParams } from "react-router-dom";
import { salesProducts } from "../api/productss";
import { Productpro } from "../types/product";

const Theproduct = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { id } = useParams<{ id: string }>();
  const product = id ? salesProducts.find(
    (product: Productpro) => product.id === parseInt(id)
  ) : undefined;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="mt-52 ml-40 space-x-2 flex">
        <span className="text-gray-400">Account</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400">Gaming</span>
        <span className="text-gray-400">/</span>
        <span>{product.name}</span>
      </div>

      <div ref={ref}>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        {/* <p>{product.description}</p> */}
        <p>${product.afterdiscount}</p>
      </div>
    </>
  );
};

export default Theproduct;
