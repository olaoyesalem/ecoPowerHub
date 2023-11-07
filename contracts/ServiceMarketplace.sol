// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title ServiceMarketplace
/// @author olaoye salem
/// @notice This smart contract is a  factory that will always be deployed by companies. 
/// @notice This contract allow users to invest in companies and participate in the revenue sharing. 
/// @dev Explain to a developer any extra details

contract ServiceMarketplace {
    address public owner;
    uint256 public totalCompanyValue;  // Total value of the company
    uint256 public totalShares;       // Total shares available
    uint256 public sharePrice;        // Price per share in toroNet

    struct Investor {
        uint256 investedAmount;
        uint256 sharePercentage;
    }

    /** EVENTS */
    event newInvestor( address indexed investor,  uint256 indexed percentage);
    event ServicePaymentProcessed( uint256 indexed amountPaid);
    event withdrawSuccess( uint256 indexed amount , address indexed addressTo );

    

    mapping(address => Investor) public investors; // Map of investors and their investments
    address[] public investorAddresses;  // List of investor addresses

    constructor(uint256 _totalCompanyValue, uint256 _totalShares, uint256 _sharePrice ) {
        owner = msg.sender;
        totalCompanyValue = _totalCompanyValue;
        totalShares = _totalShares;
        sharePrice = _sharePrice;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function invest(uint256 percentage) public payable {
        require(msg.value > 0, "Investment amount must be greater than 0");
        require(percentage > 0 && percentage <= 100, "Percentage must be between 1 and 100");

        uint256 sharesToBuy = (totalShares * percentage) / 100;
        require(sharesToBuy <= totalShares, "Not enough shares available");

        investors[msg.sender].investedAmount += msg.value;
        investors[msg.sender].sharePercentage += percentage;

        totalShares -= sharesToBuy;

        // Add the investor address to the list
        investorAddresses.push(msg.sender);
        emit newInvestor(msg.sender, percentage);

        
    }


        ///@notice This function takes in the serviceAmount and allow users that have recived service from the comapny
        /// @notice to pay the company and the investors.
    function payForService(uint256 serviceAmount) public payable{ // anybody should be able to call this 
        // Calculate payments to investors and distribute
        // Sends the remaining to the esmnart conyttract 
        for (uint256 i = 0; i < investorAddresses.length; i++) {
            address investor = investorAddresses[i];
            uint256 share = (serviceAmount * investors[investor].sharePercentage) / 100;
            uint256 payout = (investors[investor].investedAmount * share) / totalCompanyValue;
            payable(investor).transfer(payout);

            emit ServicePaymentProcessed(serviceAmount);
        }
        
    }

    function withdraw( uint _amount, address _address) public onlyOwner {
        payable(_address).transfer(_amount);

        
        emit  withdrawSuccess(_amount, _address);
    }

    function checkBalance() public {

    }
}
