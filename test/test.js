var assert = require("assert");
const { expect } = require("chai");

const DatabaseInterface = require("../src/interface");
const { Memory } = require("../src");
const MemoryConnector = require("../src/connectors/memory");

describe("creates a new memory db", function() {
  it("should successfully create a new db", function() {
    expect(new Memory()).to.be.an.instanceOf(DatabaseInterface);
    expect(new Memory().connector).to.be.an.instanceOf(MemoryConnector);
  });
  it("should add a key value pair to memory", function() {
    const myMemory = new Memory();
    expect(myMemory.set('chris', 27)).to.be.equal(27);
    expect(myMemory.connector.memory.chris).to.be.equal(27, 'Memory connector is not storing data properly');
    expect(myMemory.get('chris')).to.be.equal(27, 'DB not getting data from connector');
  })
});


