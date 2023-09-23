const wv = require("./config/config.json")
const aoijs = require("aoi.js");

const { Util } = require("aoi.js");
const { setup } = require("aoi.parser")
setup(Util);
const bot = new aoijs.AoiClient({
token: wv.TOKEN,
sharding: true,
shardAmount: 20,
suppressAllErrors: true,
database: {
    db: require("dbdjs.db"),
    type: "dbdjs.db",
    path: "./database/",
    tables: ["main"]},
aoiLog: true,
aoiWarning: true,
guildOnly: false,
disableFunctions: ['$clientToken'],
prefix: "wavi!",
intents: ["MessageContent","Guilds","GuildMessages","GuildMembers","GuildMessageReactions","GuildEmojisAndStickers","DirectMessageTyping","DirectMessageReactions","DirectMessages"],
events: ["onMessage","onInteractionCreate","onFunctionError","onGuildJoin","onGuildLeave"]
})

let encode = "utf8"
const fss = require('fs')
function backup() {
 fss.writeFileSync('./databaseBackup/dbBackup_1m.sql', fss.readFileSync('./database/main/main_scheme_1.sql', {
 encode,
 undefined
 }), 
 {encoding: encode})
 console.log('\n|------------------------------------◉\n')
 console.log('[System] Successfully 30 Minutes Backup Database!')
}
setInterval(backup, 1800000)

let encode1 = "utf8"
const fss1 = require('fs')
function backup1() {
 fss1.writeFileSync('./databaseBackup/dbBackup_1h.sql', fss1.readFileSync('./database/main/main_scheme_1.sql', {
 encode1,
 undefined
 }), 
 {encoding: encode1})
 console.log('\n|------------------------------------◉\n')
 console.log('[System] Successfully 1 Hour Backup Database!')
}
setInterval(backup1, 3600000)

let encode2 = "utf8"
const fss2 = require('fs')
function backup2() {
 fss2.writeFileSync('./databaseBackup/dbBackup_1d.sql', fss2.readFileSync('./database/main/main_scheme_1.sql', {
 encode2,
 undefined
 }), 
 {encoding: encode2})
 console.log('\n|------------------------------------◉\n')
 console.log('[System] Successfully 1 Day Backup Database!')
}
setInterval(backup2, 86400000)

let encode3 = "utf8"
const fss3 = require('fs')
function backup3() {
 fss3.writeFileSync('./databaseBackup/dbBackup_1w.sql', fss3.readFileSync('./database/main/main_scheme_1.sql', {
 encode3,
 undefined
 }), 
 {encoding: encode3})
 console.log('\n|------------------------------------◉\n')
 console.log('[System] Successfully 1 Week Backup Database!\n')
}
setInterval(backup3, 604800000)

//on join logs
bot.guildJoinCommand({ 
channel: "1063242394360889444",
code: `
$color[1;$getVar[color]]
$title[1;Server Join Logs]
$description[1;
> **Server Owner:** $usertag[$ownerID]
> **Owner ID:** $ownerID
> **Name:** $guildName
> **ID:** $guildID
> **Member:** $numberSeparator[$membersCount;,]
> **Channel:** $numberSeparator[$channelCount;,]
> **Created Date:** $creationDate[$guildID;time]︱$creationDate[$guildID;date]

[Server Icon]($guildIcon)
]
$image[1;$guildIcon]
`
})

//on leave logs
bot.guildLeaveCommand({ 
channel: "1063242395749187604",
code: `
$color[1;$getVar[color]]
$title[1;Server Leave Logs]
$description[1;
> **Server Owner:** $usertag[$ownerID]
> **Owner ID:** $ownerID
> **Name:** $guildName
> **ID:** $guildID
> **Member:** $numberSeparator[$membersCount;,]
> **Channel:** $numberSeparator[$channelCount;,]
> **Created Date:** $creationDate[$guildID;time]︱$creationDate[$guildID;date]

[Server Icon]($guildIcon)
]
$image[1;$guildIcon]
`
})

//error log  
 bot.functionErrorCommand({ 
 channel: "1063242400648138772", 
 code: `**💥 New error was found <@$botOwnerID>!** 
 $author[$userTag[$clientID];$userAvatar[$clientID]]
 $title[‼️ Error Occurred in $serverName] 
 $description[>>> 🔎 The error was found in **\`$handleError[command]\`** command!\n\n👾 Suspected encoding errors in **\`$handleError[function]\`** functions\n\n📑 A **\`$handleError[function]\`** malfunction occurred due to :\n$handleError[error]] 
 $color[ff0000] 
 $footer[🗃 Error Log ~ serverID #COLON# $guildID] 
 $addTimestamp` 
})

bot.loopCommand({
$if: "old",
code: `
$suppressErrors[]

$if[$clientID==1079540324466180236]
$editMessage[1084175971667681332;{newEmbed:{color:$getVar[color]}{author:Warung Virtual Status:$userAvatar[$clientID]}{description:
**Informasi Bot:**
> **Nama#COLON#**  $username[$clientID]
> **Release#COLON#**  03/03/2023
> **Prefix#COLON#**  / (slash)
> **Server#COLON#**  $numberSeparator[$guildCount;,]
> **User#COLON#**  $numberSeparator[$allMembersCount;,]
> **Variable#COLON#**  $numberSeparator[$variablesCount;,]
> **Ping#COLON#** $pingms
> **Database#COLON#** $databasePingms
> **Ram#COLON#** $truncate[$ram] MB usage 
  ・**rss#COLON#** $truncate[$ram[rss]] MB 
  ・**heapUsage#COLON#** $truncate[$ram[heapUsed]] MB 
  ・**heapTotal#COLON#** $truncate[$ram[heapTotal]] MB 
  ・**total Ram#COLON#** $truncate[$maxRam] MB
> **Cpu#COLON#** $cpu% usage
> **Uptime#COLON#** $uptime[humanize]
}{footer:Warung Virtual Bot}}{actionRow:{button:Invite:5:https#COLON#//dsc.gg/warungvirtual:false:🔗}{button:Supports:5:https#COLON#//dsc.gg/wavisupports:false:😇}{button:Website:5:https#COLON#//warungvirtual.vercel.app:false:✨}}]

$elseif[$clientID==1004306447196229682]

$endelseif
$else 
$log[[System] Something went wrong in loop status bot commands!]
$endif
`,
channel: "$if[$clientID==1079540324466180236;1081964558165483620;1063242398781689897]",
executeOnStartup: true,
every: 60000 //{footer:Made With ♥️ by Zanixon Development Team}
})

bot.loopCommand({
$if: "old",
code: `
$suppressErrors[]

$if[$clientID==1079540324466180236]
$editMessage[1079550079163183164;{newEmbed:{color:$getVar[color]}{author:$userTag[$clientID] Status:$userAvatar[$clientID]}{description:
Update every **60s**...
**__Bot Biodata:__**
\`\`\`js
Owner#COLON# $userTag[$botOwnerID]
Prefix#COLON# $getVar[prefix]
Username#COLON# $username[$clientID]
ClientID:#COLON# $clientID
Create Date#COLON# $creationDate[$clientID;date]︱$creationDate[$clientID;time]
\`\`\`
**__Bot Statistic Data:__**
\`\`\`js
User#COLON# $numberSeparator[$allMemberscount;,]
Server#COLON# $numberSeparator[$guildCount;,]
Commands#COLON# $numberSeparator[$commandsCount;,]
Ping Latency#COLON# $pingms
DbPing#COLON# $databasePingms
Cpu#COLON# $cpu%
Ram#COLON# $truncate[$ram] MB 
NodeJS#COLON# $nodeVersion
Package#COLON# Aoi.js v$packageVersion
Uptime#COLON# $uptime[humanize]
\`\`\`
**Tanggal:** <t:$truncate[$divide[$dateStamp;1000]]:D> | **Jam:** $hour#COLON#$minute#COLON#$second $timezone[asia/jakarta]WIB 
**Downtime#COLON#** <t:$truncate[$divide[$datestamp;1000]]:R> | 0 = No Down!
}{footer:Made With ♥️ by Zanixon Development Team}}]

$elseif[$clientID==1004306447196229682]
$editMessage[1063773905153699890;{newEmbed:{color:$getVar[color]}{author:$userTag[$clientID] Status:$userAvatar[$clientID]}{description:
Update every **60s**...
**__Bot Biodata:__**
\`\`\`js
Owner#COLON# $userTag[$botOwnerID]
Prefix#COLON# $getVar[prefix]
Username#COLON# $username[$clientID]
ClientID:#COLON# $clientID
Create Date#COLON# $creationDate[$clientID;date]︱$creationDate[$clientID;time]
\`\`\`
**__Bot Statistic Data:__**
\`\`\`js
User#COLON# $numberSeparator[$allMemberscount;,]
Server#COLON# $numberSeparator[$guildCount;,]
Commands#COLON# $numberSeparator[$commandsCount;,]
Ping Latency#COLON# $pingms
DbPing#COLON# $databasePingms
Cpu#COLON# $cpu%
Ram#COLON# $truncate[$ram] MB 
NodeJS#COLON# $nodeVersion
Package#COLON# Aoi.js v$packageVersion
Uptime#COLON# $uptime[humanize]
\`\`\`
**Tanggal:** <t:$truncate[$divide[$dateStamp;1000]]:D> | **Jam:** $hour#COLON#$minute#COLON#$second $timezone[asia/jakarta]WIB 
**Downtime#COLON#** <t:$truncate[$divide[$datestamp;1000]]:R> | 0 = No Down!
}{footer:Made With ♥️ by Zanixon Development Team}}]
$endelseif
$else
$log[[System] Something went wrong in bot info stats!]
$endif
`,
channel: "1063242398781689897",
executeOnStartup: true,
every: 60000 //{footer:Made With ♥️ by Zanixon Development Team}
})

bot.loopCommand({
    code: `
$reboot[index.js]
$setVar[autoreboot;true]
$color[$getVar[calert]]
$author[Automatic Restart System;$userAvatar[$clientID]]
$description[Start restarting bot system, Ram usage has reached **800mb**!]
$footer[$parseDate[$datestamp;date]]

$onlyIf[$truncate[$ram]>=800;]

`,
   channel: "1063242393266180176",
    executeOnStartup: true,
    every: 3600000
})

bot.readyCommand({   
   channel: "1063242393266180176",
   code: `
$setVar[autoreboot;false]
$color[$getVar[color]]
$author[Automatic Restart System;$userAvatar[$clientID]]
$description[Successfully restarted the bot system, Trigger by ***Automatic Restart System***]
$footer[$parseDate[$datestamp;date]]


$onlyIf[$getVar[autoreboot]==true;]
 `
 })

//Handler
const handler = require("./handler/mainhandler.js");
handler.handler_main(bot)

const fs = require('fs');

function handle_custom_funcs(client,folder) {
  console.log("\nLoading Custom Functions");
  console.log("|------------------------------------------|\n")
  
  let files = fs.readdirSync(`./${folder}`).filter(file => file.endsWith('js'))
  if (files.length==0){
    console.log("No Custom Function To Load!")
    console.log("\n|------------------------------------------|\n")
  console.log("Finished Loading Custom Functions\n");
    return;
  }
  files.forEach(x => {
    bot.functionManager.createFunction({
      name: require(`./${folder}/${x}`).name,
      params:require(`./${folder}/${x}`).params,
      type: require(`./${folder}/${x}`).type,
      code: require(`./${folder}/${x}`).code
    })
    console.log("\nWalking in: "+process.cwd()+`/${folder}/${x}`)
    console.log("Loaded custom function: "+require(`./${folder}/${x}`).name)
  });
  console.log("\n|------------------------------------------|\n")
  console.log("Finished Loading Custom Functions\n");

}

handle_custom_funcs(bot,"customFunctions");//bot is aoi.client and folder here is name of folder for eg:

//console log
bot.readyCommand({   
   channel: "",  
   code: ` 
 $log[ 
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹 
╭─────────────────────────────────────────────── 
│ Active On $userTag[$clientID] 
❑─────────────────────────────────────────────── 
│ Owner: $userTag[$botOwnerID] 
│ Team: Zanixon Development  
❑─────────────────────────────────────────────── 
│ Ping: $pingms
│ Cpu: $cpu% 
│ Ram: $truncate[$ram] MB 
│ NodeJS: $nodeVersion 
│ Package: Aoi.js v$packageVersion 
❑─────────────────────────────────────────────── 
│ Uptime Date: $formatDate[$dateStamp] 
│ Clock: $hour:$minute:$second $timezone[asia/jakarta] 
❑─────────────────────────────────────────────── 
│  ©Zanixon Development 
╰───────────────────────────────────────────────  
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹 
 ] 
 `
 })