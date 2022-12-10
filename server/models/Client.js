const mongoose = require("mongoose");

const ConnectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("Client", ConnectSchema);
