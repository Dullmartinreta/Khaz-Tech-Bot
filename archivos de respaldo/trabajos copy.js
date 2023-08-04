const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "jobs",
  alias: ["works", "work"],
  async execute (client, message, args) {

    const start = new Discord.MessageEmbed()
    .setTitle("[B.E] SYSTEM | TRABAJOS DISPONIBLES")
    .setAuthor(client.user.username, client.user.avatarURL(), "https://discord.gg/am7DSe4A4Q")
    .setDescription ("**¿Buscas empleo en nuestra banco?\n¿Te gustaría ayudar a nuestra comunidad\n¿Quieres ser un trabajador de [CL] Banco Estado?**")
    .addField("Actualmente hay", "`7` Trabajos disponibles", false)
    .addField("❔ | ¿Cómo puedo postular?", "Para poder postular debes abrir ticket y rellenas el formato el cual esta en el canal correspondiente. Luego de eso se le hará una inspección a su user, perfil y ID para verificar si no está afiliado a ninguna persona vetada del banco. Después de esa inspección se le realizará una entrevista por VC (Voice Chanel), en donde se le preguntarán cosas correspondiente a el Área que quiera postular. Después de ese proceso debe esperar a que el encargado de su admisión lo autorice.")
    .addField("⭐ | ¡Pues es tu día de suerte [CL] Banco Estado busca funcionarios!", "Nuestro banco cuenta con muchas áreas de trabajo, en dónde tú puedes elegir el empleo que más te acomode. Entre los empleos que puedes seleccionar hay:")
    .setThumbnail(client.user.avatarURL())
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("GOLD")
    .setTimestamp()

    const row = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
        .setCustomId('Select')
        .setPlaceholder('Selecciona una categoria')
        .addOptions([
            {
                label: 'Departamento de edición y publicidad',
                description: 'Editores de logos, Editores de ropa y Editor de Publicidad',
                value: 'DEP',
                emoji: '🎨'

            },
            {
                label: 'Servicio de Asuntos Públicos',
                description: 'Consultor de Experiencia a Cliente',
                value: 'SAP',
                emoji: '👪'

            },
            {
                label: 'Área ejecutiva',
                description: 'Ejecutivo y Supervisor',
                value: 'AE',
                emoji: '💼'

            },
            {
                label: 'Departamento de Asuntos Externos',
                description: 'Funcionario',
                value: 'DAE',
                emoji: '🏙'

            },
            {
                label: 'Departamento de Seguridad',
                description: 'Seguridad Administrativa, Seguridad de Pasillo',
                value: 'DS',
                emoji: '👮‍♂️'

            },
            {
                label: 'Departamento de Asesoría Legal Bancaria & Pública',
                description: 'Abogado',
                value: 'DALBP',
                emoji: '🤵'

            },
        ])
    )

   message.reply({ embeds: [start], components: [row]}).then(async(m) => {

    const collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id });
    collector.on("collect", async(i) => {
        if(i.values[0] === "DEP"){
            i.update({ embeds: [depembed]})
        }
        if(i.values[0] === "SAP"){
            i.update({ embeds: [sapembed]})
        }
        if(i.values[0] === "AE"){
            i.update({ embeds: [aembed]})
        }
        if(i.values[0] === "DAE"){
            i.update({ embeds: [daeembed]})
        }
        if(i.values[0] === "DS"){
            i.update({ embeds: [dsembed]})
        }
        if(i.values[0] === "DALBP"){
            i.update({ embeds: [dalbpembed]})
        }
        
    })
    const depembed = new Discord.MessageEmbed()
    .setTitle("Departamento de edición y publicidad")
    .setDescription("Este Departamento tiene como función principal la creación de fotos y videos publicitarios, logos y producto bancario.")
    .addField("Gerente", "lemonty#9816")
    .addField("Trabajos disponibles:", "Editores de logos, Editores de ropa y Editor de Publicidad.")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("#FFD700")
    .setTimestamp()

    const sapembed = new Discord.MessageEmbed()
    .setTitle("Servicio de Asuntos Públicos")
    .setDescription("La función que cumple este Servicio es la creación de encuestas, redacción de noticias y velar por la buena estancia de los Clientes.")
    .addField("Gerente", "N/A")
    .addField("Trabajos disponibles:", "Consultor de experienca a cliente.")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("#FFD700")
    .setTimestamp()

    const aembed = new Discord.MessageEmbed()
    .setTitle("Área Ejecutiva")
    .setDescription("Esta Área es una de las más importantes para nuestra institución. Esta Área es la encargada de contactar y notificar a los clientes o funcionarios bancarios que se le requiera entregar alguna información, aviso, comunicado, estancia, etc. Junto con ser la primera línea en contacto con clientes por temas bancarios.")
    .addField("Gerente", "N/A")
    .addField("Trabajos disponibles:", "Ejecutivo y supervisor.")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("#FFD700")
    .setTimestamp()

    const daeembed = new Discord.MessageEmbed()
    .setTitle("Departamento de Asuntos Externos")
    .setDescription("El Departamento de Asuntos Externos o Servicio de Relaciones Exteriores es el Área encargada de la creación de convenios o relaciones económicas que requiera el Banco. Tiene una función similar a la de un Ministerio del Exterior.")
    .addField("Gerente", "N/A")
    .addField("Trabajos disponibles:", "Funcionario")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("#FFD700")
    .setTimestamp()

    const dsembed = new Discord.MessageEmbed()
    .setTitle("Departamento de Seguridad")
    .setDescription("La seguridad de banco es dividida en 2 áreas, el área administrativa y el área de pasillo, las cuales se definirán a continuación.")
    .addField("Gerente", "N/A")
    .addField("Trabajos disponibles:", "Seguridad administrativa y seguridad de pasillo.")
    .addField("Seguridad administrativa:", "El área administrativa es la encargada de mantener el orden y la seguridad interna dentro de la base de datos, servidores o centros de comunicación. Su labor es la investigación de ingresos, facturaciones, funcionarios y sus labores, entre otros temas.")
    .addField("Seguridad de pasillo:", "El área de pasillo es la encargada de la fuerza física y táctica. Esta área es desplegada en mapas para la seguridad de sucursales, personal bancario, clientes o patrimonio.")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("#FFD700")
    .setTimestamp()

    const dalbpembed = new Discord.MessageEmbed()
    .setTitle("Departamento de Asesoría Legal Bancaria & Pública")
    .setDescription(" El Nuevo Departamento de Asesoría Legal tiene como función darles la posibilidad a los clientes o funcionarios bancarios con temas de petición, asesoramiento, sanción o apelación de algún caso o tema específico. Todo Cliente podría solicitar un abogado o asesor legal para sus trámites normativos bancarios.")
    .addField("Gerente", "N/A")
    .addField("Trabajos disponibles:", "Abogado")
    .setFooter("[B.E] SYSTEM programado por MartinLuksic#4859")
    .setColor("#FFD700")
    .setTimestamp()
   })

  }

}
