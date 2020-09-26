const Discord = require("discord.js")

exports.run = (bot,message,args) => {
    message.delete();
    let embed = new Discord.RichEmbed()

    .setTitle("🤖 Ping do bot")
    .setColor("RANDOM")
    .setDescription(`**O ping do bot é de ${Math.round(bot.ping)}ms!**`)
    .setThumbnail("https://cdn.discordapp.com/emojis/726048927945850934.gif?size=2048")

    message.channel.send(embed);
}

exports.help = {
    name: "ping"
}
