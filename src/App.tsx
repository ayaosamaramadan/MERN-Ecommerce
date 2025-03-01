import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import Navi from "./components/Navi";
import Content from "./components/Content";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Footer from "./components/Home/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
