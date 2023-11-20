import {
    ABI,
    contractAddress
} from '../../constant.js'
import { ethers } from './ethers-5.6.esm.min.js'

const connectButton = document.getElementById('connectButton')
connectButton.onclick = connect

const fundButton = document.getElementById('fundButton')
fundButton.onclick = fund

const withdrawButton = document.getElementById('withdrawButton')
withdrawButton.onclick = withdraw

const balanceButton = document.getElementById('balanceButton')
balanceButton.onclick = balance

// const createCampaignButton = document.getElementById('campaignButton')
// createCampaignButton.onclick = createCampaign

const createCampaignButton = document.getElementById('createCampaignButton')
createCampaignButton.onclick = createCampaign

// const withdrawAddressButton = document.getElementById('withdrawAddressButton')
// withdrawAddressButton.onclick = withdrawAddresss

// const getBalanceButton = document.getElementById('getBalanceButton')
// getBalanceButton.onclick = getBalance

// const searchButton = document.getElementById('searchButton')
// searchButton.onclick = search

let account

function listenForTxnMine(txnResponse, provider) {
    // this is to listen to the blockchain and see events that has happened
    console.log(`Mining ${txnResponse.hash} hash`)

    //create a listner for the blockchain
    return new Promise((resolve, reject) => {
        provider.once(txnResponse.hash, (transactionReceipt) => {
            console.log(
                `Completed with ${transactionReceipt.confirmations} confirmations`
            )
            resolve()
        })
    })
}

async function connect() {
    if (typeof window.ethereum !== 'undefined') {
        try {
           account =  await window.ethereum.request({ method: 'eth_requestAccounts' }) //changed This part
        } catch (error) {
            console.log(error)
        }
        connectButton.innerHTML = account // and this part
    
    } else {
        connectButton.innerHTML = 'Install Metamask !!!!'
    }
}




async function balance() {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const balance = await provider.getBalance(donateFactoryAddress)
        console.log(` Balance : ${ethers.utils.formatEther(balance)} eth`)
    }
}

async function createCompany() {
let   _name,  _totalCompanyValue,_totalShares, _sharePrice,  _buyableShares


    _name = document.getElementById('companyName').value
    _totalCompanyValue = document.getElementById('totalCompanyValue').value
    _totalShares =  document.getElementById('totalShare').value
    _sharePrice = document.getElementById('sharePrice').value
    _buyableShares = document.getElementById('buyableShare').value


    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            contractAddress,
            ABI,
            signer
        )
        const txnResponse = await contract.createDonate(
            _name,  _totalCompanyValue,_totalShares, _sharePrice,  _buyableShares
            
        )
        await txnResponse.wait(1)
       
    }
}


async function getBalance() {
    let Address,
        addressName = document.getElementById('addressName').value
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contractFactory = new ethers.Contract(
            donateFactoryAddress,
            donateFactoryABI,
            signer
        )
        Address = await contractFactory.getNameToAddress(addressName)
        const balance = await provider.getBalance(Address)
        console.log(` Balance : ${ethers.utils.formatEther(balance)} eth`)
    }
}


