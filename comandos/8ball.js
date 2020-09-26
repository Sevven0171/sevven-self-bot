module.exports = {
    "info": {
        "permission": 1,
        "name": "8ball",
        "description": "Returns a random answer for a question",
        "aliases": ["8", "ball"],
        "syntax": "8ball [question]"
    },
    run: (bot, msg, args) => {
        msg.delete().catch(() => {});

        let answers = ["Sim", "Não", "Talvez", "E possivel", "Por que eu deveria saber?", "¯\\_(ツ)_/¯", "Essa não cola ", "100%", "Definitivamente", "Claro", "Deus... claro q não", "Não para tudo", "kkk boa piada:)"];
        let question = args.join(" ");

        if(question) {
            return msg.channel.send(`\`\`\`asciidoc\nSUCCESS!\n=====\nQ :: ${question}\nA :: ${answers[Math.floor(Math.random() * answers.length)]}\n\`\`\``);
        } else {
            return msg.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid syntax\n\`\`\``);
        }
    }
}
