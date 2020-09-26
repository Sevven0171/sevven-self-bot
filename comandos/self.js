const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = (client,message,args) => {
    let embed = new Discord.RichEmbed()

    .setTitle("Selfbot desenvolvido por Sevven言#0171")
    .setColor("RANDOM")
    .setDescription(`**Para acessar esse selfbot [Clique aqui](https://github.com/s3vv3n/sevven-self-bot)**`)
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setTimestamp()

    message.channel.send(embed);
}

exports.help = {
    name: "self"
}
