const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "vicente",
  alias: ["ImVixhooo", "VicentePinochet", "Vixho", "Chilean_Phantom"],
  execute (client, message, args) {

    const vicente = new Discord.MessageEmbed()
    .setTitle(`Vicente Homosexual`)
    .setImage(`https://cdn.discordapp.com/attachments/984916049881333770/1116173939777998869/unknown.png`)
    .setFooter(`Solicitado por: ${message.author.tag}`)
    .setColor("RANDOM")

    message.author.send({ embeds: [vicente] })
    message.reply('**✅ | ¡Mira tu bandeja de DMs!**');


  }

}