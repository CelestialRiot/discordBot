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
client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel;
  let oldUserChannel = oldMember.voiceChannel;
  var channel = client.channels.get('385344314362036224');
  if(oldUserChannel === undefined && newUserChannel !== undefined) {
    channel.sendMessage((newMember.username + ' string').replace(' string','').replace('@','').replace('<','').replace('>',''));
  } else if(newUserChannel === undefined){
    channel.sendMessage(oldMember + ' has left a voice channel');
  }
});
client.on('message', async message => {
  if(message.author.bot) return
  const botName = 'celeste';
  if(message.content === botName) {message.channel.send(config.prefix)}
  if(message.content.indexOf(config.prefix) !== 0) return

// all of users' data
// usr[0] gives a user's details (user 0), change '0' to change user
// user[0][0] gives user 0's name
// user[0][1] gives user 0's id number
// user[0][2] gives user 0's entire timetable
// user[0][2][0] gives user 0's monday timetable, from monday[0] to friday[4]
const usr =
  [
    /*  YEHYA A. 0 */
    ['yehya','364940154927972353',
      [
        'MMS/MMS/ENG/SPM/CHM',
        'ENG/ENG/CHM/MMS/PHS',
        'PHS/PHS/SPM/MMS/REL',
        'CAR/REL/PHS/SPM/SPM',
        'REL/REL/CHM/CHM/ENG',
      ],
    ],
    /*  ANTHONY G. 1  */
    ['anthony','246547506056527873',
      [
        'MMS/MMS/ENG/ICT/CHM',
        'ENG/ENG/CHM/MMS/PHS',
        'PHS/PHS/ICT/MMS/REL',
        'ASS/REL/PHS/ICT/ICT',
        'REL/REL/CHM/CHM/ENG',
      ],
    ],
    /*  BRYAN G. 2  */
    ['bryan','360035848902934538',
      [
        'maybe if you submit it i could tell you',
      ],
    ],
    /*  GEORGE A. 3 */
    ['george','245588462797848576',
      [
        'ENG/ENG/BSM/ICT/GMA',
        'BSM/BSM/GMA/ENG/PHS',
        'PHS/PHS/ICT/ENG/REL',
        'ASS/REL/PHS/ICT/ICT',
        'REL/REL/GMA/GMA/BSM',
      ],
    ],
    /*  ZAIN W. 4  */
    ['zain','378463394451161090',
      [
        'REL/REL/ENG/ICT/GMA',
        'ENG/ENG/GMA/REL/PHS',
        'PHS/PHS/ICT/REL/HLT',
        'CAR/HLT/PHS/ICT/ICT',
        'HLT/HLT/GMA/GMA/ENG',
      ],
    ],
    /*  PETER M. 5  */
    ['peter','245794606208253952',
      [
        'ENG/ENG/REL/CMP/GMA',
        'REL/REL/GMA/ENG/PHS',
        'PHS/PHS/CMP/ENG/VSC',
        'ASS/VSC/PHS/CMP/CMP',
        'VSC/VSC/GMA/GMA/REL',
      ],
    ],
    /*  HASSAN M. 6 */
    ['hassan','358438947032006657',
      [
        'maybe if you give it to me first id know',
      ],
    ],
    /*  OLIVER S. 7 */
    ['oliver','311756864897417217',
      [
        'should submit it, oli. maybe that way id know',
      ],
    ],
  ];

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const id = message.author.id;
  const days = ['monday','tuesday','wednesday','thursday','friday'];
  for (var i = 0; i < usr.length; i++) if (usr[i][1] === id) var indx = i
  var name = usr[indx][0];

  if (command === 'help') {
    message.author.send("\
**celeste commands:**\n\
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
'timetable': gives the timetable for the whole week\n\
'(name) + (day)': gives the person's timetable for that day\n\
'whatismypurpose': gives the next timetable if available\
");
  }

  /* utility commands */
  if (command === 'check') {
    if (name === 'yehya') {
      message.channel.send('Alive. Thanks to you, Father.');
    }
    else {
      message.channel.send('alive');
    }
  }
  if(command === 'ping') {
    const m = await message.channel.send('Ping?');
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
  if (command === 'my') {
    const text = args.join(' ');
    if (text === 'playlist') {
      message.channel.send('https://www.youtube.com/playlist?list=LLcn33uTRP_A5AHD4Zcv2jYQ');
    }
  }
  if (command === 'bless') {
    message.delete().catch(O_o=>{});
    message.channel.send('bless you!');
  }
  /* timetable commands */
  var inn = indx
  for (var i = 0; i < usr.length && name != command; i++) {
    if (usr[i][0] === command){
      name = command;
      inn = i;
    }
  }
  if (command === name) {
    const req = args.join(' ').toLowerCase();
    var exit = false;
    for (var i = 0; i < days.length; i++) {
      if (days[i] === req) {
        var day = i;
        message.channel.send(usr[inn][2][day]);
        exit = true;
      }
    }
    if (exit === false) {
      message.channel.send('nope');
    }
  }
  if (command === 'timetable') {
    message.channel.send(
'*Monday:* \n'+'`'+usr[indx][2][0]+'`\n'+
'*Tuesday:* \n'+'`'+usr[indx][2][1]+'`\n'+
'*Wednesday:* \n'+'`'+usr[indx][2][2]+'`\n'+
'*Thursday:* \n'+'`'+usr[indx][2][3]+'`\n'+
'*Friday:* \n'+'`'+usr[indx][2][4]+'`\n'
    );
  }
  if (command === 'whatismypurpose') {
    const d = new Date();
    var day = d.getDay();
    const hour = d.getHours();
    const err = 'you pass butter';
    if(day > days.length) day = 0
    if(day > days.length) message.channel.send(err)
    else if(usr[indx][1] === id) {
      var txt = usr[indx][2][day];
      message.channel.send(txt);
    }
    else {
      message.channel.send(err);
    }
  }
});

client.login(process.env.BOT_TOKEN);
