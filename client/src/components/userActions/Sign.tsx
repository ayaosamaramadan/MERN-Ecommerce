import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { RootState, AppDispatch } from "../../main";
import {
  registerUser,
  registerUserSuccess,
  registerUserFailure,
} from "../../reducers/auth";
import { setUserCart } from "../../reducers/cart";
import { setUserWish } from "../../reducers/wishlistt";

const Sign = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  useEffect(() => {
    if (auth.registerStatus === "failed") {
      console.error("Registration failed:", auth.registerError);
    }
  }, [auth.registerStatus, auth.registerError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await dispatch(registerUser(user)).unwrap();
      dispatch(registerUserSuccess(response));
      dispatch(setUserCart(user.email));
      dispatch(setUserWish(user.email));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(registerUserFailure(error.message));
      } else {
        dispatch(registerUserFailure(String(error)));
      }
    }
  };

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
          <p>Enter your details below</p>
          <div className="flex flex-col mt-5">
            <input
              className="border-b-[0.1rem] pb-2 mb-7 border-gray-400"
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              className="border-b-[0.1rem] pb-2 mb-7 border-gray-400"
              type="email"
              placeholder="Email or Phone Number"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              className="border-b-[0.1rem] pb-2 mb-7 border-gray-400"
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button
              type="submit"
              className="bg-red-500 py-[0.7rem] text-[0.9rem] hover:bg-red-700 text-white rounded"
              onClick={handleSubmit}
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
          </div>
          <p>
            Already have account?
            <Link to="login" className="underline">
              Log in
            </Link>
          </p>
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

export default Sign;
