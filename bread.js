const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
const pfix = 'b!';

bot.on("ready", () => {
bot.channels.get('564951236487675914').send('Bready.');
console.log('Bread')
bot.user.setActivity("Bread <3", {type: "LISTENING"});

});


bot.on("message", async message => {
let msg = message.content.toLowerCase();
let args = message.content.slice(pfix.length).trim().split(/ +/g);
if(message.author.bot) return;
const cmd = args.shift().toLowerCase();
if(message.channel.topic != null) {
if(message.channel.topic.includes("Bread:Disable")) return;
if(message.channel.topic.includes("Bread:React")) {
let breadp = ['565351138526887936', '565315921736892428']
let rbread = breadp[Math.floor(Math.random() * breadp.length)]
if(msg.includes("bread")) {
       message.react(rbread);
}
}
}
 if(!msg.startsWith(pfix)) return;
try { 
 let commandFile = require(`./commands/${cmd}.js`)
 commandFile.run(bot, message, args);
} catch(err) {

let e = new Discord.RichEmbed()
.setTitle("Error")
.setAuthor(message.author.tag)
.setColor([255, 0, 0])
.setDescription(err.message)
.setTimestamp();
message.channel.send(e);
bot.channels.get('565011678203215892').send(e)
}
});

bot.login(process.env.TOKEN)
