const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  first_name: { type: String, require: true },
  id: { type: Number, require: true },
});

const Users = model("botusers", UserSchema);

module.exports = { Users };
