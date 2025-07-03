import Navbar from "../Navbar";
import Content from "./Content";
import LowerLeftBox from "./LowerLeftBox";
import UpperRightBox from "./UpperRightBox";

const Hero = () => {
  return (
    <div className="h-auto w-full p-4 lg:h-full lg:p-6">
      <div className="bg-yellow-bg relative h-[600px] w-full rounded-2xl lg:h-full lg:rounded-[50px]">
        <Navbar />
        <Content />
        <UpperRightBox />
        <LowerLeftBox />
      </div>
    </div>
  );
};

export default Hero;
