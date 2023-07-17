require('dotenv').config();

const {readdirSync} = require('fs');
const { Client, IntentsBitField, EmbedBuilder, Collection } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
const prefix = "!"

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

eventHandler(client);

client.login(process.env.TOKEN);