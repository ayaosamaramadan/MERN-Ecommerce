import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Navi from "./components/Navi";
import Content from "./components/Content";



const App = () => {
  return (
    <BrowserRouter>
    <Navi/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/content" element={<Content/>} />

    </Routes>
    </BrowserRouter>
  );
};

export default App;
