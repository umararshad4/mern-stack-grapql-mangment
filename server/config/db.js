const mongoose = require("mongoose");

const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log(
      `connection is established ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
