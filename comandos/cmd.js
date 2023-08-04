const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "cmd",
  alias: ["comandos", "commands"],
  async execute (client, message, args) {

    const start = new Discord.MessageEmbed()
    .setTitle("Khaz Tech Support Commands Menu")
    .setAuthor(client.user.username, client.user.avatarURL(), "https://discord.gg/NStNN7fMQg")
    .setDescription('Select the option you need.\n\nIt is worth noting that the "Legacy prefix" commands work with the prefix, while the "Application commands," also known as "Slash Commands," work using the "/" symbol.\n\nThe "Name" of the command is the primary trigger for it, and the "Alias" is its alternate trigger. In other words, using either the name or the alias will execute the command in the same way."')
    .addField("I have", "6` Commands", false)
    .addField("Prefix", "kt!")
    .addField("Commands programmed by:", "<@843948478614077480>")
    .setThumbnail(client.user.avatarURL())
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("RANDOM")
    .setTimestamp()

    const row = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
        .setCustomId('Select')
        .setPlaceholder('Select an option.')
        .addOptions([
            {
                label: 'Avatar',
                description: 'Displays info about kt!avatar',
                value: 'avcmd',
                emoji: '👨'

            },
            {
                label: 'Cmd',
                description: 'Displays info about kt!cmd',
                value: 'cmdinfo',
                emoji: '🤖'

            },
            {
                label: 'Info',
                description: 'Displays info about kt!info',
                value: 'infocmd',
                emoji: '🏦'

            },
            {
                label: 'Help',
                description: 'Displays info about kt!help',
                value: 'helpcmd',
                emoji: '🤝'
            },
            {
                label: 'Server info',
                description: 'Displays info about kt!serverinfo',
                value: 'svicmd',
                emoji: '🏢'
            },
            {
                label: 'Jobs',
                description: 'Displays info about kt!jobs',
                value: 'work',
                emoji: '💼'
            },
            {
                label: 'Ping (Pong!)',
                description: 'Displays info about /ping',
                value: 'pingcmd',
                emoji: '🏓'
            }
        ])
    )

   message.reply({ embeds: [start], components: [row]}).then(async(m) => {

    const collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id });
    collector.on("collect", async(i) => {
        if(i.values[0] === "avcmd"){
            i.update({ embeds: [avembed]})
        }
        if(i.values[0] === "cmdinfo"){
            i.update({ embeds: [cmdembed]})
        }
        if(i.values[0] === "infocmd"){
            i.update({ embeds: [infoembed]})
        }
        if(i.values[0] === "helpcmd"){
            i.update({ embeds: [helpembed]})
        }
        if(i.values[0] === "svicmd"){
            i.update({ embeds: [sviembed]})
        }
        if(i.values[0] === "work"){
            i.update({ embeds: [wembed]})
        }
        if(i.values[0] === "pingcmd"){
            i.update({ embeds: [pingembed]})
        }
    })
    const avembed = new Discord.MessageEmbed()
    .setTitle("Avatar")
    .setDescription("Displays your avatar!")
    .addField("Name:", "avatar")
    .addField("Alias:", "pfp, fotodeperfil, fdp, av")
    .addField("Command type:", "Legacy prefix")
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("RANDOM")
    .setTimestamp()

    const cmdembed = new Discord.MessageEmbed()
    .setTitle("Cmd")
    .setDescription("Displays a complete list of **public** commands.")
    .addField("Name:", "cmd")
    .addField("Alias:", "comandos, commands")
    .addField("Command type:", "Legacy prefix")
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("RANDOM")
    .setTimestamp()

    const infoembed = new Discord.MessageEmbed()
    .setTitle("Info")
    .setDescription("Displays official links of **Khaz Tech™.**")
    .addField("Name:", "info")
    .addField("Alias:", "información")
    .addField("Command type:", "Legacy prefix")
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("RANDOM")
    .setTimestamp()

    const helpembed = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Display a list with information about **Khaz Tech™** and **Khaz Tech Support**")
    .addField("Name:", "help")
    .addField("Alias:", "ayuda")
    .addField("Command type:", "Legacy prefix")
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("RANDOM")
    .setTimestamp()

    const sviembed = new Discord.MessageEmbed()
    .setTitle("Server info")
    .setDescription("A list with current information about the Discord server is displayed.")
    .addField("Name:", "server-info")
    .addField("Alias:", "serverinfo, informacion-server, servidor-info")
    .addField("Command type:", "Legacy prefix")
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("RANDOM")
    .setTimestamp()

    const wembed = new Discord.MessageEmbed()
    .setTitle("Jobs")
    .setDescription("Here is a list of available commands for applying. Remember to open a ticket and follow the appropriate format to apply..\n\nWe look forward to receiving your application!")
    .addField("Name:", "Jobs")
    .addField("Alias:", "work, works")
    .addField("Command type:", "Legacy prefix")
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("RANDOM")
    .setTimestamp()

    const pingembed = new Discord.MessageEmbed()
    .setTitle("Ping (Pong!)")
    .setDescription("El bot muestra cuanto se demoró en responder (en ms)")
    .addField("Name:", "Ping")
    .addField("Alias:", "N/A")
    .addField("Command type:", "Application command/Slash command")
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("RANDOM")
    .setTimestamp()
   })

  }

}
