const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "send",
  alias: ["enviar"],
  execute (client, message, args) {
    
   const channel = message.mentions.channels.first()
   let sendch = message.guild.channels.cache.find(channel => channel.name === `${channel}`)
   const mensaje = args.slice(1).join(' ');
   if(!channel) return message.reply("**❌ | ¡Debes especificar el canal!**")
   if(!mensaje) return message.reply("**❌ | ¡Debes escribir tu mensaje!**")
   message.delete()
   channel.send(mensaje)
   message.channel.send("**✅ | ¡Mensaje enviado correctamente!**")

  }

}