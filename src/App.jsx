import NavBar from "./components/NavBar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import UserPage from "./components/pages/UserPage/UserPage.jsx";
import ConnectWallet from "./components/pages/ConnectWallet/ConnectWallet.jsx";
import MarketPlace from "./components/pages/MarketPlace/MarketPlace.jsx";
import EachEnergyType from "./components/pages/EachEnergyType/EachEnergyType.jsx";
import HomePage from "./components/pages/HomePage/HomePage.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="connect-wallet" element={<ConnectWallet />} />
        <Route path="marketplace" element={<MarketPlace />} />
        <Route path="energy" element={<EachEnergyType />} />
        <Route path="user" element={<UserPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
