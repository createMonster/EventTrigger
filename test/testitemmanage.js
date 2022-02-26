const ItemManager = artifacts.require("./ItemManager.sol");

contract("ItemManager", accounts => {
    it("... should be able to ad an item", async function() {
        const itemManagerInstance = await ItemManager.deployed();
        const itemName = "test1";
        const itemPrice = 500;
        
        const result = await itemManagerInstance.createItem(itemName, itemPrice, {from: accounts[0]});
        assert.equal(result.logs[0].args._itemIndex, 0, "It's not the first item！");

        //console.log(result);
        const item = await itemManagerInstance.items(0);
        assert.equal(item._identifier, itemName, "It should be the same!");
        //console.log(item);
    })
});