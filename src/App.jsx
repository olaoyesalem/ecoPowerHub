import NavBar from "./components/NavBar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import UserPage from "./components/pages/UserPage/UserPage.jsx";
import CreateAccount from "./components/pages/CreateAccount/CreateAccount.jsx";
import MarketPlace from "./components/pages/MarketPlace/MarketPlace.jsx";
import EachEnergyType from "./components/pages/EachEnergyType/EachEnergyType.jsx";
import HomePage from "./components/pages/HomePage/HomePage.jsx"
import { Routes, Route } from "react-router-dom";
// import EachEnergy from "./components/EachEnergy/EachEnergy.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="marketplace" element={<MarketPlace />} />
        <Route path="energy" element={<EachEnergyType />} />
        <Route path="user" element={<UserPage />} />
      </Routes>
      <Footer />
      {/* <UserPage /> */}
      {/* <EachEnergyType/> */}
      {/* <MarketPlace/> */}
      {/* <CreateAccount/> */}
    </>
  );
};

export default App;
