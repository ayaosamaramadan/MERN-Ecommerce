/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../main";
import { Link } from "react-router";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  updateUserName,
  updateUserEmail,
  updateUserPass,
} from "../../reducers/auth";

const Account = () => {
  const theAuth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(theAuth.name.split(" ")[0]);
  const [lastName, setLastName] = useState(theAuth.name.split(" ")[1] || "");
  const [email, setEmail] = useState(theAuth.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfileUpdate = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const newName = `${firstName} ${lastName}`;
    try {
      await axios.put(
        "https://ecommerce-server-seven-beta.vercel.app/api/users/updateProfile",
        { userId: theAuth._id, name: newName, email, password }
      );
      dispatch(updateUserName(newName));
      dispatch(updateUserEmail(email));
      if (password) {
        dispatch(updateUserPass(password));
      }
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="2xl:mt-52 xl:mt-52 lg:mt-52 md:mt-64 mr-0 2sm:mt-64 sm:mt-64 2xl:ml-20 xl:ml-20 xl:mr-20 lg:ml-20 md:ml-20 sm:ml-10 2sm:ml-10">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
        <div className="mb-4 sm:mb-0">
          <span className="text-gray-400">Home / </span>
          <span>My Account</span>
        </div>
        <div>
          Welcome! <span className="text-red-500">{theAuth.name}</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
          <h1 className="py-2 font-semibold">Manage My Account</h1>
          <ul>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer p-2">
              My Profile
            </li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer p-2">
              Address Book
            </li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer p-2">
              My Payment Options
            </li>
          </ul>

          <h1 className="py-2 font-semibold">My Orders</h1>
          <ul>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer p-2">
              My Returns
            </li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer p-2">
              My Cancellations
            </li>
          </ul>
          <Link to="/wishlist">
            <h1 className="py-2 font-semibold">My Wishlist</h1>
          </Link>
        </div>

        <div className="w-full lg:w-2/3 lg:ml-10 shadow-lg p-5">
          <h1 className="text-red-500 text-xl font-semibold mb-5">
            Edit Your Profile
          </h1>
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="fname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={theAuth.name.split(" ")[0]}
                  className="mb-5 w-full bg-gray-100 px-10 py-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="lname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={theAuth.name.split(" ")[1] || ""}
                  className="mb-5 w-full bg-gray-100 px-10 py-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={theAuth.email}
                  className="mb-5 w-full bg-gray-100 px-10 py-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Kingston, 5236, United State"
                  className="mb-5 w-full bg-gray-100 px-10 py-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-md mb-2">Password Changes</h1>
              <div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-5 bg-gray-100 px-10 py-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full mb-5 bg-gray-100 px-10 py-2 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mr-4 sm:mr-16 mt-5">
              <button
                type="button"
                className=" mr-2 hover:bg-slate-200 text-black px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleProfileUpdate}
                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
