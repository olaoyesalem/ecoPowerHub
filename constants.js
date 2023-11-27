export const ServiceMarketplaceAddress = 0xfC798448f67f9b90906881A763453eE14250a7f6
export const ServiceMarketplaceABI =  
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "inputs": [],
    "name": "ServiceMarketplace__AddressCannotCreateTwoCompanies",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ServiceMarketplace__CompanyDoesNotExist",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ServiceMarketplace__InsufficientToro",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ServiceMarketplace__NullAddress",
    "type": "error"
  },
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
    "name": "ServiceMarketplace__companyNameTaken",
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
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "CompanyCreated",
    "type": "event",
    "signature": "0xc47450d4bc3270f7a53ff3bddf818e7143e2d86e99ff44d933c5a3dd38edde71"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_add",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      }
    ],
    "name": "EtherReceived",
    "type": "event",
    "signature": "0x1e57e3bb474320be3d2c77138f75b7c3941292d647f5f9634e33a8e94e0e069b"
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
          },
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
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
    "signature": "0xf13bbd1f0ab36c5e686d1da7cc6812b29256c6fc1df65a97982c1d8149b72c59"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "investedAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sharePercentage",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "investorAddress",
            "type": "address"
          }
        ],
        "indexed": true,
        "internalType": "struct ServiceMarketplace.Investor",
        "name": "investor",
        "type": "tuple"
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
          },
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
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
    "signature": "0x9b04894b7dd2657b80568c1fe24b3f3c6d5d3f6f41d6e91010f02f3880227ad2"
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
          },
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
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
    "signature": "0x9ced45377d5a2f786af83fa4c0183ff265cf48c3a3ec93815346d52baec727e3"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "withdrawSuccessful",
    "type": "event",
    "signature": "0x65541453b7a0b24b32a4f4eabbb3f82e47464579f8abf733befede438c884ebd"
  },
  {
    "stateMutability": "payable",
    "type": "fallback",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
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
    "signature": "0x2e6ac8b3"
  },
  {
    "inputs": [],
    "name": "checkBalanceOfInvestor",
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
    "signature": "0xf608b4e0"
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
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "companyIdToInvestors",
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
      },
      {
        "internalType": "address",
        "name": "investorAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x4fdac684"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "companyOwners",
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
    "signature": "0xa93253c1"
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "idToCompany",
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
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0xc362174c"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "invest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xd87aa643"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "investorToAmount",
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
    "signature": "0x0d6782ab"
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
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "payForService",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x2fbd96fd"
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
    "inputs": [],
    "name": "tokenContract",
    "outputs": [
      {
        "internalType": "contract IToroTokenERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x55a373d6"
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
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "withdrawForCompany",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x0169ab05"
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
      }
    ],
    "name": "withdrawForInvestor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xa37b76ff"
  },
  {
    "stateMutability": "payable",
    "type": "receive",
    "payable": true
  }
]

export const toroAddress = 0xff0dFAe9c45EeB5cA5d269BE47eea69eab99bf6C
export const toroABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "val",
        "type": "uint256"
      }
    ],
    "name": "calculateTxFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

module.exports={
  ServiceMarketplaceAddress,
  ServiceMarketplaceABI,
  toroAddress,
  toroABI
}