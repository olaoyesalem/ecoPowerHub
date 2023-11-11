// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;



error ServiceMarketplace__TotalSharesShouldBbeGreaterThanBuyableShares();
error ServiceMarketplace__CompanyDoesNotExist();
error ServiceMarketplace__OnlyOwnerCanCallThisFunction();
error ServiceMarketplace__companyAlreadyExists();
error ServiceMarketplace__companyDoesNotExist();
/// @title ServiceMarketplace
/// @author olaoye salem
/// @notice This smart contract is is the heart of EcoPowerHub. It controls creation of Companies, deposition and appropriation of funds.
/// @notice This contract allow users to invest in companies and participate in the revenue sharing. 


contract ServiceMarketplace {
    uint256 public  numberOfCompanies;

    struct Investor {
        uint256 investedAmount;
        uint256 sharePercentage;
    }

    struct Company{
        string name;
        uint256 totalCompanyValue;
        uint256 totalShares;
        uint256 sharePrice;
        uint256 buyableShares;
        uint256 companyFunds;
       uint256 availableShares;
       uint256 numberOfInvestors;
       address owner;
       address [] investors;

    }

    Company [] public  companiesList;
    address [] public  companiesAddress;
    address[] public investorAddresses; 
    bytes [] private   encodedNameList; 
    

    /** EVENTS */
    event newInvestor( address indexed investor,  uint256 indexed percentage, Company indexed  company);
    event ServicePaymentProcessed( uint256 indexed amountPaid, Company indexed company);
    event withdrawSuccess( uint256 indexed amount , address indexed addressTo , Company indexed company);
    event CompanyCreated(string indexed  name, uint256 indexed totalCompanyValue, uint256 indexed  totalShares, uint256  sharePrice, uint256   buyableShares, address owner );

    /** MAPPINGS **/

    mapping(string => mapping (address => Investor) ) public companyNameToInvestors; 
    mapping (string => Company) public nameToCompany;
    mapping (string => address) public  nameOfCompanyToOwner;
    mapping  (string => bool) public  nameExists;
 


    modifier onlyOwner(string memory nameOfCompany) {
       address owner = nameOfCompanyToOwner[nameOfCompany];
        
        if(msg.sender!=owner){
            revert ServiceMarketplace__OnlyOwnerCanCallThisFunction();
        }

        _;
    }

    modifier companyExist (string memory nameOfCompany) {
        bytes memory encodedName = abi.encode(nameOfCompany);
        for (uint256 i=0; i<encodedNameList.length;i++){
            if( compareBytes(encodedName,encodedNameList[i])){
                revert ServiceMarketplace__companyAlreadyExists(); 
            }
        }


        _;
    }

    modifier companyDoesNotExist(string memory nameOfCompany) {
    bytes memory encodedName = abi.encode(nameOfCompany);
    bool exists = false;
    for (uint256 i = 0; i < encodedNameList.length; i++) {
        if (compareBytes(encodedName, encodedNameList[i])) {
            exists = true;
            break;
        }
    }
    if (!exists) {
        revert ServiceMarketplace__companyDoesNotExist();
    }
    _;
}


    function createCompany (
        string memory _name,
        uint256 _totalCompanyValue,
        uint256 _totalShares,
        uint256 _sharePrice,
        uint256 _buyableShares
        
        ) public companyExist(_name) {
            
            if(_buyableShares>= _totalShares){

                revert ServiceMarketplace__TotalSharesShouldBbeGreaterThanBuyableShares(); 
            }

            Company memory company;
            company.name =_name;
            company.totalCompanyValue = _totalCompanyValue;
            company.sharePrice = _sharePrice;
            company.totalShares = _totalShares;
            company.buyableShares = _buyableShares;
            company.availableShares = _buyableShares;
            company.owner =msg.sender;
             
        bytes memory encodedName = abi.encode(_name);
        encodedNameList.push(encodedName);
        
            
        emit CompanyCreated(_name, _totalCompanyValue, _totalShares, _sharePrice, _buyableShares,msg.sender);
        nameToCompany[_name] = company;
        nameOfCompanyToOwner[_name] =msg.sender;
        companiesAddress.push(msg.sender);
        companiesList.push(company);
        numberOfCompanies++;

    }

    function invest(string memory companyName) public payable companyDoesNotExist(companyName) {
    
    
        // for investing users directly send money to thee smart contraact but we mapp the amount to the company
        // thaty amouttnt is omly the amount that the comapny can withdraw
        require(msg.value > 0, "Investment amount must be greater than 0");
        uint256  percentage= (((msg.value)/(nameToCompany[companyName].sharePrice * nameToCompany[companyName].buyableShares))*100)/1e18;
       
        require(percentage > 0 && percentage <= 100, "Percentage must be between 1 and 100");


        uint256 sharesToBuy = (nameToCompany[companyName].buyableShares * percentage)/100;
        require(sharesToBuy <= nameToCompany[companyName].availableShares, "Not enough shares available");
        nameToCompany[companyName].availableShares-= sharesToBuy;
        nameToCompany[companyName].companyFunds+=msg.value;
        nameToCompany[companyName].investors.push(msg.sender);
    
    
        
        // The mapping is investedAmountFor company to amount
        companyNameToInvestors[companyName][msg.sender].investedAmount += msg.value; 
        companyNameToInvestors[companyName][msg.sender].sharePercentage += percentage;
        
        
       nameToCompany[companyName].numberOfInvestors++;


        emit newInvestor(msg.sender, percentage,nameToCompany[companyName]);// add company

        
    }


        ///@notice This function takes in the serviceAmount and pay the investors based on thier share

    function payForService(string memory companyName) public payable{ 
          uint256 totalPayout;

        for (uint256 i = 0; i < nameToCompany[companyName].numberOfInvestors; i++) {
          
            address investor = nameToCompany[companyName].investors[i];

             uint256 share = ((msg.value/1e18) * companyNameToInvestors[companyName][investor].sharePercentage) / 100;
             uint256 payout = (companyNameToInvestors[companyName][investor].investedAmount * share) / nameToCompany[companyName].buyableShares;
            
            payable(investor).transfer(payout);
            totalPayout+=payout;    
            emit ServicePaymentProcessed(msg.value,nameToCompany[companyName]);
        }

        uint256 remainder = msg.value - totalPayout;

        nameToCompany[companyName].companyFunds+=remainder;

        
    }

    function withdraw( uint _amount, address _address, string memory nameOfCompany) public companyDoesNotExist(nameOfCompany) onlyOwner(nameOfCompany)  {// Now the
       
       uint256 maxAmount = nameToCompany[nameOfCompany].companyFunds;
        if(_amount <=maxAmount){
            payable(_address).transfer(_amount);
        }
        nameToCompany[nameOfCompany].companyFunds -= _amount;
        
        emit  withdrawSuccess(_amount, _address,nameToCompany[nameOfCompany]);
    }

    function checkBalanceOfCompany(string memory nameOfCompany) public companyDoesNotExist(nameOfCompany) onlyOwner(nameOfCompany) view returns (uint256) { // for each company
        return  nameToCompany[nameOfCompany].companyFunds;

    }

    function compareBytes(bytes memory a, bytes memory b) internal pure returns (bool) {
    if (a.length != b.length) {
        return false;
    }
    
    for (uint i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    
    return true;
}
    
}
