const { network, deployments } = require('hardhat')

const ToroTokenAddress = 0xff0dFAe9c45EeB5cA5d269BE47eea69eab99bf6C

module.exports = async ({ deployments, getNamedAccounts }) => {


    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    console.log(`------------------------------------------------------------`)

    const ServiceMarketplace = await deploy('ServiceMarketplace', {
        from: deployer,
        args: [ToroTokenAddress],
        log: true
    })

    console.log(` Deploying...........`)
    log('--------------------------------------------------------------------------------')
     
    
    log(`Deployed at: ${ServiceMarketplace.address}`)
    log('--------------------------------------------------------------------------------')

    
}
