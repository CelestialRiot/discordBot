const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./package.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setGame(`on ${client.guilds.size} servers`);
});
client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});
client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("message", async message => {

  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "check") {
    const who = message.author.id;
    if (who === '364940154927972353') {
      message.channel.send("alive, thanks to you, daddy");
    }
    else {
      message.channel.send("alive");
    }
  };

  if (command === "ineedit") {
    const who = message.author.id;
    message.channel.send(who);
  };

  if (command === "thank" || command === "thanks") {
    message.channel.send("you're welcome :3");
  };

  if (command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  };

  if (command === "kill") {
    const who = message.author.id;
    if (who === '364940154927972353') {
      message.channel.send("</3");
    }
    else {
      message.channel.send("but love is the way </3");
    };
  };

  if (command === "iloveyoutoo") {
    message.channel.send("<3");
  };

  if (command === "sorry") {
    message.channel.send("learn to forgive");
  }

  if (command === "whatismypurpose") {
    const d = new Date();
    const days = d.getDay();
    const hour = d.getHours();
    if (hour >= 15 && days < 7) {
      day = days + 1;
    };
    if (hour >= 15 && days === 7) {
      day = 1;
    };

    const who = message.author.id;
    /*    YEHYA A.    364940154927972353    */
    /*    DORVAN J.    246558516553187328    */
    /*    BRYAN G.    360035848902934538    */

    if (day === '1') {
      if (who === '364940154927972353') {
        message.channel.send("REL/MM3/ENG/ENG/SP1"); //yehya
      };
      if (who === '246558516553187328') {
        message.channel.send("VSC/ENG/REL/REL/CMP"); //dorvan
      };
      if (who === '360035848902934538') {
        message.channel.send("VSC/REL/ENG/ENG/CMP"); //bryan
      };
    }
    else if (day === '2') {
      if (who === '364940154927972353') {
        message.channel.send("REL/REL/PHS/PHS/CHM"); //yehya
      };
      if (who === '246558516553187328') {
        message.channel.send("VSC/VSC/VET/VET/GMA"); //dorvan
      };
      if (who === '360035848902934538') {
        message.channel.send("VSC/VSC/PHS/PHS/GMA"); //bryan
      };
    }
    else if (day === '3') {
      if (who === '364940154927972353') {
        message.channel.send("SP1/SP1/PHS/CHM/REL"); //yehya
      };
      if (who === '246558516553187328') {
        message.channel.send("CMP/CMP/VET/GMA/VSC"); //dorvan
      };
      if (who === '360035848902934538') {
        message.channel.send("CMP/CMP/PHS/GMA/VSC"); //bryan
      };
    }
    else if (day === '4') {
      if (who === '364940154927972353') {
        message.channel.send("SP1/ENG/MM3/CHM/CHM"); //yehya
      };
      if (who === '246558516553187328') {
        message.channel.send("CMP/REL/ENG/GMA/GMA"); //dorvan
      };
      if (who === '360035848902934538') {
        message.channel.send("CMP/ENG/REL/GMA/GMA"); //bryan
      };
    }
    else if (day === '5') {
      if (who === '364940154927972353') {
        message.channel.send("MM3/MM3/ASS/ENG/PHS"); //yehya
      };
      if (who === '246558516553187328') {
        message.channel.send("ENG/ENG/ASS/REL/VET"); //dorvan
      };
      if (who === '360035848902934538') {
        message.channel.send("REL/REL/ASS/ENG/PHS"); //bryan
      };
    }
    else {
      message.channel.send("you pass butter")
    };
  };


//////////////

  /*  YEHYA A.  */
  if (command === "yehya_monday") {
    message.channel.send("REL/MM3/ENG/ENG/SP1");
  };
  if (command === "yehya_tuesday") {
    message.channel.send("REL/REL/PHS/PHS/CHM");
  };
  if (command === "yehya_wednesday") {
    message.channel.send("SP1/SP1/PHS/CHM/REL");
  };
  if (command === "yehya_thurday") {
    message.channel.send("SP1/ENG/MM3/CHM/CHM");
  };
  if (command === "yehya_friday") {
    message.channel.send("MM3/MM3/ASS/ENG/PHS");
  };

  /*  GEORGE A. */
  if (command === "joji_monday") {
    message.channel.send("REl/ENG/BSM/BM1/CMP");
  };
  if (command === "joji_tuesday") {
    message.channel.send("REL/REL/PHS/PHS/GMA");
  };
  if (command === "joji_wednesday") {
    message.channel.send("CMP/CMP/PHS/GMA/REL");
  };
  if (command === "joji_thurday") {
    message.channel.send("CMP/BSM/ENG/GMA/GMA");
  };
  if (command === "joji_friday") {
    message.channel.send("ENG/ENG/ASS/BMA/PHS");
  };

  /*  ZEIN W. */
  if (command === "zeus_monday") {
    message.channel.send("HLT/REL/ENG/ENG/CMP");
  };
  if (command === "zeus_tuesday") {
    message.channel.send("HLT/HLT/PHS/PHS/GMA");
  };
  if (command === "zeus_wednesday") {
    message.channel.send("CMP/CMP/PHS/GMA/HLT");
  };
  if (command === "zeus_thurday") {
    message.channel.send("CMP/ENG/REL/GMA/GMA");
  };
  if (command === "zeus_friday") {
    message.channel.send("REL/REL/ASS/ENG/PHS");
  };

  /*  BRYAN G.  */
  if (command === "bryan_monday") {
    message.channel.send("VSC/REL/ENG/ENG/CMP");
  };
  if (command === "bryan_tuesday") {
    message.channel.send("VSC/VSC/PHS/PHS/GMA");
  };
  if (command === "bryan_wednesday") {
    message.channel.send("CMP/CMP/PHS/GMA/VSC");
  };
  if (command === "bryan_thurday") {
    message.channel.send("CMP/ENG/REL/GMA/GMA");
  };
  if (command === "bryan_friday") {
    message.channel.send("REL/REL/ASS/ENG/PHS");
  };

  /*  HASSAN M. */
  if (command === "huss_monday") {
    message.channel.send("VSC/REL/ENG/ENG/CMP");
  };
  if (command === "bryan_tuesday") {
    message.channel.send("VSC/VSC/PHS/PHS/GMA");
  };
  if (command === "bryan_wednesday") {
    message.channel.send("CMP/CMP/PHS/GMA/VSC");
  };
  if (command === "bryan_thurday") {
    message.channel.send("CMP/ENG/REL/GMA/GMA");
  };
  if (command === "bryan_friday") {
    message.channel.send("REL/REL/ASS/ENG/PHS");
  };

  /*  JAQUIE S. */
  if (command === "jaq_monday") {
    message.channel.send("LIT/MM1/REL/REL/LGL");
  };
  if (command === "jaq_tuesday") {
    message.channel.send("LIT/LIT/BIO/BIO/PSY");
  };
  if (command === "jaq_wednesday") {
    message.channel.send("LGL/LGL/BIO/PSY/LIT");
  };
  if (command === "jaq_thurday") {
    message.channel.send("LGL/REL/MM1/PSY/PSY");
  };
  if (command === "jaq_friday") {
    message.channel.send("MM1/MM1/ASS/REL/BIO");
  };

  /*  DROVAN J. */
  if (command === "dov_monday") {
    message.channel.send("VSC/ENG/REL/REL/CMP");
  };
  if (command === "dov_tuesday") {
    message.channel.send("VSC/VSC/VET/VET/GMA");
  };
  if (command === "dov_wednesday") {
    message.channel.send("CMP/CMP/VET/GMA/VSC");
  };
  if (command === "dov_thurday") {
    message.channel.send("CMP/REL/ENG/GMA/GMA");
  };
  if (command === "dov_friday") {
    message.channel.send("ENG/ENG/ASS/REL/VET");
  };

  /*  ANTHONY G. */
  if (command === "anth_monday") {
    message.channel.send("REL/MM3/ENG/ENG/CMP");
  };
  if (command === "anth_tuesday") {
    message.channel.send("REL/REL/PHS/PHS/CHM");
  };
  if (command === "anth_wednesday") {
    message.channel.send("CMP/CMP/PHS/CHM/REL");
  };
  if (command === "anth_thurday") {
    message.channel.send("CMP/ENG/MM3/CHM/CHM");
  };
  if (command === "anth_friday") {
    message.channel.send("MM3/MM3/ASS/ENG/PHS");
  };

  /*  PETER M. */
  if (command === "pete_monday") {
    message.channel.send("VSC/ENG/REL/REL/CMP");
  };
  if (command === "pete_tuesday") {
    message.channel.send("VSC/VSC/PHS/PHS/GMA");
  };
  if (command === "pete_wednesday") {
    message.channel.send("CMP/CMP/PHS/GMA/VSC");
  };
  if (command === "pete_thurday") {
    message.channel.send("CMP/REL/ENG/GMA/GMA");
  };
  if (command === "pete_friday") {
    message.channel.send("ENG/ENG/ASS/REL/PHS");
  };

});

client.login(process.env.BOT_TOKEN);
