const Discord = require('discord.js');
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_VOICE_STATES",],
});

const QRCode = require("qrcode");
client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (message.content.startsWith("!qr")) {
    const qr = message.content.split(" ")[1]
    if (!qr) return message.reply("キーワードを入力してください");
    QRCode.toFile("qr.png", `${qr}`);
    message.reply({ files: ["./qr.png"] });
  };
});

client.login(process.env.TOKEN);
