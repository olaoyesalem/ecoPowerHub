import img from "../../../constants/images";
import Button from "../../Button/Button";

const UserPage = () => {
  return (
    <>
      <div className="relative">
        <img src={img.banner} alt="" className="w-full" />
        <img
          src={img.girl}
          alt=""
          className="absolute -bottom-14 left-[35%] w-32 h-32 sm:left-20"
        />
      </div>
      <section className="flex flex-col space-y-8 my-20 w-4/5 mx-auto">
        <div className="flex flex-col text-start justify-between space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
          <div className="flex flex-col w-full space-y-3 sm:w-3/4">
            <h2 className="text-xl font-semibold md:text-2xl">
              Animakid
            </h2>
          </div>
          <Button
            className="hidden h-14 p-2 px-4 font-semibold w-full bg-ctaColor rounded-2xl text-center sm:p-2 sm:w-48 sm:block md:pt-4 sm:h-10"
            href="#"
          >
            Go To Artist Page
          </Button>
          <Button
            className="hidden h-14 p-2 px-4 font-semibold w-full bg-ctaColor rounded-2xl text-center sm:p-2 sm:w-48 sm:block md:pt-4 sm:h-10"
            href="#"
          >
            Go To Artist Page
          </Button>
        </div>
      </section>
    </>
  );
};

export default UserPage;
