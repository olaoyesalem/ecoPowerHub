import Button from "../Button/Button";
import { FaShop } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";

const NavBar = () => {
  return (
    <nav className="mx-auto my-4 flex justify-between items-center w-11/12">
      <div id="logoCont" className="flex items-center space-x-2">
        <span className="text-ctaColor">
          <FaShop />
        </span>
        <a id="logoText" href="/" className="font-semibold text-xl">Energy Marketplace</a>
      </div>
      <div className="flex justify-between items-center w-1/2">
        <div className="flex space-x-12">
          <a href="marketplace">
            Marketplace
          </a>
          <a href="#">Rankings</a>
          <a href="connect-wallet">Connect a wallet</a>
        </div>
        <Button
          className="py-4 px-8 bg-ctaColor rounded-2xl flex items-center space-x-2"
          href="#"
        >
          <GoPerson />
          <span>Sign Up</span>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
