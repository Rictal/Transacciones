const Database = require("../utils/database");

class Server {
  database = null;
  constructor() {}

  async init() {
    this.database = new Database();
    await this.database.connect();
  }
}

module.exports = Server;
