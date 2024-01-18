const { bot } = require("../core/bot");
const { Users } = require("../module/schema");

bot.start(async (msg) => {
  const first_name = msg.from.first_name;
  const id = msg.from.id;
  const check = await Users.findOne({ id });
  if (!check) {
    await Users.create({ first_name, id });
    msg.reply("Botimizga xosh kelipsiz");
  } else {
    msg.reply("Burinnan barsiz");
  }
});
