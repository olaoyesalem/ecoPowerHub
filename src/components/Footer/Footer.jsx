const Footer = () => {
  return (
    <footer className="bg-backgroundSecondary py-6">
      <div className="flex flex-col bg-backgroundSecondary space-y-3 items-start w-4/5 mx-auto justify-between md:w-5/6 md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-3 text-darkGrey md:w-[30%] md:space-y-5">
          <h4 className="font-semibold font1 text-textColor text-lg">
            NFT Marketplace
          </h4>
          <p className="text-sm">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <div className="flex flex-col">
            <p className="text-sm">Join our community</p>
            <div className="flex justify-between">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-darkGrey md:w-[27%] md:space-y-5">
          <h4 className="font-semibold font1 text-textColor text-lg">
            Explore
          </h4>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="">Marketplace</a>
            <a href="">Rankings</a>
            <a href="">Connect a wallet</a>
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-darkGrey md:w-[42%] md:space-y-5">
          <h4 className="font-semibold font1 text-textColor text-lg">
            Join Our Weekly Digest
          </h4>
          <p className="text-sm">
            Get exclusive promotions and updates straight into your inbox.
          </p>
          <form>
            <div class="flex flex-col space-y-3">
              <input
                type="text"
                class="flex-1 px-6 py-2 rounded-3xl text-sm font-semibold focus:outline-none md:hidden"
                placeholder="Enter your email here"
              />
              <button class="px-6 py-2 text-white rounded-3xl text-sm font-semibold bg-ctaColor focus:outline-none md:hidden">
                Subscribe
              </button>
              <div className="w-full hidden md:flex">
                <input
                  type="text"
                  class="flex-1 px-6 py-3 rounded-l-xl text-sm font-semibold focus:outline-none"
                  placeholder="Enter your email here"
                />
                <button class="px-6 py-3 text-white rounded-xl -ml-4 text-sm font-semibold bg-ctaColor focus:outline-none">
                  Subscribe
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
