module.exports = ({
name: "ping",
type: "interaction",
prototype: "slash",
code: `$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Bot Ping:$userAvatar[$clientID]}{description:
**🏓Ping:** \`$ping\`ms
**🟢Database:** \`$databasePing\`ms}};;;all;true]
`
})
