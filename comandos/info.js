const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "info",
    alias: ["información"],
    execute (client, message, args) {
    
        message.channel.send("**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \nLink de discord:** https://discord.gg/am7DSe4A4Q \n\n**Link de nuestro grupo oficial:** https://www.roblox.com/groups/10304531/CL-Banco-Estado#!/about\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ")
        

    }
}