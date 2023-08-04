const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "say",
    alias: ["decir"],
    execute (client, message, args) {
        // Comprobamos si el usuario tiene el rol con el ID correspondiente
        const role = message.guild.roles.cache.get('869574690463686698');
        if (!role || !message.member.roles.cache.has(role.id)) {
            return message.reply("**❌ | No tienes permiso para usar este comando.**");
        }
        
        // Si el usuario tiene el rol, continuamos con la ejecución del comando
        const escribe = args.slice(0).join(' ');
        if (!escribe) return message.channel.send("**❌| No especificaste un mensaje para decir**");
        
        message.delete();
        message.channel.send(escribe);
    }
}