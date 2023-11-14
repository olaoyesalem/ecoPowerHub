const ABI =  [
  {
    "inputs": [],
    "name": "ServiceMarketplace__OnlyOwnerCanCallThisFunction",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ServiceMarketplace__TotalSharesShouldBbeGreaterThanBuyableShares",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ServiceMarketplace__companyAlreadyExists",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ServiceMarketplace__companyDoesNotExist",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "totalCompanyValue",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "totalShares",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sharePrice",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "buyableShares",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "CompanyCreated",
    "type": "event",
    "signature": "0x82e658b970e04c2566978e8dcb63aef2a2b7b0a84ea35fd8d3534402caf98742"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event",
    "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "amountPaid",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "totalCompanyValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalShares",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sharePrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "buyableShares",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "companyFunds",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "availableShares",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "numberOfInvestors",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "investors",
            "type": "address[]"
          }
        ],
        "indexed": true,
        "internalType": "struct ServiceMarketplace.Company",
        "name": "company",
        "type": "tuple"
      }
    ],
    "name": "ServicePaymentProcessed",
    "type": "event",
    "signature": "0xe219c8b8a127d0a2114e75cff40a94db2f63a6ea9772b6a7b74b3d5b6c1a7426"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "investor",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "percentage",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "totalCompanyValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalShares",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sharePrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "buyableShares",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "companyFunds",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "availableShares",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "numberOfInvestors",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "investors",
            "type": "address[]"
          }
        ],
        "indexed": true,
        "internalType": "struct ServiceMarketplace.Company",
        "name": "company",
        "type": "tuple"
      }
    ],
    "name": "newInvestor",
    "type": "event",
    "signature": "0x103ac2865a432ae94e8183e48b1433f0d0c178e6ed2a7d48cdfac39d75ebd952"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "addressTo",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "totalCompanyValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalShares",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sharePrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "buyableShares",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "companyFunds",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "availableShares",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "numberOfInvestors",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "investors",
            "type": "address[]"
          }
        ],
        "indexed": true,
        "internalType": "struct ServiceMarketplace.Company",
        "name": "company",
        "type": "tuple"
      }
    ],
    "name": "withdrawSuccess",
    "type": "event",
    "signature": "0x86294781999d3df5d5c8934a521ec0c126e868e2fb28312298038984d45c1040"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "nameOfCompany",
        "type": "string"
      }
    ],
    "name": "checkBalanceOfCompany",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0xeedf151c"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "companiesAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x5509101d"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "companiesList",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "totalCompanyValue",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalShares",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "sharePrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "buyableShares",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "companyFunds",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "availableShares",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "numberOfInvestors",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x9c1f5bd2"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "companyNameToInvestors",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "investedAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "sharePercentage",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x6ae321b1"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_totalCompanyValue",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_totalShares",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_sharePrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_buyableShares",
        "type": "uint256"
      }
    ],
    "name": "createCompany",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf92fc41a"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "companyName",
        "type": "string"
      }
    ],
    "name": "invest",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true,
    "signature": "0x0a8b7826"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "investorAddresses",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x95a25efa"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "nameExists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0xcc637afe"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "nameOfCompanyToOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x1422873f"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "nameToCompany",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "totalCompanyValue",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalShares",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "sharePrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "buyableShares",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "companyFunds",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "availableShares",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "numberOfInvestors",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x0c5b537a"
  },
  {
    "inputs": [],
    "name": "numberOfCompanies",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0xd8d9f4db"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x8da5cb5b"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "companyName",
        "type": "string"
      }
    ],
    "name": "payForService",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true,
    "signature": "0xa9ce953a"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x715018a6"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf2fde38b"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "nameOfCompany",
        "type": "string"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf108a7d2"
  }
]