const storage = artifacts.require('StorageContract')

contract('StorageContract', () => {
    it('should set the value of data variable', async () => {
        const simpleStorage = await storage.deployed();
        await simpleStorage.set('this');
        const result = await simpleStorage.get();
        assert(result === 'this')
    });
});