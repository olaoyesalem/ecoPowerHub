import ecopowerhub_backend from "../../api/ecopowerhub_backend"
import { useEffect } from "react";
import Categories from "../Categories/Categories";
import img from "../../constants/images"

 


const Section3 = () => {
  return (
    <section className="flex flex-col space-y-8 my-20 w-4/5 mx-auto md:w-5/6">
      <div className="text-xl font-semibold md:text-2xl">Browse Categories</div>
      <div className="flex justify-between flex-wrap">
        <Categories src={img.img} category="Solar Energy" />
        <Categories src={img.img} category="Wind Energy" />
        <Categories src={img.img} category="Hydropower" />
        <Categories src={img.img} category="Geothermal Energy" />
        <Categories src={img.img} category="Biomass Energy" />
        <Categories src={img.img} category="Tidal and Wave Energy" />
        <Categories src={img.img} category="Hybrid Systems" />
        <Categories src={img.img} category="Hydrogen Energy" />
      </div>
    </section>
  );
}

export default Section3
