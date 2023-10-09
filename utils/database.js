const Mongoose = require("mongoose");

class Database {
  connection = null;
  constructor() {}
  async connect() {
    try {
      this.connection = await Mongoose.connect(
        `mongodb+srv://SrJulioDeLana:Rictal98.@cluster0.pfp4y1n.mongodb.net/Transacciones?retryWrites=true&w=majority`
        /*
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
        */
      );

      console.log(`conexión exitosa`);
    } catch (error) {
      console.error(error);
    }
  }

  async close() {
    try {
      //await this.connection.close();
      this.connection?.disconnect();
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Database;
