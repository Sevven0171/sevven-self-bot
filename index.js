const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping recebido");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 30000000);

const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const client = new Discord.Client({autoReconnect: true});
const db = require("quick.db");
console.log("♨️ Ligando bot...")
let token = config.token
let prefix = config.prefix

client.on("message", (message) => {

    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(client, message, args);
    }   

     catch (e) {
        console.error(e.stack);
         //message.reply("**Você utilizou um comando inexistente, ou de maneira incorreta!**");
       message.delete()
    }
})


client.on("ready", () => {
  console.log(`[SevvenInfo] Bot logado em: ${client.user.tag} | ID: ${client.user.id}\n` + 
              `[SevvenInfo] Usuários: ${client.users.size}\n` +
              `[SevvenInfo] Servidores: ${client.guilds.size} servidores`);
     let status = [
    {name: `Selfbot desenvolvido por Sevven`,type: "STREAMING", url: "https://www.twitch.tv/Sevven言#0171"},
    {name: `https://github.com/s3vv3n/sevven-self-bot`,type: "STREAMING", url: "https://www.twitch.tv/Sevven言#0171"},
    {name: `${prefix}`, type: "STREAMING", url: "https://www.twitch.tv/Sevven言#0171"},
    {name: `言・Odachis no topo`, type: "STREAMING", url:"https://www.twitch.tv/Sevven言#0171"},
  ];

  setInterval(function() {
    let randomStatus = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ game: randomStatus });
  }, 1000);
});
client.login(token);
