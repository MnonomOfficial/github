const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'Bans someone.',
    options: [
        {
            name: 'target',
            description: 'The user to ban.',
            required: true,
            type: ApplicationCommandOptionType.Mentionable,

        },
        {
            name: 'reason',
            description: 'The reason for banning.',
            type: ApplicationCommandOptionType.String,
        }
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply("you got banned lol!!!!11!!!")
    }
}