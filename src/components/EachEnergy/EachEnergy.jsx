import AvatarTab from "../AvatarTab/AvatarTab";

const EachNFT = ({ img, energyName, avatarName, img2, price, highestBid,className }) => {
  return (
    <div className={className}>
      <img src={img} alt="" className="w-full h-full" />
      <div className="font1 flex flex-col bg-darkGrey rounded-b-xl space-y-2 py-4">
        <div className="flex flex-col justify-between px-4">
          <p className="test-lg font-semibold">{energyName}</p>
          <AvatarTab
            src={img2}
            alt=""
            avatarName={avatarName}
            className="flex space-x-2"
          ></AvatarTab>
        </div>
        <div className="flex justify-between px-4">
          <div className="flex flex-col space-y-1">
            <p className="text-xs text-backgroundSecondary md:text-base">
              Price
            </p>
            <p>{price}</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-xs text-backgroundSecondary md:text-base">
              Highest Bid
            </p>
            <p>{highestBid}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachNFT;
