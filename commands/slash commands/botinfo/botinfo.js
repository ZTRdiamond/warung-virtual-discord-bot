module.exports = [{
  name: "botinfo",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Bot Statistic And Information:$userAvatar[$clientID]}{description:
**__Bot Information__**
\`\`\`js
◉ Owner#COLON# $usertag[$botOwnerID]
◉ Prefix#COLON# / 
◉ Bot Version#COLON# v$getVar[botversion]
◉ Username#COLON# $username[$clientID]
◉ ClientID#COLON# $clientID
◉ Create Date#COLON# $creationDate[$clientID;time-humanize]
\`\`\`
**__Bot Statistic__**
\`\`\`js
◉ Uptime#COLON# $uptime[humanize]
◉ Ram#COLON# $truncate[$ram] MB usage 
  ・rss#COLON# $truncate[$ram[rss]] MB 
  ・heapUsage#COLON# $truncate[$ram[heapUsed]] MB 
  ・heapTotal#COLON# $truncate[$ram[heapTotal]] MB 
  ・total Ram#COLON# $truncate[$maxRam] MB
◉ Cpu#COLON# $cpu% usage
◉ Ping#COLON# $pingms
◉ DbPing#COLON# $databasePingms
◉ User#COLON# $numberSeparator[$allMembersCount;,]
◉ Server#COLON# $numberSeparator[$guildCount;,]
◉ Node Version#COLON# $nodeVersion
◉ Package: Aoi.js v$packageVersion
\`\`\`
}{footer:Made By Zanixon Development Team}};;;all;true]
`
}]