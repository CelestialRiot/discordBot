const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./package.json');
client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setGame(`on ${client.guilds.size} servers`);
});
client.on('guildCreate', guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});
client.on('guildDelete', guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on('message', async message => {
  if(message.author.bot) return
  const botName = 'celeste';
  if(message.content === botName + ' prefix') {message.channel.send(config.prefix)}
  if(message.content === 'whatismypurpose') {message.channel.send}
  if(message.content.indexOf(config.prefix) !== 0) return

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

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const id = message.author.id;
  const days = ['monday','tuesday','wednesday','thursday','friday'];
  for (var i = 0; i < usr.length; i++) if (usr[i][1] === id) var indx = i
  const name = usr[indx][0];

  if (command === 'help') {
    message.channel.send("**celeste commands:**\n\
      'celeste prefix': gives the bot's prefix\n\
      \n\
      **prefix commands:**\n\
      *utility*\n\
      'check': responds\n\
      'ping': gives server + your ping\n\
      'myid': gives your id number\n\
      \n\
      *speech*\n\
      'say (text)': deletes the command and sends text from bot\n\
      'thank' or 'thanks': replies\n\
      'love': deletes the command and sends (<3)\n\
      \n\
      *timetable*\n\
      '(name) + (day)': gives the person's timetable for that day\n\
      'whatismypurpose': gives the next timetable if available");
  }
  /* utility commands */
  if (command === 'check') {
    if (name === 'yehya') {
      message.channel.send('alive, thanks to you, father');
    }
    else {
      message.channel.send('alive');
    }
  }
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  if (command === 'myid') {
    message.channel.send(name+': '+id);
  }
  /* speech commands */
  if (command === 'say') {
    const text = args.join(' ');
    message.delete().catch(O_o=>{});
    message.channel.send(text);
  }
  if (command === 'thank' || command === 'thanks') {
    message.channel.send("you're welcome :3");
  }
  if (command === 'love') {
    message.delete().catch(O_o=>{});
    message.channel.send("<3");
  }
  /* timetable commands */
  if (command === name) {
    const req = args.join(' ');
    var exit = false;
    for (var i = 0; i < days.length; i++) {
      if (days[i] === req) {
        var day = i;
        message.channel.send(usr[indx][2][day]);
        exit = true;
      }
    }
    if (exit === false) {
      message.channel.send('you pass butter');
    }
  }
  if (command === 'whatismypurpose') {
    const d = new Date();
    var day = d.getDay()-1;
    var hour = d.getHours() + 11;
    const err = 'you pass butter'
    if (hour > 23) {
      hour -= 24;
      day += 1;
    }
    if (hour >= 15 && day < 6) {
      day += 1;
    }
    if (hour >= 15 && day === 7) {
      day = 0;
    }
    if (day > days.length) {
      message.channel.send(err);
    }
    else {
      message.channel.send(err);
    }
    console.log(hour+','+day)
  }
});

client.login(process.env.BOT_TOKEN);
