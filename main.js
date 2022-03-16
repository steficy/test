const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = ('--');

const fs = require('fs');

client.commands = new Discord.Collection ();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Online');
});

client.on('message',message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === 'faq'){
        client.commands.get('faq').execute(message, args, Discord);
    }
    else if(command === 'changelog'){
        client.commands.get('changelog').execute(message,args,Discord);
    }
});


client.login('OTUzMDY0MzQxMzU0MTkyODk2.Yi_IVg.OdvfvH-6luO6rP5F1a7Yk8sKqoM');