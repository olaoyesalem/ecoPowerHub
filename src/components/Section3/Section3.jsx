import Categories from "../Categories/Categories";
import img from "../../constants/images"
const Section3 = () => {
  return (
    <section className="flex flex-col space-y-8 my-20 w-4/5 mx-auto md:w-5/6">
      <div className="text-xl font-semibold md:text-2xl">Browse Categories</div>
      <div className="flex justify-between flex-wrap">
        <Categories src={img.img} category="Art" />
        <Categories src={img.img} category="Collectibles" />
        <Categories src={img.img} category="Music" />
        <Categories src={img.img} category="Video" />
        <Categories src={img.img} category="Photography" />
        <Categories src={img.img} category="Utility" />
        <Categories src={img.img} category="Sport" />
        <Categories src={img.img} category="Virtual Worlds" />
      </div>
    </section>
  );
}

export default Section3
