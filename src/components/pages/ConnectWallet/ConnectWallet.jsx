import img from "../../../constants/images";
import Button from "../../Button/Button";


const ConnectWallet = () => {
  return (
    <div className="flex flex-col space-y-4 bg-background justify-between md:flex-row md:space-y-0">
      <div className="w-full h-60 md:w-[45%] md:h-screen">
        <img src={img.space6} alt="" className="w-full h-full" />
      </div>
      <div className="flex justify-start space-y-3 py-8 w-full md:w-[45%]">
        <div className="flex flex-col justify-center mx-auto sm:w-3/5 md:w-4/5">
          <div className="flex flex-col space-y-3">
            <h2 className="font-semibold text-3xl md:text-4xl">
              Connect Wallet
            </h2>
            <div className="flex flex-col">
              <p className="text-base md:text-lg">
                Choose a wallet you want to connect.
              </p>
              <p className="text-base md:text-lg">
                There are several wallet providers.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-4">
            <Button
              className="px-8 p-4 pt-4 w-full font-semibold bg-ctaColor rounded-2xl text-center lg:w-3/5"
              href="#"
            >
              <div className="flex items-center space-x-6 text-lg">
                <img src={img.metamask} alt="" className="h-8 w-8" />
                <span>Metamask</span>
              </div>
            </Button>
            <Button
              className="px-4 p-3 pt-4 w-full font-semibold bg-ctaColor rounded-2xl text-center lg:w-3/5"
              href="#"
            >
              <div className="flex items-center space-x-3 text-lg">
                <img src={img.walletconnect} alt="" className="h-8 w-8" />
                <span>Wallet Connect</span>
              </div>
            </Button>
            <Button
              className="px-8 p-4 pt-4 w-full font-semibold bg-ctaColor rounded-2xl text-center lg:w-3/5"
              href="#"
            >
              <div className="flex items-center space-x-6 text-lg">
                <img src={img.coinbase} alt="" className="h-8 w-8" />
                <span>Coinbase</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
