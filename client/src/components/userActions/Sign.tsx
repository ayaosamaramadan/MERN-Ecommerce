import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { RootState, AppDispatch } from "../../main";
import { registerUserSuccess, registerUserFailure } from "../../reducers/auth";
import { setUserCart } from "../../reducers/cart";
import { setUserWish } from "../../reducers/wishlistt";
import { CgInfo } from "react-icons/cg";

const Sign = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
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

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (!user.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    else if (user.name.length < 6) {
      newErrors.name = "Name must be at least 6 characters";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(user.email)) {
      newErrors.email = "Enter a valid email Example@gmail.com";
      valid = false;
    }

    if (!user.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    } else if (!user.password.match(/[0-9]/)) {
      newErrors.password = "Password must contain a number";
      valid = false;
    } else if (!user.password.match(/[a-z]/)) {
      newErrors.password =
        "Password must contain at least one lowercase letter";
      valid = false;
    } else if (!user.password.match(/[A-Z]/)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const apiUrl =
      "https://ecommerce-serv.vercel.app/api/users/register";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(registerUserSuccess(data));
        dispatch(setUserCart(user.email));
        dispatch(setUserWish(user.email));
      } else {
        if (data.message === "User already exists") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Email already exists",
          }));
        }
        throw new Error(data.message || "Registration failed");
      }
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
      <div className="2xl:mt-[170px] xl:mt-[200px] 2sm:mt-[250px] flex flex-col lg:flex-row items-center lg:items-start">
        <div className="mb-8 lg:mb-0 lg:mr-5">
          <img
            className="w-full max-w-md h-auto"
            src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1741049369/leugzwtnkhrizpfn7wn3.png"
            alt=""
          />
        </div>
        <div className="w-full max-w-md px-4 lg:px-0">
          <h1 className="text-2xl mb-2">Create an account</h1>
          <p>Enter your details below</p>
          <div className="flex flex-col mt-5">
            <input
              className="border-b pb-2 my-3 border-gray-400"
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            {errors.name && (
              <p className="text-red-500 flex">
                <CgInfo className="mt-[3px] mr-1" />
                {errors.name}
              </p>
            )}
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
                    Create Account
                  </>
                ) : (
                  " Create Account"
                )}
              </button>

            <div className="flex py-2 mt-3 text-center rounded hover:bg-gray-200 text-sm justify-center border">
              <img
                src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1741050642/juqnircfcappdkangtg7.png"
                alt="AccountWithGoogle"
                className="w-6 h-6 mr-3"
              />
              <button type="submit">Sign up with Google</button>
            </div>
          </div>
          <p className="mt-4">
            Already have an account?
            <Link to="login" className="underline ml-1">
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
