module.exports = class DatabaseInterface {
  constructor(connector) {
    if (!connector) {
      throw new Error("Must pass a connector!!!!");
    }

    this.connector = connector;
  }

  get(key) {
    return this.connector.get(key) || null;
  }

  set(key, value) {
    return this.connector.set(key, value) || null;
  }

  delete(key) {
    return this.connector.delete(key) || null;
  }

  update(key, value) {
    return this.connector.set(key, value);
  }

};
