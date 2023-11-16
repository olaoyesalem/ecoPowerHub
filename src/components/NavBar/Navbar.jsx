import Button from "../Button/Button";
import { FaShop } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { FaBarsStaggered } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="mx-auto my-4 flex justify-between items-center w-11/12">
      <div id="logoCont" className="flex items-center space-x-2">
        <span className="text-ctaColor">
          <FaShop />
        </span>
        <a id="logoText" href="/" className="font-semibold text-xl">
          Energy Marketplace
        </a>
      </div>
      <button className="lg:hidden">
        <FaBarsStaggered />
      </button>

      <div className="hidden justify-between space-x-4 items-center w-1/2 lg:flex md:text-sm xxl:w-1/2 lg:text-base md:w-3/5 lg:w-3/5">
        {/* <div className="flex "> */}
        <a href="marketplace">Marketplace</a>
        <a href="#">Rankings</a>
        <a href="connect-wallet">Connect a wallet</a>
        <Button
          className="py-4 px-5 bg-ctaColor rounded-2xl flex items-center space-x-2"
          href="#"
        >
          <GoPerson />
          <span>Sign Up</span>
        </Button>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
