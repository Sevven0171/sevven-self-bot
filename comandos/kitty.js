//by:Sevven
const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "cat",
        "description": "Gets picture of a cat",
        "aliases": ["c", "k", "kitty"],
        "syntax": "cat"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});
        
        request({
            uri: "https://api.thecatapi.com/v1/images/search",
            json: true
        }).then(data => {
            msg.channel.send({files: [{attachment: data[0].url, "name": `Sevvenkitty.${data[0].url.split(".")[3]}`}]});
        });
    }
}
