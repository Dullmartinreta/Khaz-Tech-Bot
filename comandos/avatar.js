const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "avatar",
  alias: ["pfp", "fotodeperfil", "fdp", "av"],
  execute (client, message, args) {

    const usuario = message.mentions.users.first() || message.author;
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Avatar de ${usuario.tag}`)
    .setImage(usuario.displayAvatarURL({ size: 1024, dinamic: true}))
    .setFooter(`Solicitado por: ${message.author.tag}`)
    .setColor("RANDOM")

    message.reply({ embeds: [embed] })


  }

}