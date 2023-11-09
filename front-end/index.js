import {
    donateFactoryAddress,
    donateAddress,
    donateFactoryABI,
    donateABI,
} from './constant.js'
import { ethers } from './ethers-5.6.esm.min.js'

const connectButton = document.getElementById('connectButton')
connectButton.onclick = connect

// const //fundButton = document.getElementById('fundButton')
// fundButton.onclick = fund

const withdrawButton = document.getElementById('withdrawButton')
withdrawButton.onclick = withdrawAddresss   // write another one for withdraw

const balanceButton = document.getElementById('balanceButton')
balanceButton.onclick = getBalance

// const createCampaignButton = document.getElementById('campaignButton')
// createCampaignButton.onclick = createCampaign

const createCampaignButton = document.getElementById('createCampaignButton')
createCampaignButton.onclick = createCampaign

// const checkSthButton  = document.getElementById('checkButton')
// checkSthButton.onclick = checkSth

const dashBoardButton = document.getElementById('dashBoardButton')
dashBoardButton.onclick = dashBoard

const dashBoardcampaignButton = document.getElementById(`dashBoardcampaignButton`)
dashBoardcampaignButton.onclick = campaignName
const fundButton = document.getElementById(`fundButton`)
fundButton.onclick = fundAddress



const descriptionButton = document.getElementById('descriptionButton')
descriptionButton.onclick = descriptions

// const searchButton = document.getElementById('search-bar')
// searchButton.onclick = search


// const withdrawAddressButton = document.getElementById('withdrawAddressButton')
// withdrawAddressButton.onclick = withdrawAddresss

// const getBalanceButton = document.getElementById('getBalanceButton')
// getBalanceButton.onclick = getBalance

// const searchButton = document.getElementById('searchButton')
// searchButton.onclick = search

let account,dashBoardAddress
let Address, addressName, description, _balance ,sendValue
const check = dashBoardAddress

const showBalanceBtn = document.querySelector('#balanceButton');
const balanceText = document.querySelector('#balance-text');

showBalanceBtn.addEventListener('click', () => {
 balanceText.textContent = balanceButton.value;
 balanceText.style.display = 'block';
});



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

async function checkSth(){
    console.log(`I'm Working`)
    console.log(Address)
    console.log(dashBoardAddress)
    console.log(check)
    window.alert(["check"])
}

async function connect() {
    
    if (typeof window.ethereum !== 'undefined') {
        try {
           account =  await window.ethereum.request({ method: 'eth_requestAccounts' })
            //changed This part
           window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x5' }]
          }).then(() => console.log('Switched to Goerli network!'));
        } catch (error) {
            console.log(error)
        }
       
        connectButton.innerHTML = account
    
    } else {
        connectButton.innerHTML = 'Install Metamask !!!!'
        window.alert(["Install Metamask"])
    }
}



async function withdraw() {
    let value  = document.getElementById('ethAmount').value
   const withdrawValue = ethers.utils.parseEther(value)
    console.log(value)
    if (typeof window.ethereum !== 'undefined') {
        console.log(` Withdrawing!!!!!!!!!!!`)
        console.log(`-------------------------------------`)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        console.log(`Signer:${signer}`)
        const contract = new ethers.Contract(
            donateFactoryAddress,
            donateFactoryABI,
            signer
        )
    
        const txnResponse = await contract.withdraw(withdrawValue)
      
        await listenForTxnMine(txnResponse, provider)
        console.log(`-------------------------------------`)
        console.log(`Withdrawn........`)
    }
}

async function dashBoard(){
 
    dashBoardButton.innerHTML = ` ${dashBoardAddress}`
}

async function campaignName(){
    dashBoardcampaignButton.innerHTML = `${addressName}`
}

async function Balance(){
    balButton.innerHTML = `${_balance}`
}

async function descriptions(){
    descriptionButton.innerHTML = `${description}`
}

async function balance() {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
         const balance = await provider.getBalance(donateFactoryAddress)
        console.log(` Balance : ${ethers.utils.formatEther(balance)} eth`)
        _balance = ethers.utils.formatEther(balance)

    }
}

async function createCampaign() {
    // Once this has been created it should go to a new page(index.html in createCampaign folder) and give the right details
   
     sendValue = ethers.utils.parseEther('0.01')// changed this to 0.01
    addressName = document.getElementById('addressNameInput').value
   
   
    description = document.getElementById('descriptionInput').value
   
    if (typeof window.ethereum !== 'undefined') { 
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            donateFactoryAddress,
            donateFactoryABI,
            signer
        )
        try {
            window.alert(["User has to pay 0.01 eth"])   
            const txnResponse = await contract.createDonate(
                addressName,
                description,
                { value: sendValue }
            )
            await txnResponse.wait(1)
            Address = await contract.getNameToAddress(addressName)
            console.log(` Sucessfully Created A campaign at ${Address}`)
            window.alert([` Sucessfully Created A campaign at ${Address}`])
            dashBoardAddress=Address
        } catch (error) {
         window.alert(["CAMPAIGN NAME HAS BEEN TAKEN"])   
        }
        

    }
    
        
}

async function fundAddress() {
    const ethAmount = document.getElementById('ethAmount').value
    let Address,
        addressName = document.getElementById('addressName').value

    // the name of the campaign i.e addressName is maaped to the corresponding address
    // the addressName is gotten when the a user clicks any address it wants to fund from the front end,
    // then the name of the campaign a user wants to fund is passed in ass address name

    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        // this contractFactory is an instance of donateFactory,we get the factory once again here necause we want to get
        // a maaping that gives us the address we want to transfer to : getNameToAddress(addressName)
        const contractFactory = new ethers.Contract(
            donateFactoryAddress,
            donateFactoryABI,
            signer
        )

        Address = await contractFactory.getNameToAddress(addressName) //addressName:
        // the name of the campaign i.e addressName is maaped to the corresponding address
        // the addressName is gotten when the a user clicks any address it wants to fund from the front end,
        // then the name of the campaign a user wants to fund is passed in ass address name

        const contract = new ethers.Contract(Address, donateABI, signer)

        try {
            const txnResponse = await contract.donate({
                value: ethers.utils.parseEther(ethAmount),
            })
            await listenForTxnMine(txnResponse, provider)
            window.alert([`Successfully Transferred ${ethAmount}  to ${Address}`])
            console.log(
                `Successfully Transferred ${ethAmount} eth from ${signer} to ${Address}`
            )
        } catch (error) {
            console.log(error)
            window.alert(["INSERT VALID VALUE OF ETH"])
        }
    }
}

async function withdrawAddresss() {
    let Address,withdrawValue,addressName
        addressName = document.getElementById('addressName').value
        withdrawValue = document.getElementById('ethAmount').value


    if (typeof window.ethereum !== 'undefined') {
        console.log(` Withdrawing!!!!!!!!!!!`)
        console.log(`-------------------------------------`)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contractFactory = new ethers.Contract(
            donateFactoryAddress,
            donateFactoryABI,
            signer
        )

        Address = await contractFactory.getNameToAddress(addressName)
        
        
        const contract = new ethers.Contract(Address, donateABI, signer)
        console.log(Address)

        try {
            const txnResponse = await contract.withdraw(ethers.utils.parseEther(withdrawValue))
            await listenForTxnMine(txnResponse, provider)
            console.log(`-------------------------------------`)
            console.log(`Withdrawn........`)
        } catch (error) {
            console.log(error)
            window.alert([`ONLY CAMAPIGN CREATOR CAN WITHDRAW AND VALID VALUE MUST BE INPUTED`])
        }

       
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
        const Balance = ethers.utils.formatEther(balance)
        console.log(` Balance : ${ethers.utils.formatEther(balance)} eth`)
        showBalanceBtn.addEventListener('click', () => {
            balanceText.textContent = ` ${Balance/10000} ETH`;
            balanceText.style.display = 'block';
           });
    }
   
}

async function search() {
    let creatorDetail
    const input = document.getElementById('search-bar').value

    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
            donateFactoryAddress,
            donateFactoryABI,
            signer
        )

        // search by Name
        const lengthOfNames = await contract.getHashedAddressListLength()
        const hashedName = await contract.getHashedName(input.toString())

        // search by Camapign Address
        const lengthOfAddresses = await contract.getAddressLength()
        

        //serachByCampaignAddress
        for (let i = 0; i < lengthOfNames; i++) {
            if (hashedName == (await contract.getHashedAddressList(i))) {
                const name = await contract.getNamesArray(0)
                creatorDetail = await contract.searchByName(name)

                console.log(creatorDetail)
            }
        }

        // search by Campaign Address
        for (let i = 0; i < lengthOfAddresses; i++) {
            if (input == (await contract.getCreatorList(i))) {
                creatorDetail = await contract.serachByCampaignAddress(input)
                console.log(creatorDetail)
            }
        }

        //search by creator
        for (let i = 0; i < lengthOfAddresses; i++) {
            if (input == (await contract.getListOfCampaignCreators(i))) {
                
                creatorDetail = await contract.searchByCreator(input)
                console.log(creatorDetail)
            }
        }
    }
}
