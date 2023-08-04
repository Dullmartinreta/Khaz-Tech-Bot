const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton } = require('discord.js');
const config = require('../config/config.json');
const userData = require('../config/userData.json');
const { Schema, model } = require('mongoose')

const cc = new Schema({

})

// Definimos nuestro comando
module.exports = {
  name: 'cc',
  alias: ['cuentacorriente', 'cuenta-corriente'],
  description: 'Envía la información de tu cuenta corriente',
  execute(client, message, args) {
    // Obtenemos el ID del usuario que ejecutó el comando
    const userId = message.author.id;

    if (!(userId in userData)) {
      return message.reply("**❌ | No posees una cuenta corriente o tu cuenta corriente fue derogada.\n\nSi crees que es un error, abre un ticket contando tu problema. Por favor, ten paciencia y espera a que te atiendan.\n\n¡Consigue tu cuenta corriente ahora! Recuerda que debes abrir un ticket tomando captura de que compraste tu cuenta corriente.**\n\nhttps://www.roblox.com/catalog/7070817938/Cuenta-Corriente-Personal");
    }

    // Buscamos la información del usuario en la base de datos
    const cuentaCorriente = userData[userId].Cuentacorriente;

    const cuentaCorrienteInfo = new Discord.MessageEmbed()
      .setTitle('[B.E] SYSTEM | Información de cuenta corriente')
      .setThumbnail(client.user.avatarURL())
      .setDescription('A continuación podrás ver la información de tu cuenta corriente registrada.')
      .addField(`Titular:`, `${cuentaCorriente.Titular}`)
      .addField(`Número de cuenta:`, `${cuentaCorriente.Numerodecuenta}`)
      .addField(`Enlace del titular:`, `${cuentaCorriente.Link}`)
      .addField(`Saldo actual:`, `${cuentaCorriente.Saldoactual}`)
      .addField(`Cantidad de préstamos:`, `${cuentaCorriente.Cantidadprestamos}`)
      .addField(`Cuenta de respaldo:`, `${cuentaCorriente.Cuentaderespaldo}`)
      .setFooter('[B.E] SYSTEM programado por MartinLuksic#4859')
      .setColor('#FFD700')
      .setTimestamp();

    message.author.send({ embeds: [cuentaCorrienteInfo] });
    message.reply('**✅ | ¡Mira tu bandeja de DMs!**');
  }
}
