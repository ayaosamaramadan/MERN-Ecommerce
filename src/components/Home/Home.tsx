
import Sales from "./Sales";
import Besto from "./Besto";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="mt-40">
     <Header/>
      <Sales />
      <Besto />
      <Footer/>
    </div>
  );
};

export default Home;
