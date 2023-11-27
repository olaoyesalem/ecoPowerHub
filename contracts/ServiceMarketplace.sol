// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



error ServiceMarketplace__TotalSharesShouldBbeGreaterThanBuyableShares();
error ServiceMarketplace__CompanyDoesNotExist();
error ServiceMarketplace__OnlyOwnerCanCallThisFunction();
error ServiceMarketplace__companyNameTaken();
error ServiceMarketplace__AddressCannotCreateTwoCompanies();
error ServiceMarketplace__NullAddress();
error ServiceMarketplace__InsufficientToro();


import "@openzeppelin/contracts/access/Ownable.sol";


/// @title ServiceMarketplace
/// @author olaoye salem
/// @notice This smart contract is is the heart of EcoPowerHub. It controls creation of Companies, deposition and appropriation of funds.
/// @notice This contract allow users to invest in companies and participate in the revenue sharing. 

/// @title IToroTokenERC20
/// @notice  This is the Interface for the toro Token and ServiceMarketplace uses the Token

interface IToroTokenERC20 {
    /// @notice Get token name
    function name() external view returns (string memory);

    /// @notice Get token symbol
    function symbol() external view returns (string memory);

    /// @notice Get token balance
    function balanceOf(address addr) external view returns (uint256);

    /// @notice Get allowance
    /// @param owner holder address
    /// @param spender spender address
    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    /// @notice Client toro transfer
    /// @param to Receiver address
    /// @param value Transfer amount
    /// @dev note function return true if the transaction succeed
    function transfer(address to, uint256 value) external returns (bool);

    /// @notice Client toro approve allowance
    /// @param spender Spender address
    /// @param amount Allowance amount
    /// @dev note function return true if the transaction succeed
    function approve(address spender, uint256 amount) external returns (bool);

    /// @notice Toro transferFrom function
    /// @param sender Sender address
    /// @param recipient Recipient address
    /// @param amount Transfer amount
    /// @dev note function return true if the transaction succeed
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    /// @notice Calculate transfer fee
    /// @param sender Sender address
    /// @param val Transfer amount
    /// @dev Client can use this function before the transaction to get the potential transaction feehoe
    function calculateTxFee(address sender, uint256 val)
        external
        returns (uint256);

        
}


 contract ServiceMarketplace is Ownable{
       
    IToroTokenERC20 public tokenContract;

    constructor() {
     tokenContract   = IToroTokenERC20(0xff0dFAe9c45EeB5cA5d269BE47eea69eab99bf6C);
    }


    /** STATE VARIABLES **/
    
    
    uint256 public  numberOfCompanies;
   
    
    
    
    struct Investor {
        uint256 investedAmount;
        uint256 sharePercentage;
        address investorAddress;
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
       uint256 id;

    }
    address [] public  companiesAddress;
    address[]public  companyOwners;
    Company [] private  companiesList;
    uint256 [] private  idList;
    bytes [] private encodedNameList;
    Investor [] private  investors;
    

    /** EVENTS */
    event newInvestor( Investor indexed investor,  uint256 indexed percentage, Company indexed  company);
    event ServicePaymentProcessed( uint256 indexed amountPaid, Company indexed company);
    event withdrawSuccess( uint256 indexed amount , address indexed addressTo , Company indexed company);
    event CompanyCreated(string indexed  name, uint256 indexed totalCompanyValue, uint256 indexed  totalShares, uint256  sharePrice, uint256   buyableShares, address owner, uint256 id );
    event EtherReceived(address _add, uint256 balance);
    event withdrawSuccessful(uint256, address);


    /** MAPPINGS **/

    mapping(uint256 => mapping (address => Investor) ) public companyIdToInvestors; 
    mapping (uint256 => Company) public  idToCompany;
    mapping (uint256 => address) private  idToOwner;
    mapping  (address => uint256) public   investorToAmount;
 
/** MODIFIER **/
    modifier isInvestor(address _address) {
    bool isInvestorAddress = false;

    for (uint256 i = 0; i < numberOfCompanies; i++) {
        if (companyIdToInvestors[i][_address].investorAddress == _address) {
            isInvestorAddress = true;
            break;
        }
    }

    require(isInvestorAddress, "Address is not an investor in any company");
    _;
}




  modifier companyNameTaken (string memory nameOfCompany) {
        bytes memory encodedName = abi.encode(nameOfCompany);
        for (uint256 i=0; i<encodedNameList.length;i++){
            if( compareBytes(encodedName,encodedNameList[i])){
                revert ServiceMarketplace__companyNameTaken(); 
            }
        }


        _;
    }


    modifier Owner(uint256 id) {
       address owner = idToOwner[id];
        
        if(msg.sender!=owner){
            revert ServiceMarketplace__OnlyOwnerCanCallThisFunction();
        }

        _;
    }

   modifier addressCanCreateOnce() {
        for (uint256 i = 0; i < companyOwners.length; i++) {
            if(companyOwners[i] == msg.sender){
                revert ServiceMarketplace__AddressCannotCreateTwoCompanies(); 
            }
           
        }
        _;
    }


    modifier companyDoesNotExist(uint256 id) {  
  
        if(id>numberOfCompanies-1 || id<0 ){
            revert ServiceMarketplace__CompanyDoesNotExist(); 
        }
   
    _;
}

modifier  TotalSharesGreaterThanBuyableShares( uint256 _buyableShares, uint256 _totalShares){
        if(_buyableShares>= _totalShares){

              revert ServiceMarketplace__TotalSharesShouldBbeGreaterThanBuyableShares(); 
            }
_;
}

modifier nullAddress(address _address){
    if(_address == address(0)){
        revert ServiceMarketplace__NullAddress(); 
    }
    _;
}

            /** PUBLIC FUNCTIONS **/


    /// @notice This function create a company. 
    /// @notice An address cannot create more than one Company.
    /// @param _name: Name Of the Company
    /// @param  _totalCompanyValue: The Estimated Value of the company in Toro
    /// @param _totalShares: The total shares of the company
    /// @param _sharePrice: The price of each share of the company in Toro.
    /// @param _buyableShares: The number of shares the comapny wants to sell.
    /// @notice _buyableShares should be less than _totalShares
   

    function createCompany (
        string memory _name,
        uint256 _totalCompanyValue,
        uint256 _totalShares,
        uint256 _sharePrice,
        uint256 _buyableShares
        
        ) public  addressCanCreateOnce() companyNameTaken(_name) TotalSharesGreaterThanBuyableShares(_buyableShares,_totalShares){
            

             bytes memory encodedName = abi.encode(_name);
             encodedNameList.push(encodedName);
            Company memory company;
            company.name =_name;
            company.totalCompanyValue = _totalCompanyValue;
            company.sharePrice = _sharePrice;
            company.totalShares = _totalShares;
            company.buyableShares = _buyableShares;
            company.availableShares = _buyableShares;
            company.owner =msg.sender;
            company.id = generateNewId();
             

        companiesAddress.push(msg.sender);
        companiesList.push(company);
        idToCompany[company.id] =company;
        idToOwner[company.id] = msg.sender;
        companyOwners.push(msg.sender);
        numberOfCompanies++;
        
            
        emit CompanyCreated(_name, _totalCompanyValue, _totalShares, _sharePrice, _buyableShares,msg.sender,company.id);
        

    }

    /// @notice This function allows users to invest in any company.
    /// @notice When calculated in percentage the value of the investment with respect to the sharePrice and buyableShares must be between 1 and 100
    /// @param id : Id mapped to the company that a user wants to invest in.


    function invest(uint256  id,uint256 amount) public  companyDoesNotExist(id)  {
        Investor  memory investor;
        
        require(amount > 0, "Investment amount must be greater than 0");

    tokenContract.transferFrom(msg.sender, address(this), amount);

      // uint256 percentage = amount.mul(100).div(idToCompany[id].sharePrice.mul(idToCompany[id].buyableShares).div(1e18));

        uint256  percentage= (((amount)/(idToCompany[id].sharePrice * idToCompany[id].buyableShares))*100)/1e18;
        require(percentage > 0 && percentage <= 100, "Percentage must be between 1 and 100");


   
       
        require(percentage > 0 && percentage <= 100, "Percentage must be between 1 and 100");


        uint256 sharesToBuy = (idToCompany[id].buyableShares * percentage)/100;

      //uint256 sharesToBuy = idToCompany[id].buyableShares.mul(percentage).div(100);
        require(sharesToBuy <= idToCompany[id].availableShares, "Not enough shares available");
        idToCompany[id].availableShares-= sharesToBuy;
        idToCompany[id].companyFunds+=amount;
        idToCompany[id].investors.push(msg.sender);

        investor.investedAmount = amount;
        investor.sharePercentage = percentage;
        investor.investorAddress = msg.sender;

       
       investors.push(investor);
    
        
        // The mapping is investedAmountFor company to amount
        companyIdToInvestors[id][msg.sender].investedAmount += amount; 
        companyIdToInvestors[id][msg.sender].sharePercentage += percentage;
        companyIdToInvestors[id][investor.investorAddress]=investor;
    
        
        
       idToCompany[id].numberOfInvestors++;


        emit newInvestor(investor, percentage,idToCompany[id]);

        
    }


        ///@notice This function allows a user to pay for any service to a company.
        /// @notice This function also credits all investors based on thier share percentage and allocate the reminants to the company
        ///@param id: The Id of the comapny that the user wants to pay to .

  function payForService(uint256 id, uint256 amount) public companyDoesNotExist(id) {
    uint256 totalPayout;

    if (amount <= 0) {
        revert ServiceMarketplace__InsufficientToro(); 
    }

    tokenContract.transferFrom(msg.sender, address(this), amount);

    for (uint256 i = 0; i < idToCompany[id].numberOfInvestors; i++) {
        address investor = idToCompany[id].investors[i];
        
  uint256 share = ((amount/1e18) * companyIdToInvestors[id][investor].sharePercentage) / 100;
             uint256 payout = (companyIdToInvestors[id][investor].investedAmount * share) / idToCompany[id].buyableShares;
        investorToAmount[investor] += payout;
        totalPayout += payout;

        emit ServicePaymentProcessed(amount, idToCompany[id]);
    }

    uint256 remainder = amount - totalPayout;

    idToCompany[id].companyFunds += remainder;
}

    /// @notice This function allows only the owner of Companies to Withdraw thier allocated amount.
    /// @notice Users cannot call this function because no amount is allocated to them
    /// Instead when other user calls the payForService function. They get credited automatically.
    /// @param _amount : The amount the owner of the companay wants to withdraw from the smart contract.
    /// @notice the _amount must be less than the allocated amount
    /// @param _address : The address that will recieve the funds.
    /// @param id: the Id of the company that wants withdrawal.

    function withdrawForCompany( uint _amount, address _address,uint256 id) public companyDoesNotExist(id) Owner(id) nullAddress(_address)  {// Now the
       
       uint256 maxAmount = idToCompany[id].companyFunds;
        if(_amount <=maxAmount){
          require(tokenContract.transfer(_address, _amount), "Token transfer failed: Insufficient allowance or balance");
          
        }
        idToCompany[id].companyFunds -= _amount;
        
        emit  withdrawSuccess(_amount, _address,idToCompany[id]);
    }

    function withdrawForInvestor(uint256 _amount, address _address) public isInvestor(msg.sender) {
        uint256 maxAmount = investorToAmount[msg.sender];
        if(_amount <=maxAmount){
          require(tokenContract.transfer(_address, _amount), "Token transfer failed: Insufficient allowance or balance");
          
        }

        investorToAmount[msg.sender]-=_amount;

        emit  withdrawSuccessful(_amount,_address );

    }

    /// @notice This function returns the balance of a company that remains in the pool.
    /// @param id: The Id of the company 

    function checkBalanceOfCompany(uint256 id)  companyDoesNotExist(id) Owner(id) public view returns (uint256) { // for each company
        return  idToCompany[id].companyFunds;

    }

    function checkBalanceOfInvestor() isInvestor(msg.sender) public view returns (uint256)  {

        return  investorToAmount[msg.sender];
    }

            /**    INTERNAL FUNCTIONS **/
   
   /// @dev This function generates an Id;
   function generateNewId() internal  returns(uint256 id){
    
    id =numberOfCompanies > 0 ? companiesList[numberOfCompanies - 1].id + 1 : 0;
    idList.push(id);
}

/// @notice This function takes in two bytes and compare them.
/// @dev This function helps to check if the name of a company has not been taken
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

 receive() external payable {
        emit EtherReceived(msg.sender, msg.value);
      
    }

    fallback() external payable {
        
        emit EtherReceived(msg.sender, msg.value);
        
    }
  
}


