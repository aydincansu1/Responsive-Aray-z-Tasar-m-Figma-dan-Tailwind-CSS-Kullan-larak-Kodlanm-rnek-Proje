import Collection from "./Collection";
import Basket from "./components/Basket";
import Content from "./components/Content";
import Header from "./components/Header";
import Main from "./components/Main";
import Slider from "./components/Sliders";
import Video from "./components/Video";
import Map from "./components/Map";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col items-start md:items-center isolate relative w-full md:w-[1440px] h-[7484.2px] md:h-[5545px] bg-white md:bg-gradient-to-b from-amber-50 to-white">
      <div className="z-0 absolute top-[545px] md:top-[238px] md:hidden triangle"></div>
      <div className="z-0 absolute top-[545px] md:top-[238px] hidden md:block mdtriangle"></div>
      <Header />

      <div>
        <Main />
        <Content />

        <Basket />
        <Video />
        <Slider />
        <Collection />
        <Map />
        <Footer />
      </div>
    </div>
  );
};

export default App;
