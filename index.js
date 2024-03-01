const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log("Ready!");
});

client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.channel.send("Pong!");
  }
});

client.login(token);
