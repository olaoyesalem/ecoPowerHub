const { network} = require('hardhat')

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { log, deploy } = deployments
    const { deployer } = await getNamedAccounts()

   
        console.log(" Local Network Detected");
        console. log(' Deploying -----------------------');
    const ServiceMarketplace = await deploy('ServiceMarketplace', {
        from: deployer,
        log: true,
        args: [],
    })
    log('--------------------------')
    log('Deployed.......')
    log(`Deployed at  : ${ServiceMarketplace.address}`)
    log('--------------------------')

}
