import AvatarTab from "../AvatarTab/AvatarTab";

const Collection = ({
  src1,
  src2,
  src3,
  a1,
  collName,
  collNum,
  className,
  h3className,
  avatarName,
}) => {
  return (
    <div className={className}>
      <img src={src1} alt="" className="h-80 w-full sm:w-11/12" />
      <div className="flex justify-between space-x-4 w-full sm:w-11/12">
        <img src={src2} alt="" className="w-1/3" />
        <img src={src3} alt="" className="w-1/3" />
        <div className="bg-ctaColor flex justify-center items-center font1 w-1/3 rounded-3xl font-bold sm:rounded-xl md:text-base lg:text-xl">
          {collNum}
        </div>
      </div>
      <h3 className={h3className}>{collName}</h3>
      <AvatarTab
        className="flex space-x-2 items-center w-full sm:w-11/12"
        src={a1}
        alt=""
        avatarName={avatarName}
      ></AvatarTab>
    </div>
  );
};

export default Collection;
