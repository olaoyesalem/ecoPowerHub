// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CompanyShares {
    address public owner; // The owner of the company shares contract
    uint256 public totalShares; // Total shares available
    uint256 public sharePrice; // Price per share in toroNet

    mapping(address => uint256) public sharesBought; // Map of investors and the number of shares they bought

    constructor(uint256 _totalShares, uint256 _sharePrice) {
        owner = msg.sender;
        totalShares = _totalShares;
        sharePrice = _sharePrice;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function buyShares(uint256 sharesToBuy) public payable {
        require(msg.value == sharePrice * sharesToBuy, "Insufficient funds");
        require(sharesToBuy <= totalShares, "Not enough shares available");

        sharesBought[msg.sender] += sharesToBuy;
        totalShares -= sharesToBuy;
    }

    function sellShares(uint256 sharesToSell) public onlyOwner {
        require(sharesToSell <= sharesBought[msg.sender], "Not enough shares to sell");

        sharesBought[msg.sender] -= sharesToSell;
        totalShares += sharesToSell;
        payable(msg.sender).transfer(sharePrice * sharesToSell);
    }
}

// Usage: Deploy this contract for each company on EcoPowerHub that wants to issue shares.
