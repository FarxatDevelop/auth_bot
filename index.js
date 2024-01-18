require("dotenv").config();
require("./core/index");
const { bot } = require("./core/bot");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL).catch((err) => console.log(err));

bot.telegram.setMyCommands([
  {
    command: "start",
    description: "Baslaw",
  },
  {
    command: "help",
    description: "Jardem",
  },
]);
