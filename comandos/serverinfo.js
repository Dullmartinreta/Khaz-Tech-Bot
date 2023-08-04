const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
const day = require("dayjs")

module.exports = {
    name: "server-info",
    alias: ["serverinfo", "informacion-server", "servidor-info"],
    async execute (client, message, args) {

        const owner = message.guild.fetchOwner()
        const createsv = day(message.guild.createAt).format('DD/MM/YY')

        const info = new Discord.MessageEmbed()
        .setTitle("Información del servidor")
        .setThumbnail(message.guild.iconURL())
        .setColor("GOLD")
        .setFooter(message.member.displayName, message.author.displayAvatarURL ({ dynamic: true }))
        .addFields(
            {name: "Sever's name", value: `${message.guild.name}`, inline: true},
            {name: "Channels::", value: `${message.guild.channels.cache.size}`, inline: true },
            {name: "Owner:", value: `${await message.guild.fetchOwner()}`, inline: true},
            {name: "Members:", value: `${message.guild.memberCount}`, inline: true},
            {name: "Roles:", value: `${message.guild.roles.cache.size}`, inline: true},
            {name: "Server's ID", value: `${message.guild.id}`, inline: true},
            {name: "Date of creation:", value: `<t:1691102940>`, inline: true},
            {name: "Emojis:", value: `${message.guild.emojis.cache.size}`, inline: true},
            {name: "Boost:", value: `${message.guild.premiumSubscriptionCount.toString()}`, inline: true},
        )

        message.reply({ embeds: [info]})
        

    }
}