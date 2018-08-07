const DatabaseInterface = require('./interface.js');
const MemoryConnector = require('./connectors/memory');

const Memory = function() {
  
  return new DatabaseInterface(new MemoryConnector());

};

module.exports = {
  Memory
};

