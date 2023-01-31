const QRCode = require("qrcode");
client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (message.content.startsWith("!qr")) {
    const qr = message.content.split(" ");
    if (!qr) return message.reply("キーワードを入力してください");
    QRCode.toFile("qr.png", `${qr}`);
    message.reply({ files: ["./qr.png"] });
  };
});
