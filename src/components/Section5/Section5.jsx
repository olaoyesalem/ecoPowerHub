import Steps from "../Steps/Steps";
import img from "../../constants/images";

const Section5 = () => {
  return (
    <section className="flex flex-col space-y-8 mt-20 mb-10 w-4/5 mx-auto md:w-5/6">
      <div className="flex flex-col text-start justify-between space-y-2">
        <h2 className="text-xl font-semibold md:text-2xl">How It Works</h2>
        <p className="text-sm md:text-base">Find out how to get started.</p>
      </div>
      <div className="flex flex-col justify-between flex-wrap sm:flex-row md:justify-between">
        <Steps
          src={img.icon}
          setupHeading="Setup Your Wallet"
          setupText="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
        />
        <Steps
          src={img.icon}
          setupHeading="Create Collection"
          setupText="Upload your work and set up your collection. Add a description,social links and floor price."
        />
        <Steps
          src={img.icon}
          setupHeading="Start Earning"
          setupText="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
        />
      </div>
    </section>
  );
};

export default Section5;
