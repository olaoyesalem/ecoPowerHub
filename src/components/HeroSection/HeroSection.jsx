import Button from "../Button/Button";
import img from "../../constants/images";
import AvatarTab from "../AvatarTab/AvatarTab";
import { PiAirplaneTiltBold } from "react-icons/pi";
// import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex flex-col space-y-8 my-20 md:space-x-6 md:space-y-0 md:flex-row w-4/5 md:w-5/6 mx-auto sm:items-center">
      <div className="flex flex-col space-y-6 md:w-1/2 items-center md:items-start">
        <h1 className="font-semibold text-3xl text-center w-4/5 lg:text-5xl md:text-start">
          Energy Unleashed: Discover, Choose, and Thrive in Our Marketplace
        </h1>
        <p className="w-full text-base text-center md:text-lg md:text-start md:w-4/5">
          Transforming Energy Choices: Our Marketplace, Your Gateway to
          Sustainable Power. Explore, Collect, Buy, and Sell from 20k+ Green
          Energy Innovators. Join Us in Shaping a Cleaner Future!
        </p>
        <Button
          className="hidden px-6 p-2 pt-2 w-full bg-ctaColor rounded-2xl text-center items-center space-x-1 sm:w-40 md:flex"
          href="#"
        >
          <PiAirplaneTiltBold />
          <span>Get Started</span>
        </Button>
        <div className="flex justify-between w-full md:w-4/5">
          <div className="flex flex-col">
            <p className="font-bold text-lg md:text-2xl font1">240k+</p>
            <p className="text-base md:text-md">Total Sale</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-lg md:text-2xl font1">100k+</p>
            <p className="text-base md:text-md">Projects</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-lg md:text-2xl font1">240k+</p>
            <p className="text-base md:text-md">Investors</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 h-72 lg:h-96">
        <img src={img.hero} alt="" className="w-full h-full rounded-t-xl" />
        <div className="flex items-center bg-darkGrey rounded-b-xl">
          <div className="flex flex-col justify-between space-y-2 px-4 py-4">
            <p className="test-lg font-semibold">Solar Energy</p>
            <AvatarTab
              src={img.a1}
              alt=""
              avatarName="Animakid"
              className="flex space-x-2"
            ></AvatarTab>
          </div>
        </div>
      </div>
      <Button
        className="px-8 p-2 pt-2 w-full bg-ctaColor rounded-2xl text-center sm:w-40 md:hidden"
        href="#"
      >
        Get Started
      </Button>
    </section>
  );
};

export default HeroSection;
