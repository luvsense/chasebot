const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', message => {
    if (message.content === 'ping') {
        message.channel.send('Pong!');
    }
});

client.login('MTIwMjIzMzA3OTQ5NDYxMDk1NA.GsYCjW.9Vhfb-WjosZ9wKlZGFesucwBmKugXADHsRrq74');
