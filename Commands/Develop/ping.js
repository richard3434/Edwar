const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "ping",
    permissions: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({content: "PONG!"})
    }
}