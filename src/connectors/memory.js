module.exports = class MemoryConnector {
  
  constructor(){
    this.memory = {};
  } 

  set(key, value){
    this.memory[key] = value;
    return value;
  }

  get(key){
    return this.memory[key];
  }

  remove(key){
    let temp = this.memory[key];
    delete this.memory[key];
    return temp;
  }

};