const IngToken = artifacts.require('IngToken');
const EthSwap = artifacts.require('EthSwap');

module.exports = async function (deployer) {
    try {
        await deployer.deploy(IngToken); // IngToken 배포 진행
        const token = await IngToken.deployed(); // 배포 완료된 인스턴스 가져오기
        // console.log(token.address); // IngToken CA

        await deployer.deploy(EthSwap, token.address); // EthSwap 배포 진행
        const ethSwap = await EthSwap.deployed();
        // console.log(ethSwap);
    } catch (e) {
        console.log(e.message);
    }
};
