import { useSelector } from "react-redux";
import { RootState } from "../../main";
import { Link } from "react-router";

const Account = () => {
    const theAuth=useSelector((state:RootState)=>state.auth)
    return ( <>
     <div className="mt-52 ml-40">
      <span className="text-gray-400">Home / </span>
      <span>My Account</span>

      <div>Welcome! <span className="text-red-500">{theAuth.name}</span></div>

      <div className="flex">
      <div>
        <h1 className="py-1 font-semibold">Manage My Account</h1>
        <ul>
          <li className="text-gray-500 hover:text-red-600 cursor-pointer ml-8 p-1">My Profile</li>
          <li className="text-gray-500 hover:text-red-600 cursor-pointer ml-8 p-1">Address Book</li>
          <li className="text-gray-500 hover:text-red-600 cursor-pointer ml-8 p-1">My Payment Options</li>
         </ul>

        <h1 className="py-1 font-semibold">My Orders</h1>
        <ul>
              <li className="text-gray-500 hover:text-red-600 cursor-pointer ml-8 p-1">My Returns</li>
          <li className="text-gray-500 hover:text-red-600 cursor-pointer ml-8 p-1">My Concellations</li>
          </ul>
          <Link to="/wishlist"><h1 className="py-1 font-semibold">My Wishlist</h1></Link>
      </div>
      <div></div>
      </div>
      </div>
    </> );
}
 
export default Account ;