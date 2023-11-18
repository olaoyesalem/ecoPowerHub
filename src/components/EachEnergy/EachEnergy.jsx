import AvatarTab from "../AvatarTab/AvatarTab";

const EachEnergy = ({
  img,
  energyName,
  avatarName,
  img2,
  price,
  highestBid,
  className,
  href
}) => {

  return (
    <a className={className} href={href}>
      <img src={img} alt="" className="w-full h-3/5" />
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
            <p className="text-xs text-backgroundSecondary md:text-sm">Price</p>
            <p className="text-sm">{price}</p>
          </div>
          <div className="flex flex-col space-y-1 sm:text-end">
            <p className="text-xs text-backgroundSecondary md:text-sm">
              Highest Bid
            </p>
            <p className="text-sm">{highestBid}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default EachEnergy;
