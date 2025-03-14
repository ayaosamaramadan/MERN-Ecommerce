import { useSelector } from "react-redux";
import { RootState } from "../main";
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';

const Checkout = () => {
  const checkeditem = useSelector((state: RootState) => state.cartt.items);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <>
      <div className="2xl:mt-52 xl:mt-52 lg:mt-52 md:mt-64 2sm:mt-64 sm:mt-64 2xl:ml-40 xl:ml-40 lg:ml-20 md:ml-20 2sm:ml-10 sm:ml-20">
       
       <span className="text-gray-400">Account</span>
        <span className="p-1 text-gray-400">/</span>
        <span className="p-1 text-gray-400">My Account</span>
        <span className="p-1 text-gray-400">/</span>
        <span className="p-1 text-gray-400">Product</span>
        <span className="p-1 text-gray-400">/</span>
        <span className="p-1 text-gray-400">View Cart</span>
        <span className="p-1 text-gray-400">/</span>
        <span>CheckOut</span>
      </div>

      <div className="p-1 block ml-4 md:ml-40 mr-4 md:mr-20 mt-10">
        <h1 className="text-[2.5rem] font-semibold pb-10">Billing Details</h1>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[50%]">
            <div>
              <label className="text-gray-400" htmlFor="fname">
                First Name <span className="text-red-400"> *</span>
              </label>
            </div>
            <input
              className="mb-5 bg-gray-100 w-full rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="fname"
              name="firstname"
            />
            <div>
              <label className="text-gray-400" htmlFor="companyName">
                Company Name
              </label>
            </div>
            <input
              className="mb-5 bg-gray-100 w-full rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="companyName"
              name="companyName"
            />
            <div>
              <label className="text-gray-400" htmlFor="street">
                Street Address<span className="text-red-400"> *</span>
              </label>
            </div>
            <input
              className="mb-5 bg-gray-100 w-full rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="street"
              name="street"
            />
            <div>
              <label className="text-gray-400" htmlFor="apartment">
                Apartment, floor, etc. (optional)
              </label>
            </div>
            <input
              className="mb-5 bg-gray-100 w-full rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="apartment"
              name="apartment"
            />
            <div>
              <label className="text-gray-400" htmlFor="town">
                Town/City<span className="text-red-400"> *</span>
              </label>
            </div>
            <input
              className="mb-5 bg-gray-100 w-full rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="town"
              name="town"
            />
            <div>
              <label className="text-gray-400" htmlFor="phone">
                Phone Number<span className="text-red-400"> *</span>
              </label>
            </div>
            <input
              className="mb-5 bg-gray-100 w-full rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="phone"
              name="phone"
            />
            <div>
              <label className="text-gray-400" htmlFor="email">
                Email Address<span className="text-red-400"> *</span>
              </label>
            </div>
            <input
              className="mb-5 bg-gray-100 w-full rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="email"
              name="email"
            />

            <div className="ml-[-10px]">
              <Checkbox {...label} defaultChecked sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
              }} />
              <label htmlFor="paymentMethod">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>

          <div className="w-full md:w-[50%]">
            {checkeditem.map((item) => (
              <div key={item.id} className="w-full md:w-[88%] ml-0 md:ml-9 flex justify-between">
                <img
                  src={item.image[0]}
                  alt="product"
                  className="w-[60px] h-[60px]"
                />
                <h2 className="pt-8">{item.name}</h2>
                <p className="pt-8">${item.price}</p>
              </div>
            ))}

            <div className="p-5 px-10 rounded">
              <div className="flex justify-between mt-5 pb-3 border-gray-400 border-b-[0.1rem] w-full">
                <p>Subtotal</p>
                <p>
                  $
                  {checkeditem.reduce(
                    (a, b) => a + b.afterdiscount * b.quantity,
                    0
                  )}
                </p>
              </div>
              <div className="flex justify-between mt-5 pb-3 border-gray-400 border-b-[0.1rem] w-full">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between mt-5">
                <p>Total</p>
                <p>
                  $
                  {checkeditem.reduce(
                    (a, b) => a + b.afterdiscount * b.quantity,
                    0
                  )}
                </p>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-between mt-10">
                <input
                  className="h-10 w-full md:w-[50%] bg-gray-100 rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  name=""
                  id=""
                  placeholder="Coupon Code"
                />
                <button className="bg-red-500 w-full md:w-auto px-8 rounded m-5 mt-10 text-white py-3 text-center">
                  Apply Coupon
                </button>
              </div>
              <div>
                <button className="bg-red-500 w-full md:w-auto px-8 rounded m-5 mt-10 text-white py-3 text-center">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
