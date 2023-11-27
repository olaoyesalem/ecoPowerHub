const { network, deployments } = require('hardhat')

module.exports = async ({ deployments, getNamedAccounts }) => {


    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    console.log(`------------------------------------------------------------`)

    const ServiceMarketplace = await deploy('ServiceMarketplace', {
        from: deployer,
        args: [],
        log: true
    })

    console.log(` Deploying...........`)
    log('--------------------------------------------------------------------------------')
     
    
    log(`Deployed at: ${ServiceMarketplace.address}`)
    log('--------------------------------------------------------------------------------')

    
}
