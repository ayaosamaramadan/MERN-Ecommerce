import { Link } from "react-router";
// import Footer from "./Home/Footer";

const NotFound = () => {
  return (
    <>
      <div className="mt-52 ml-40">
        <span className="text-gray-400">Home / </span>
        <span>404 Error</span>
      </div>

      <div className="flex justify-center items-center  mt-10 mb-5 flex-col">
        <h1 className="text-[5rem] font-semibold">404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link to="/">
          <button
            type="submit"
            className="bg-red-600 mt-20 hover:bg-red-700 px-8 rounded text-white py-3 text-center"
          >
            Back to home page
          </button>
        </Link>
      </div>
   
    </>
  );
};

export default NotFound;
