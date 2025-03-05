import { useSelector } from "react-redux";
import { RootState } from "../main";

const Checkout = () => {
  const checkeditem = useSelector((state: RootState) => state.cartt.items);
  return (
    <>
      <div className="mt-52 ml-40 space-x-2 flex">
        <span className="text-gray-400">Account</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400">My Account</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400">Product</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400">View Cart</span>
        <span className="text-gray-400">/</span>
        <span>CheckOut</span>
      </div>

      <div className="block ml-40 mr-20 mt-10 ">
        <h1 className="text-[2.5rem] font-semibold pb-10">Billing Details</h1>

        <div className="flex justify-between">
          <div className="w-[50%]">
            <div>
              <label className="text-gray-400" htmlFor="fname">
                First Name <span className="text-red-400"> *</span>
              </label>
            </div>
            <input
              className="mb-5 bg-gray-100 px-24 rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              className="mb-5 bg-gray-100 px-24 rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              className="mb-5 bg-gray-100 px-24 rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              className="mb-5 bg-gray-100 px-24 rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              className="mb-5 bg-gray-100 px-24 rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              className="mb-5 bg-gray-100 px-24 rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              className="mb-5 bg-gray-100 px-24 rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              id="email"
              name="email"
            />

            <div>
              <input
                className="rounded-full mr-3"
                title="radio"
                type="radio"
                name="paymentMethod"
              />
              <label htmlFor="paymentMethod">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>

          <div>
            {checkeditem.map((item) => (
              <div key={item.id} className="w-[88%] ml-9 flex justify-between">
                <img
                  src={item.image}
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

              <div className="w-[100%] flex justify-between mt-10">
                <input
                  className="h-10 w-[50%] bg-gray-100 px-24 rounded py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  name=""
                  id=""
                  placeholder="Coupon Code"
                />
                <button className="bg-red-500 px-8 rounded m-5 mt-10 text-white py-3 text-center">
                  Apply Coupon
                </button>
              </div>
              <div>
                <button className="bg-red-500 px-8 rounded m-5 mt-10 text-white py-3 text-center">
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
