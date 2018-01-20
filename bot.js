const Discord = require("discord.js");
const Settings = require("./setting.json");
const prefix = Settings.prefix;

var bot = new Discord.Client();

bot.on('guildMemberAdd', member => {
  if (member.guild.id === '384420942010515466') {
    member.setNickname(`??${member.user.username}`)
    member.addRole('384420942010515466', 'Joined in the 90\'s')
  }
    member.guild.channels.get('353436192353681411').send('**' + member.user.username + '**, Has Joined!')

});

bot.on("guildMemberRemove", member => {
    member.guild.channels.get('353436192353681411').send(`**${member.user.username}** BYEBYE My friend!`)
});


bot.on("ready", function() {
  console.log('Ready in the 90\'s');
  //status
 bot.user.setStatus('Game');
 //streaming
 bot.user.setGame("-Commands");
 //setGame
 bot.user.setGame("-Commands", "https://twitch.tv/SaharGx");
});


bot.on("message", function(message) {
  if (message.author.equals(bot.user));

  if (!message.content.startsWith(Settings.prefix)) return;

  var args = message.content.substring(Settings.prefix.length).split(" "); //commands!

  switch (args[0]) {
    //seny
    case "סני":
        message.reply("ילד רע")
        break;
    //info
    case "SRinfo":
    const embed = new Discord.RichEmbed()
      .setTitle("ServerInfo!")
      .setAuthor("ServerInfo!", bot.users.get('238349889497464832').avatarURL)
      .setColor(0xFF00CA)
      .setDescription("This is Server info!.")
      .setFooter("The Bot Created by @Twins", message.guild.iconURL)
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp(message.guild.createdAt)
      .setURL("https://www.xxx.com")
      .addField("This server!", "They can also be inline.", true)
      .addBlankField(true)
      .addField("Bot Created By!", "<@238349889497464832>", true);

      message.channel.send({embed});
         break;
    //invite
    case "invitefriends":
         message.channel.send({embed:{
           title: "InviteYourFriends!",
           description: "תזמינו חברים לשרת יהיה כיף https://discord.gg/JqE9Paq",
           color: 0xFF00CA // colooorrrrrrrrrrrrrrrrr
         }});
         break;
    //CD(commands)
    case "CM":
        message.channel.send({embed:{
          title: 'CM',
          description: '-info \n -סני \n -invitefriends',
          color: 0xF900FF // this is the color
        }});
        break;

    default:
         message.channel.send('No No No my friend')
        break;
  }

  let man = message.guild.users.get(message.author.id.toString())
man.send("הודעה")
});

bot.login(Settings.token);
