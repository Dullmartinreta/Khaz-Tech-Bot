const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help",
  alias: ["ayuda"],
  async execute (client, message, args) {

    const start = new Discord.MessageEmbed()
    .setTitle("KHAZ TECH SUPPORT | HELP MENU")
    .setAuthor(client.user.username, client.user.avatarURL(), "https://discord.gg/NStNN7fMQg")
    .setDescription ("Select an option")
    .addField("I have:", "`5` Commands", false)
    .addField("Prefix", "kh!")
    .addField("CEO", "<@979705771086471228>")
    .addField("Founder's assistant", "<@788525483414913084>")
    .addField("Tech Manager", "<@843948478614077480>")
    .setThumbnail(client.user.avatarURL())
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("RANDOM")
    .setTimestamp()

    const row = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
        .setCustomId('Select')
        .setPlaceholder('Select an option')
        .addOptions([
            {
                label: 'Bot Info',
                description: 'Displays Khaz Tech Support Info',
                value: 'botinfo',
                emoji: '🤖'

            },
            {
                label: 'Tech Info',
                description: 'Displays the Tech general info',
                value: 'info',
                emoji: '🏦'

            },
            {
                label: 'Commands',
                description: 'Displays commands info',
                value: 'cmd',
                emoji: '🔢'

            },
            {
                label: 'Jobs available',
                description: 'Displays the jobs avaible for more info, please use kh!jobs',
                value: 'work',
                emoji: '💼'

            },
        ])
    )

   message.reply({ embeds: [start], components: [row]}).then(async(m) => {

    const collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id });
    collector.on("collect", async(i) => {
        if(i.values[0] === "botinfo"){
            i.update({ embeds: [biembed]})
        }
        if(i.values[0] === "info"){
            i.update({ embeds: [iembed]})
        }
        if(i.values[0] === "cmd"){
            i.update({ embeds: [cmdembed]})
        }
        if(i.values[0] === "work"){
            i.update({ embeds: [wembed]})
        }
    })
    const biembed = new Discord.MessageEmbed()
    .setTitle("Bot Info")
    .setDescription("Khaz Tech Support is a bot programmed by <@843948478614077480> and `Khaz Devs`\n\nKhaz Tech Support has the function of providing assistance, automating the server, and enhancing its overall appearance.\n\nKhaz Tech Support is programmed in `JavaScript` and developed using `Visual Studio Code`, although sometimes it is hosted on Replit.\n\nMore commands are planned to be added in the future.")
    .addField("Commands aviable:", "`5`", false)
    .addField("Prefix:", "kt!")
    .addField("Programmed with:", "JavaScript")
    .addField("Date of creation:", "<t:1691102940>")
    .addField("Bot type:", "Support")
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("BLACK")
    .setTimestamp()

    const iembed = new Discord.MessageEmbed()
    .setTitle("Tech Info")
    .setDescription("Here you will find general information about our Tech.")
    .addField("Fundado:", "<t:1621533180:R> (Additional details on hover.)")
    .addField("▬▬▬▬▬▬▬▬▬▬ Consejo Ejecutivo ▬▬▬▬▬▬▬▬▬▬", " ")
    .addField("Executive Council.", "<@979705771086471228>")
    .addField("Founder's assistant", "<@788525483414913084>")
    .addField("Tech Manager:", "<@843948478614077480>")
    .addField("Head Developer:", "<@591463228505194516>")
    .addField("Head Marketing Officer", "<@813397548638142514>")
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("BLACK")
    .setTimestamp()

    const cmdembed = new Discord.MessageEmbed()
    .setTitle("Commands Aviable")
    .setDescription("Main command list, more info with kt!cmd")
    .addField("kt!help", "Help menu")
    .addField("kt!cmd", "Displays a **public** commands list")
    .addField("kt!info", "Displays the offical discord a roblox group of Khaz Tech™")
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("BLACK")
    .setTimestamp()

    const wembed = new Discord.MessageEmbed()
    .setTitle("Jobs")
    .setDescription("Info moved to kt!jobs!")
    .setFooter("Khaz Tech Support programmed by dullmartinreta")
    .setColor("BLACK")
    .setTimestamp()
   })

  }

}
