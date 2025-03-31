const { command, isPrivate } = require("../../lib/");

command({
  pattern: "hey",
  fromMe: isPrivate,
  desc: "To check ping",
  type: "user",
}, async (message, match) => {
  message.reply("Hi");
});
