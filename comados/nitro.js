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

    module.exports.run = async(bot, message, args) =>{
        message.channel.send('https:/'+'/discord.gift/'+ randomizer(16,'0aA'));
        message.delete();
    }

module.exports.command = {
name: "nitro"
}
