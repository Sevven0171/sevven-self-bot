//by:Sevven
const Discord = require("discord.js");

function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString()
    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
    const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
    return `${days.padStart(1, '0')} dias, ${hrs.padStart(2, '0')} horas, ${min.padStart(2, '0')} minutos, ${sec.padStart(2, '0')} segundo, `
}

module.exports.run = async (bot, message, args) => {
    var embeduptime = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(` Bot esta online ha: ${duration(bot.uptime)}`)
    message.channel.send(embeduptime)
    message.delete();
}
module.exports.command = {
    name: "uptime",
} 
