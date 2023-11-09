require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');

/** @type import('hardhat/config').HardhatUserConfig */

const LOCAL_HOST_URL = "http://127.0.0.1:8545/";
const LOCAL_HOST_PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

module.exports = {
  solidity: "0.8.0",

  defaultNetwork:"hardhat",

networks:{
   localHost:{
			url:LOCAL_HOST_URL,
			chainId:31337,
			accounts:[LOCAL_HOST_PRIVATE_KEY]
    },

},
namedAccounts: {
		deployer: {
			default: 0,
      localHost:0,
			5:0
		},
		player: {
			default: 1,
		},
	},


};
