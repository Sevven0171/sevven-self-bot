module.exports = {
    "info": {
        "permission": 1,
        "name": "1337",
        "description": "M4k3s y0u sp34k l1k3 7h1s",
        "aliases": ["leet"],
        "syntax": "1337 [message]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        let letters = {
            "a": 4,
            "e": 3,
            "i": 1,
            "l": l,
            "o": 0,
            "t": 7
        }

        let message = args.join(" ");
        let leet = "";

        if(message) {
            for(let i = 0; i < message.length; i++) {
                if(letters[message[i]]) {
                    leet += letters[message[i].toLowerCase()];
                } else {
                    leet += message[i];
                }
                
                if(i == message.length - 1) return msg.channel.send(leet);
            }
        } else {

        }
    }
}
