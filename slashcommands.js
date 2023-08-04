const fs = require("fs")
const Discord = require("discord.js")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { clientId, guild } = require("./config/config.json")
const commands = []
const slashcommandsFiles = fs.readdirSync("./slashcmd").filter(file => file.endsWith("js"))
const { token } = require('./config/config.json');
const colors = require('colors');

for(const file of slashcommandsFiles){
    const slash = require(`./slashcmd/${file}`)
    commands.push(slash.data.toJSON())
}

const rest = new REST({ version: "9" }).setToken(token)

createSlash()

async function createSlash(){
    try{
        await rest.put(
            Routes.applicationCommands(clientId), {
                body: commands
            }
        )
        console.log(`
        ╔═════════════════════════════════════════════════════════╗
        ║                                                         ║
        ║              KHAZ TECH SUPPORT AGREGÓ LOS               ║
        ║               SLASHCOMMANDS CORRECTAMENTE               ║
        ║             LISTO PARA EJECUTAR "INDEX.JS"              ║
        ║                                                         ║
        ╚═════════════════════════════════════════════════════════╝
        `.yellow)
    } catch(e) {
        console.error(e)
    }
}