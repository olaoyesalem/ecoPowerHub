export const ABI =  [
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
      "type": "event"
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
      "type": "event"
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
      "type": "event"
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
      "type": "event"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
    }
  ]