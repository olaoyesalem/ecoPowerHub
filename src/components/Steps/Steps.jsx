const Steps = ({ src, setupHeading, setupText }) => {
  return (
    <div className="flex bg-backgroundSecondary px-3 h-auto w-full items-center justify-between rounded-2xl my-2 sm:w-[27%] sm:flex-col sm:h-72 sm:w-[45%] md:w-[27%]">
      <img
        src={src}
        alt=""
        className="w-[45%] h-full sm:w-full sm:w-full sm:h-3/5"
      />
      <div className="flex flex-col w-[54%] space-y-3 py-4 pt-4 px-0 text-start sm:text-center sm:w-full sm:px-4">
        <h4 className="font-semibold text-sm sm:text-base">{setupHeading}</h4>
        <p className="text-xs sm:text-sm">{setupText}</p>
      </div>
    </div>
  );
};

export default Steps;
