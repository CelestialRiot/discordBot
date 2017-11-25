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

// all of users' data
// usr[0] gives a user's details (user 0), change '0' to change user
// user[0][0] gives user 0's name
// user[0][1] gives user 0's id number
// user[0][2] gives user 0's entire timetable
// user[0][2][0] gives user 0's monday timetable, from monday[0] to friday[4]
//0=yehya 1=dorvan 2=anthony 3=bryan 4=george 5=zein 6=jackie 7=peter 8=hassan 9=oliver
const usr =
  [
    /*  YEHYA A. 0 */
    ['yehya','364940154927972353',
      [
        'REL/MM3/ENG/ENG/SPM',
        'REL/REL/PHS/PHS/CHM',
        'SPM/SPM/PHS/CHM/REL',
        'SPM/ENG/MM3/CHM/CHM',
        'MM3/MM3/ASS/ENG/PHS',
      ],
    ],
    /*  DORVAN J. 1 */
    ['dorvan','246558516553187328',
      [
        'VSC/ENG/REL/REL/CMP',
        'VSC/VSC/VET/VET/GMA',
        'CMP/CMP/VET/GMA/VSC',
        'CMP/REL/ENG/GMA/GMA',
        'ENG/ENG/ASS/REL/VET',
      ],
    ],
    /*  ANTHONY G. 2  */
    ['anthony','246547506056527873',
      [
        'REL/MM3/ENG/ENG/CMP',
        'REL/REL/PHS/PHS/CHM',
        'CMP/CMP/PHS/CHM/REL',
        'CMP/ENG/MM3/CHM/CHM',
        'MM3/MM3/ASS/ENG/PHS',
      ],
    ],
    /*  BRYAN G. 3  */
    ['bryan','360035848902934538',
      [
        'VSC/REL/ENG/ENG/CMP',
        'VSC/VSC/PHS/PHS/GMA',
        'CMP/CMP/PHS/GMA/VSC',
        'CMP/ENG/REL/GMA/GMA',
        'REL/REL/ASS/ENG/PHS',
      ],
    ],
    /*  GEORGE A. 4 */
    ['george','245588462797848576',
      [
        'REl/ENG/BSM/BSM/CMP',
        'REL/REL/PHS/PHS/GMA',
        'CMP/CMP/PHS/GMA/REL',
        'CMP/BSM/ENG/GMA/GMA',
        'ENG/ENG/ASS/BSM/PHS',
      ],
    ],
    /*  ZEIN W. 5 */
    ['zein','378463394451161090',
      [
        'HLT/REL/ENG/ENG/CMP',
        'HLT/HLT/PHS/PHS/GMA',
        'CMP/CMP/PHS/GMA/HLT',
        'CMP/ENG/REL/GMA/GMA',
        'REL/REL/ASS/ENG/PHS',
      ],
    ],
    /*  JACKIE S. 6 */
    ['jackie',['150425470255628289'],
      [
        'LIT/MM1/REL/REL/LGL',
        'LIT/LIT/BIO/BIO/PSY',
        'LGL/LGL/BIO/PSY/LIT',
        'LGL/REL/MM1/PSY/PSY',
        'MM1/MM1/ASS/REL/BIO',
      ],
    ],
    /*  PETER M. 7  */
    ['peter','245794606208253952',
      [
        'VSC/ENG/REL/REL/CMP',
        'VSC/VSC/PHS/PHS/GMA',
        'CMP/CMP/PHS/GMA/VSC',
        'CMP/REL/ENG/GMA/GMA',
        'ENG/ENG/ASS/REL/PHS',
      ],
    ],
    /*  HASSAN M. 8 */
    ['hassan','358438947032006657',
      [
        'REL/MM3/ENG/ENG/SPM',
        'REL/REL/BIO/BIO/CHM',
        'SPM/SPM/BIO/CHM/REL',
        'SPM/ENG/MM3/CHM/CHM',
        'MM3/MM3/ASS/ENG/BIO',
      ],
    ],
    /*  OLIVER S. 9 */
    ['oliver','311756864897417217',
      [
        'LIT/MM1/ENG/ENG/REL',
        'LIT/LIT/PHS/PHS/BSM',
        'REL/REL/PHS/BSM/LIT',
        'REL/ENG/MM1/BSM/BSM',
        'MM1/MM1/ASS/ENG/PHS',
      ],
    ],
  ];

  const days = ['monday','tuesday','wednesday','thursday','friday'];
  const id = message.author.id;
  for (var i = 0; i < usr.length; i++) if (usr[i][1] === id) const indx = i
  const name = usr[indx][0];

  /* utility commands */
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  };
  if (command === "myid") {
    message.channel.send(name+': '+id);
  };
  if (command === "check") {
    const id = message.author.id;
    if (name === 'yehya') {
      message.channel.send("alive, thanks to you, father");
    }
    else {
      message.channel.send("alive");
    };
  };
  /* misc commands */
  if (command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  };
  /* timetable commands */
  if (command === name) {
   const req = args.join(" ");
    for (var i = 0; i < days.length; i++) {
      if (days[i] === req) {
				const day = i;
				message.channel.send(usr[indx][2][day]);
			}
			else {
				message.channel.send("give your name and a day only")
			};
		};
  };

client.login(process.env.BOT_TOKEN);
