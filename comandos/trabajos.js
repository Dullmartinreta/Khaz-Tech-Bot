const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "jobs",
  alias: ["works", "work"],
  async execute (client, message, args) {

    const embed = new Discord.MessageEmbed()
        .setTitle('Coming soon!')
        .setDescription("Very soon")

        message.channel.send({ embeds: [embed] })

  }
}
