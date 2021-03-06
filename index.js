const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

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
    console.log('BOT ON')
})

client.login(config.token);