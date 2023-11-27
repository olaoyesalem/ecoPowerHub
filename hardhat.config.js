require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');
require('@nomiclabs/hardhat-ethers');


/** @type import('hardhat/config').HardhatUserConfig */

const LOCAL_HOST_URL = "http://127.0.0.1:8545/";
const LOCAL_HOST_PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const PRIVATE_KEY = "0xcec2343ca6e531743009cc35064d2abd79dbfe7a914657349c7a33a01d1dd6db"
const TORONET__URL ="https://testnet.toronet.org/rpc/"

module.exports = {
	
		
		solidity: {
		  compilers: [
			{ version: "0.8.17" },
			{ version: "0.8.20"  }
	
		  ]
		},
	  
	  


  defaultNetwork:"hardhat",

  
networks:{
   localHost:{
			url:LOCAL_HOST_URL,
			chainId:31337,
			accounts:[LOCAL_HOST_PRIVATE_KEY]
    },

	toroNet:{
		url:TORONET__URL,
		chainId:54321,
		accounts:[PRIVATE_KEY]
	}

},
namedAccounts: {
		deployer: {
			default: 0,
			54321:0,
      localHost:0,
			5:0,
	  toroNet:0,
	  54321:0
		},
		player: {
			default: 1,
		},
	},

	paths: {
		artifacts: "./artifacts",
		sources: "./contracts",
	  },
	  external: {
		contracts: [
		  {
			artifacts: "@openzeppelin/contracts",
		  },
		],
	  },

};
