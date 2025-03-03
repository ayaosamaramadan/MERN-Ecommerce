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

const App = () => {
  return (
    <BrowserRouter>
     <ToastContainer 
     
       hideProgressBar={true}
         toastClassName="custom-toast"
           position="bottom-right"
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
        <Route path="/product/:id" element={<Theproduct/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
