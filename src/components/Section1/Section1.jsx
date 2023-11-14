import Collection from "../Collection/Collection";
import img from "../../constants/images";

const Section1 = () => {
  return (
    <section className="flex flex-col space-y-8 my-20 w-4/5 mx-auto md:w-5/6">
      <div className="flex flex-col text-start justify-between space-y-2">
        <h2 className="text-xl font-semibold md:text-2xl">
          Trending Collection
        </h2>
        <p className="text-sm md:text-base">
          Checkout Our Weekly Updated Trending Collection.
        </p>
      </div>
      <div className="flex justify-between w-full">
        <Collection
          className="flex flex-col space-y-2 w-full items-start sm:w-1/2 md:w-1/3"
          h3className="font-bold"
          src1={img.colordog}
          src2={img.cat}
          src3={img.bigcat}
          a1={img.a1}
          collName={"DSGN Animals"}
          collNum={"1025+"}
          avatarName="MrFox"
        />
        <Collection
          className="hidden flex-col space-y-2 items-end sm:flex sm:w-1/2 md:w-1/3 md:items-center"
          h3className="font-bold text-start sm:w-11/12"
          src1={img.mushroom2}
          src2={img.mushroom2}
          src3={img.mushroom2}
          a1={img.a1}
          collName={"Magic Mushrooms"}
          collNum={"6+"}
          avatarName="Shroomie"
        />
        <Collection
          className="flex-col space-y-2 hidden md:flex md:w-1/3"
          h3className="font-bold"
          src1={img.robot3}
          src2={img.mushroom2}
          src3={img.robot3}
          a1={img.a1}
          collName={"Disco Machines"}
          collNum={"345+"}
          avatarName="BeKind2Robots"
        />
      </div>
    </section>
  );
};
export default Section1;
