const IngToken = artifacts.require('IngToken');

module.exports = function (deployer) {
    deployer.deploy(IngToken, 'ingToken', 'ITK', 3000);
};
