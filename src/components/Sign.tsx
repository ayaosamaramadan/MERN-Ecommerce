import { Link } from "react-router";

const Sign = () => {
  return (
    <>
      <div className="mt-52 flex">
        <div>
          <img
            className="w-[500px] h-[450px] mr-5"
            src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1741049369/leugzwtnkhrizpfn7wn3.png"
            alt=""
          />
        </div>
        <div className="m-10 ml-32">
          <h1 className="text-[1.9rem] mb-2">Create an account</h1>
          <p>Enter yout details below</p>

          <div className="flex flex-col mt-5">
            <input
              className="border-b-[0.1rem] pb-2 mb-7 border-gray-400"
              type="text"
              placeholder="Name"
            />
            <input
              className="border-b-[0.1rem] pb-2 mb-7 border-gray-400"
              type="email"
              placeholder="Email or Phone Number"
            />
            <input
              className="border-b-[0.1rem] pb-2 mb-7 border-gray-400"
              type="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-red-500 py-[0.7rem] text-[0.9rem] hover:bg-red-700 text-white rounded"
            >
              Create Account
            </button>

            <div className="flex py-[0.7rem] mt-3 text-center rounded hover:bg-gray-200 text-[0.9rem] justify-center border-[0.16rem] ">
              <img
                src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1741050642/juqnircfcappdkangtg7.png"
                alt="AccountWithGoogle"
                className="w-[24px] h-[24px] mr-3"
              />
              <button type="submit">Sign up with Google</button>
            </div>

          </div>        <p>
              Already have account?
              <Link to="login" className="underline">Log in</Link>
            </p>
        </div>
        

      </div>
    </>
  );
};

export default Sign;
