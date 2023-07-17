const path = require('path');
const getAllfiles = './getAllfiles'

module.exports = (exceptions = []) => {
    let localCommands = [];

    const commandCategories = getAllfiles(path.join(__dirname, '..', 'commands'), true);

    for (const commandCategory of commandCategories) {
        const commandFiles = getAllfiles(commandCategory);

        if (exceptions.includes(commandObject.name)) {
            continue;
        }

        for (const commandFile of commandFiles) {
            const commandObject = require(commandFile);
            localCommands.push(commandObject);
        }
    }

    return localCommands;
};