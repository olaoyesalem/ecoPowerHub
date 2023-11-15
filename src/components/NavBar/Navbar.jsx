import Button from "../Button/Button";

const NavBar = () => {
  return (
    <nav className="mx-auto my-4 flex justify-between items-center w-11/12">
      <div id="logoCont">
        <img src="" alt="" />
        <h3 id="logoText">NFT Marketplace</h3>
      </div>
      <div className="hidden justify-between items-center w-1/2">
        <div className="flex space-x-12">
          <a href="#">Marketplace</a>
          <a href="#">Rankings</a>
          <a href="#">Connect a wallet</a>
        </div>
        <Button className="py-4 px-8 bg-ctaColor rounded-2xl" href="#">Sign Up</Button>
      </div>
    </nav>
  );
};

export default NavBar;
