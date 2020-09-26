const Discord = require("discord.js");

function randomizer(length, letter) {
    var randomizer = '';
    if (letter.indexOf('0') > -1) randomizer += '0123456789';
    if (letter.indexOf('A') > -1) randomizer += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (letter.indexOf('a') > -1) randomizer += 'abcdefghijklmnopqrstuvwxyz';
    var results = '';
    for (var i = length; i > 0; --i)
    {
    results += randomizer[Math.floor(Math.random() * randomizer.length)];
    }
    return results;
    }
    function duration(ms) {
          const sec = Math.floor((ms / 1000) % 60).toString()
          const min = Math.floor((ms / (1000 * 60)) % 60).toString()
          const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
          const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
          return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
      }
 
      module.exports.run = async(bot, message, args) =>{
        message.channel.send('https:/'+'/prnt.sc/'+ randomizer(6,'0a'));
        message.delete();
    }

module.exports.command = {
name: "print"
}
