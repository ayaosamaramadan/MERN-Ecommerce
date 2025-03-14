import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import Navi from "./components/Navi";
import Content from "./components/Content";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Footer from "./components/Home/Footer";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { ToastContainer } from "react-toastify";
import Checkout from "./components/Checkout";
import Theproduct from "./components/Theproduct";
import Sign from "./components/userActions/Sign";
import Login from "./components/userActions/Login";
import Account from "./components/userActions/Account";
import Allproducts from "./components/Allproducts";
import Phones from "./components/Home/Phones";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
      hideProgressBar={true}
      toastClassName="custom-toast"
      position="bottom-right"
      className="text-xs md:text-base lg:text-lg w-[250px] ml-1 p-[0px]"
      
      />

      <Navi />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<Theproduct />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="sign/login" element={<Login />} />
      <Route path="/account" element={<Account />}/>
      <Route path="/allproducts" element={<Allproducts />}/>
      <Route path="/phones" element={<Phones />}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
