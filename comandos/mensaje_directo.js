const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton, PermissionFlagsBits} = require('discord.js')
const config = require('../config/config.json');
const colors = require('colors');

module.exports = {
  name: "md",
  alias: ["mensaje-directo", "dm"],
  execute (client, message, args) {
    if (!config.owners.includes(message.author.id)) {
      return message.channel.send("**❌ | No estás autorizado para utilizar este comando.**");
    }
    
    const userID = args[0];
    if (!userID) return message.channel.send("**❌ | ¡Pon una ID o menciona a un usuario!**");

    
    const user = message.mentions.members.first() || message.guild.members.cache.get(userID) || message.guild.members.cache.find(member => member.user.id === userID);
    if (!user) return message.reply("**❌ | No se encontró al usuario**");

    const mensaje = args.slice(1).join(" ");
    if (!mensaje) return message.reply("**❌ | ¡Escribir un mensaje es OBLIGATORIO!**");

    user.send(mensaje)
      .then(() => {
        message.channel.send("**✅ | ¡Mensaje enviado correctamente!**");
      })
      .catch((error) => {
        console.error(`Ocurrió un error al enviar el mensaje a ${user.user.tag}: ${error.message}`.red);
        message.channel.send(`**❌ | No se pudo enviar el mensaje a ${user.user.tag}. Por favor, comprueba que tienes permitido enviar mensajes directos a ese usuario.**`);
      });
  }
}
