import { CiTwitter } from "react-icons/ci";
import { TbBrandDiscord } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-backgroundSecondary py-6">
      <div className="flex flex-col bg-backgroundSecondary space-y-3 items-start w-4/5 mx-auto justify-between md:w-5/6 md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-3 text-darkGrey md:w-[30%] md:space-y-5">
          <h4 className="font-semibold font1 text-textColor text-lg">
            NFT Marketplace
          </h4>
          <p className="text-sm md:text-lg">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <div className="flex flex-col space-y-3">
            <p className="text-sm md:text-lg">Join our community</p>
            <div className="flex justify-between w-1/2 text-2xl">
              <TbBrandDiscord />
              <CiYoutube />
              <CiTwitter />
              <CiInstagram />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-darkGrey md:w-[27%] md:space-y-5">
          <h4 className="font-semibold font1 text-textColor text-lg">
            Explore
          </h4>
          <div className="flex flex-col space-y-2 text-sm md:text-lg">
            <a href="marketplace">Marketplace</a>
            <a href="#">Rankings</a>
            <a href="connect-wallet">Connect a wallet</a>
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-darkGrey md:w-[42%] md:space-y-5">
          <h4 className="font-semibold font1 text-textColor text-lg">
            Join Our Weekly Digest
          </h4>
          <p className="text-sm md:text-lg">
            Get exclusive promotions and updates straight into your inbox.
          </p>
          <form>
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                className="flex-1 px-6 py-2 rounded-3xl text-sm font-semibold focus:outline-none md:hidden"
                placeholder="Enter your email here"
              />
              <button className="px-6 py-2 text-white rounded-3xl text-sm font-semibold bg-ctaColor focus:outline-none md:hidden">
                Subscribe
              </button>
              <div className="w-full hidden md:flex">
                <input
                  type="text"
                  className="flex-1 px-6 py-3 rounded-l-xl text-sm font-semibold focus:outline-none"
                  placeholder="Enter your email here"
                />
                <button className="px-6 py-3 text-white rounded-xl -ml-4 text-sm font-semibold bg-ctaColor focus:outline-none flex space-x-2 items-center">
                  <CiMail />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import { CiGlobe } from "react-icons/ci";  <CiGlobe />;
// import { PiCopyLight } from "react-icons/pi";  <PiCopyLight />;
// import { HiPlus } from "react-icons/hi2";  <HiPlus />;
// import { CiSearch } from "react-icons/ci";  <CiSearch />
// import { FaBarsStaggered } from "react-icons/fa6";  <FaBarsStaggered />;