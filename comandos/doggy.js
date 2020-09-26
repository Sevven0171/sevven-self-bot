//by:Sevven
const request = require("request-promise");

module.exports = {
    "info": {
        "permission": 1,
        "name": "dog",
        "description": "Gets picture of a dog",
        "aliases": ["p", "puppy"],
        "syntax": "dog"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});
        request({
            uri: "https://api.thedogapi.com/v1/images/search",
            json: true
        }).then(data => {
            msg.channel.send({files: [{attachment: data[0].url, "name": `Sevvendoggy.${data[0].url.split(".")[3]}`}]});
        });
    }
}
