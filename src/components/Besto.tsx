import { FaStar } from 'react-icons/fa';
import {bestSellers} from '../api/sales';
import { CiStar } from 'react-icons/ci';
const Besto = () => {
    return ( <>
{
    bestSellers.map((product) => (
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
    
    </> );
}
 
export default Besto;