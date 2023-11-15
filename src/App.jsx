import NavBar from "./components/NavBar/Navbar.jsx";
// import HeroSection from "./components/HeroSection/HeroSection.jsx";
// import Section1 from "./components/Section1/Section1.jsx";
// import Section2 from "./components/Section2/Section2.jsx";
// import Section3 from "./components/Section3/Section3.jsx";
// import Section4 from "./components/Section4/Section4.jsx";
// import Section5 from "./components/Section5/Section5.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import CreateAccount from "./components/pages/CreateAccount/CreateAccount.jsx";
// import MarketPlace from "./components/pages/MarketPlace/MarketPlace.jsx";
import EachEnergyType from "./components/pages/EachEnergyType/EachEnergyType.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <EachEnergyType/>
      {/* <MarketPlace/> */}
      {/* <CreateAccount/> */}
      {/* <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 /> */}
      <Footer />
    </>
  );
};

export default App;
