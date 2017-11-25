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

  if (command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  };

  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  if (command === "check") {
    const who = message.author.id;
    if (who === '364940154927972353') {
      message.channel.send("alive, thanks to you, father");
    }
    else {
      message.channel.send("alive");
    }
  };

  if (command === "givemeyourid") {
    const who = message.author.id;
    message.channel.send(who);
  };

  if (command === "thank" || command === "thanks") {
    message.channel.send("you're welcome :3");
  };

  if (command === "iloveyoutoo") {
    message.channel.send("<3");
  };

  if (command === "sorry") {
    message.channel.send("learn to forgive");
  }

  if (command === "whatismypurpose") {

    const who = message.author.id;
    /*    YEHYA A.    364940154927972353    */
    /*    DORVAN J.    246558516553187328    */
    /*    BRYAN G.    360035848902934538    */

    const d = new Date();
    const days = d.getDay();
    const hours = d.getHours();
    const hour = hours + 11;
    const day = days;
    message.channel.send(hours+','+hour,+','+days+','+day);
    if (hour > 23) {
      hour = 0;
      day = days + 1;
    };
    if (hour >= 15 && day < 7) {
      day = days + 1;
    };
    if (hour >= 15 && day === 7) {
      day = 1;
    };

    message.channel.send(hours+','+hour,+','+day+',');

    if (day === 1) {
      if (who === '364940154927972353') {
        message.channel.send("REL/MM3/ENG/ENG/SPM"); //yehya
      };
      if (who === '246558516553187328') {
        message.channel.send("VSC/ENG/REL/REL/CMP"); //dorvan
      };
      if (who === '360035848902934538') {
        message.channel.send("VSC/REL/ENG/ENG/CMP"); //bryan
      };
    }
    else if (day === 2) {
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
    else if (day === 3) {
      if (who === '364940154927972353') {
        message.channel.send("SPM/SPM/PHS/CHM/REL"); //yehya
      };
      if (who === '246558516553187328') {
        message.channel.send("CMP/CMP/VET/GMA/VSC"); //dorvan
      };
      if (who === '360035848902934538') {
        message.channel.send("CMP/CMP/PHS/GMA/VSC"); //bryan
      };
    }
    else if (day === 4) {
      if (who === '364940154927972353') {
        message.channel.send("SPM/ENG/MM3/CHM/CHM"); //yehya
      };
      if (who === '246558516553187328') {
        message.channel.send("CMP/REL/ENG/GMA/GMA"); //dorvan
      };
      if (who === '360035848902934538') {
        message.channel.send("CMP/ENG/REL/GMA/GMA"); //bryan
      };
    }
    else if (day === 5) {
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
      message.channel.send("you pass butter");
    };
  };

//////////////

  /*  YEHYA A.  */
  if (command === "yehya") {
    const day = args.join(" ");
    if (day === "monday") {
      message.channel.send("REL/MM3/ENG/ENG/SPM");
    }
    else if (day === "tuesday") {
      message.channel.send("REL/REL/PHS/PHS/CHM");
    }
    else if (day === "wednesday") {
      message.channel.send("SPM/SPM/PHS/CHM/REL");
    }
    else if (day === "thursday") {
      message.channel.send("SPM/ENG/MM3/CHM/CHM");
    }
    else if (day === "friday") {
      message.channel.send("MM3/MM3/ASS/ENG/PHS");
    }
    else {
      message.channel.send("give your name and a day (eg. rob tuesday)")
    };
  };

  /*  GEORGE A. */
  if (command === "joji") {
    const day = args.join(" ");
    if (day === "monday") {
      message.channel.send("REl/ENG/BSM/BM1/CMP");
    }
    else if (day === "tuesday") {
      message.channel.send("REL/REL/PHS/PHS/GMA");
    }
    else if (day === "wednesday") {
      message.channel.send("CMP/CMP/PHS/GMA/REL");
    }
    else if (day === "thursday") {
      message.channel.send("CMP/BSM/ENG/GMA/GMA");
    }
    else if (day === "friday") {
      message.channel.send("ENG/ENG/ASS/BMA/PHS");
    }
    else {
      message.channel.send("give your name and a day (eg. rob tuesday)")
    };
  };

  /*  ZEIN W. */
  if (command === "zeus") {
    const day = args.join(" ");
    if (day === "monday") {
      message.channel.send("HLT/REL/ENG/ENG/CMP");
    }
    else if (day === "tuesday") {
      message.channel.send("HLT/HLT/PHS/PHS/GMA");
    }
    else if (day === "wednesday") {
      message.channel.send("CMP/CMP/PHS/GMA/HLT");
    }
    else if (day === "thursday") {
      message.channel.send("CMP/ENG/REL/GMA/GMA");
    }
    else if (day === "friday") {
      message.channel.send("REL/REL/ASS/ENG/PHS");
    }
    else {
      message.channel.send("give your name and a day (eg. rob tuesday)")
    };
  };

  /*  BRYAN G.  */
  if (command === "bryan") {
    const day = args.join(" ");
    if (day === "monday") {
    message.channel.send("VSC/REL/ENG/ENG/CMP");
    }
    else if (day === "tuesday") {
      message.channel.send("VSC/VSC/PHS/PHS/GMA");
    }
    else if (day === "wednesday") {
      message.channel.send("CMP/CMP/PHS/GMA/VSC");
    }
    else if (day === "thursday") {
      message.channel.send("CMP/ENG/REL/GMA/GMA");
    }
    else if (day === "friday") {
      message.channel.send("REL/REL/ASS/ENG/PHS");
    }
    else {
      message.channel.send("give your name and a day (eg. rob tuesday)")
    };
  };

  /*  HASSAN M. */
  if (command === "huss") {
    const day = args.join(" ");
    if (day === "monday") {
      message.channel.send("REL/MM3/ENG/ENG/SPM");
    }
    else if (day === "tuesday") {
      message.channel.send("REL/REL/BIO/BIO/CHM");
    }
    else if (day === "wednesday") {
      message.channel.send("SPM/SPM/BIO/CHM/REL");
    }
    else if (day === "thursday") {
      message.channel.send("SPM/ENG/MM3/CHM/CHM");
    }
    else if (day === "friday") {
      message.channel.send("MM3/MM3/ASS/ENG/BIO");
    }
    else {
      message.channel.send("give your name and a day (eg. rob tuesday)")
    };
  };

  /*  JAQUIE S. */
  if (command === "jaq") {
    const day = args.join(" ");
    if (day === "monday") {
      message.channel.send("LIT/MM1/REL/REL/LGL");
    }
    else if (day === "tuesday") {
      message.channel.send("LIT/LIT/BIO/BIO/PSY");
    }
    else if (day === "wednesday") {
      message.channel.send("LGL/LGL/BIO/PSY/LIT");
    }
    else if (day === "thursday") {
      message.channel.send("LGL/REL/MM1/PSY/PSY");
    }
    else if (day === "friday") {
      message.channel.send("MM1/MM1/ASS/REL/BIO");
    }
    else {
      message.channel.send("give your name and a day (eg. rob tuesday)")
    };
  };

  /*  DROVAN J. */
  if (command === "dov") {
    const day = args.join(" ");
    if (day === "monday") {
      message.channel.send("VSC/ENG/REL/REL/CMP");
    }
    else if (day === "tuesday") {
      message.channel.send("VSC/VSC/VET/VET/GMA");
    }
    else if (day === "wednesday") {
      message.channel.send("CMP/CMP/VET/GMA/VSC");
    }
    else if (day === "thursday") {
      message.channel.send("CMP/REL/ENG/GMA/GMA");
    }
    else if (day === "friday") {
      message.channel.send("ENG/ENG/ASS/REL/VET");
    }
    else {
      message.channel.send("give your name and a day (eg. rob tuesday)")
    };
  };

  /*  ANTHONY G. */
  if (command === "anth") {
    const day = args.join(" ");
    if (day === "monday") {
      message.channel.send("REL/MM3/ENG/ENG/CMP");
    }
    else if (day === "tuesday") {
      message.channel.send("REL/REL/PHS/PHS/CHM");
    }
    else if (day === "wednesday") {
      message.channel.send("CMP/CMP/PHS/CHM/REL");
    }
    else if (day === "thursday") {
      message.channel.send("CMP/ENG/MM3/CHM/CHM");
    }
    else if (day === "friday") {
      message.channel.send("MM3/MM3/ASS/ENG/PHS");
    }
    else {
      message.channel.send("give your name and a day (eg. rob tuesday)")
    };
  };

  /*  PETER M. */
  if (command === "peter") {
    const day = args.join(" ");
    if (day === "monday") {
      message.channel.send("VSC/ENG/REL/REL/CMP");
    }
    else if (day === "tuesday") {
      message.channel.send("VSC/VSC/PHS/PHS/GMA");
    }
    else if (day === "wednesday") {
      message.channel.send("CMP/CMP/PHS/GMA/VSC");
    }
    else if (day === "thursday") {
      message.channel.send("CMP/REL/ENG/GMA/GMA");
    }
    else if (day === "friday") {
      message.channel.send("ENG/ENG/ASS/REL/PHS");
    }
    else {
      message.channel.send("give your name and a day (eg. rob tuesday)")
    };
  };

});

client.login(process.env.BOT_TOKEN);
