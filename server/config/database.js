const mongoose = require("mongoose");
const { MONGOBD_URI } = require("./config");

exports.checkDbConnection = async () => {
  try {
    const { connection } = await mongoose.connect(MONGOBD_URI);
    console.log(
      `mongodb connection established on DATABASE_HOST: ${connection.host}:${connection.port} and DATABASE_NAME: ${connection.name}`
      // .cyan.italic
    );
  } catch (error) {
    console.log(`mongodb connection failed: ${error.message}`);
  }
};
