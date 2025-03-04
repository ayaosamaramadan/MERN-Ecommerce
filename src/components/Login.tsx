const Login = () => {
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
          <h1 className="text-[1.9rem] mb-2">Log in to Exclusive</h1>
          <p>Enter yout details below</p>

          <div className="flex flex-col mt-5">
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

            <div className="flex py-[0.7rem] mt-3 text-center rounded text-[0.9rem] justify-between ">
              <button
                type="submit"
                className="bg-red-500 py-[0.7rem] px-10 text-[0.9rem] hover:bg-red-700 text-white rounded"
              >
                Log In
              </button>

              <button type="submit" className="text-red-500">
                Forget Password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
