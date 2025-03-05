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

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await dispatch(loginUser(user)).unwrap();
      dispatch(loginUserSuccess(response));
      dispatch(setUserCart(user.email));
      dispatch(setUserWish(user.email));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(loginUserFailure(error.message));
      } else {
        dispatch(loginUserFailure(String(error)));
      }
    }
  };

  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

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
          <p>Enter your details below</p>

          <div className="flex flex-col mt-5">
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

            <div className="flex py-[0.7rem] mt-3 text-center rounded text-[0.9rem] justify-between ">
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-red-500 py-[0.7rem] px-10 text-[0.9rem] hover:bg-red-700 text-white rounded"
              >
                Log In
              </button>

              <Link to="/forgot-password" className="text-red-500">
                Forget Password?
              </Link>
            </div>
          </div>
          {auth.loginStatus === "success" && (
            <p className="text-green-500 mt-4">Login successful</p>
          )}
          {auth.loginStatus === "failed" && (
            <p className="text-red-500 mt-4">{auth.loginError}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
