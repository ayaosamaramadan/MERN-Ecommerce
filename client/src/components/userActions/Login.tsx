import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { RootState, AppDispatch } from "../../main";
import {
  loginUser,
  loginUserSuccess,
  loginUserFailure,
} from "../../reducers/auth";
import { setUserCart } from "../../reducers/cart";
import { setUserWish } from "../../reducers/wishlistt";
import { CgInfo } from "react-icons/cg";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      setTimeout(() => {
        navigate("/cart");
      }, 3000);
    }
  }, [auth._id, navigate]);

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!user.email) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (!user.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await dispatch(loginUser(user)).unwrap();
      dispatch(loginUserSuccess(response));
      dispatch(setUserCart(user.email));
      dispatch(setUserWish(user.email));
    } catch (error) {
      const newErrors = { email: "", password: "" };
      if (error instanceof Error) {
        if (error.message.includes("email")) {
          newErrors.email = "Email not found";
        } else if (error.message.includes("password")) {
          newErrors.password = "Incorrect password";
        } else {
          newErrors.email = "Login failed";
        }
      } else {
        newErrors.password = "Email or password is incorrect";
      }
      setErrors(newErrors);
      dispatch(
        loginUserFailure(
          error instanceof Error ? error.message : "An unexpected error occurred"
        )
      );
    }
  };

  return (
    // <>
    //   <div className="mt-52 flex">
    //   <div>
    //     <img
    //     className="w-[500px] h-[450px] mr-5"
    //     src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1741049369/leugzwtnkhrizpfn7wn3.png"
    //     alt=""
    //     />
    //   </div>
    //   <div className="m-10 ml-32">
    //     <h1 className="text-[1.9rem] mb-2">Log in to Exclusive</h1>
    //     <p>Enter your details below</p>

    //     <div className="flex flex-col mt-5">
    //     <input
    //       className="border-b-[0.1rem] pb-2 mb-7 border-gray-400"
    //       type="email"
    //       placeholder="Email or Phone Number"
    //       value={user.email}
    //       onChange={(e) => setUser({ ...user, email: e.target.value })}
    //     />
    //     {errors.email && (
    //       <p className="text-red-500 flex mt-[-20px] mb-5">
    //       <CgInfo className="mt-[3px] mr-1" />
    //       {errors.email}
    //       </p>
    //     )}
    //     <input
    //       className="border-b-[0.1rem] pb-2 mb-7 border-gray-400"
    //       type="password"
    //       placeholder="Password"
    //       value={user.password}
    //       onChange={(e) => setUser({ ...user, password: e.target.value })}
    //     />
    //     {errors.password && (
    //       <p className="text-red-500 flex mt-[-20px] mb-2">
    //       <CgInfo className="mt-[3px] mr-1" />
    //       {errors.password}
    //       </p>
    //     )}

      //   <div className="flex py-[0.7rem] mt-3 text-center rounded text-[0.9rem] justify-between ">
      //     <button
      //     onClick={handleSubmit}
      //     type="submit"
      //     className="bg-red-500 py-[0.7rem] px-10 text-[0.9rem] hover:bg-red-700 text-white rounded"
      //     >
      //     Log In
      //     </button>

      //     <Link to="/forgot-password" className="text-red-500">
      //     Forget Password?
      //     </Link>
      //   </div>
      //   </div>
      //   {auth.loginStatus === "success" && (
      //   <p className="text-green-500 mt-4">Login successful</p>
      //   )}
      //   {auth.loginStatus === "failed" && (
      //   <p className="text-red-500 mt-4">{auth.loginError}</p>
      //   )}
      //   <div className="mt-4">
      //   <p>Don't have an account? <Link to="/sign-up" className="text-red-500">Sign Up</Link></p>
      //   </div>
      // </div>
      // </div>
    // </>
     <>
          <div className="2xl:mt-[170px] xl:mt-[200px] 2sm:mt-[250px] flex flex-col lg:flex-row items-center lg:items-start">
            <div className="mb-8 lg:mb-0 lg:mr-5">
              <img
                className="w-full max-w-md h-auto"
                src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1741049369/leugzwtnkhrizpfn7wn3.png"
                alt=""
              />
            </div>
            <div className="w-full max-w-md px-4 lg:px-0">
              <h1 className="text-2xl mb-2">Log in to Exclusive</h1>
              <p>Enter your details below</p>
              <div className="flex flex-col mt-5">
              
                <input
                  className="border-b pb-2 my-3 border-gray-400"
                  type="email"
                  placeholder="Email or Phone Number"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                {errors.email && (
                  <p className="text-red-500 flex">
                    <CgInfo className="mt-[3px] mr-1" />
                    {errors.email}
                  </p>
                )}
                <input
                  className="border-b pb-2 my-3 border-gray-400"
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                {errors.password && (
                  <p className="text-red-500 flex mb-3">
                    <CgInfo className="mt-[3px] mr-1" />
                    {errors.password}
                  </p>
                )}
             <div className="flex py-[0.7rem] mt-3 text-center rounded text-[0.9rem] justify-between ">
              <button
              onClick={handleSubmit}
              type="submit"
              className="bg-red-500 py-[0.7rem] px-10 text-[0.9rem] hover:bg-red-700 text-white rounded flex items-center justify-center"
              disabled={auth.loading}
              >
              {auth.loading ? (
                <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  ></circle>
                  <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Log In 
                </>
              ) : (
                "Log In"
              )}
              </button>

              <Link to="/forgot-password" className="text-red-500">
              Forget Password?
              </Link>
            </div>
        </div>
        {/* {auth.loginStatus === "success" && (
        <p className="text-green-500 mt-4">Login successful</p>
        )}
        {auth.loginStatus === "failed" && (
        <p className="text-red-500 mt-4">{auth.loginError}</p>
        )} */}
      
    
            
           
            </div>
          </div>
    

          {auth.registerStatus === "success" && (
            <p className="text-green-500 mt-4">Registration successful</p>
          )}
          {auth.registerStatus === "failed" && (
            <p className="text-red-500 mt-4">{auth.registerError}</p>
          )}
        </>
  );
};

export default Login;
