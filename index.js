const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

///----------------------------------------------///

colors = require("colors");

function log(text, color) {
        if (typeof(color) != "undefined") { console.log(colors[color](text)) }
}

///----------------------------------------------///

client.on('ready', () => {
    let activities = [
        `Made By C.J`,
        `Com muita Merda💩`
    ],
    i = 0
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: 'PLAYING'
    }), 5000);
    client.user
    .setStatus("idle")
    log('BOT ON', 'green')
})

///----------------------------------------------///

client.login(config.token);