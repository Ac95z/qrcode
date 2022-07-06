const Discord = require('discord.js');
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_VOICE_STATES",],
});

client.on('ready', () => {
  client.user.setActivity('タイトル', { status: "online" });
  console.log(`${client.user.tag}の起動完了`);
  console.log(`${client.guilds.cache.size}個のサーバーで稼働中`);
  console.log(`${client.users.cache.size}人が参加中です。`);
});


const QRCode = require('qrcode');
client.on('messageCreate', async msg => {
  if (msg.content.startsWith('s!qrcode')) {
    QRCode.toFile('qr.png', `${msg.content.split(' ')[1]}`);
    msg.reply({ files: ['./qr.png'] })
  }
})

client.login(process.env.TOKEN);