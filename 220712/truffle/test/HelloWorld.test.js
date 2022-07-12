const HelloWorld = artifacts.require('HelloWorld');

// contract 로 시작
contract('HelloWorld', (account) => {
    console.log(account); // eth.getAccounts()

    let hello;
    describe('Hello Contract', () => {
        it('Hello World Contract', async () => {
            hello = await HelloWorld.deployed();
        });

        it('get value', async () => {
            console.log(await hello.value());
        });

        it('set value', async () => {
            await hello.setValue('bitkunst');
            console.log(await hello.value());
        });
    });
});

// truffle 설치된 디렉토리에서 npx truffle test
