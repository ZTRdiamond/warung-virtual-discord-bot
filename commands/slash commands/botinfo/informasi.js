module.exports = [{
  name: "informasi",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Informasi Bot:$userAvatar[$clientID]}{description:
**Informasi:**
> **Nama:** $username[$clientID]
> **Developer:** $usertag[$botOwnerID]
> **Create Date:** 10/02/2023
> **User:** $numberSeparator[$allMembersCount;,]
> **Server:** $numberSeparator[$guildCount;,]
> **Shard:** $shardId/20
}};;;all;true]
`
},{
  name: "informasi",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:03fff7}{author:Informasi Bot:$userAvatar[$clientID]}{description:
**Informasi:**
> **Nama:** $username[$clientID]
> **Developer:** $usertag[$botOwnerID]
> **Create Date:** 10/02/2023
> **User:** $numberSeparator[$allMembersCount;,]
> **Server:** $numberSeparator[$guildCount;,]
> **Shard:** $shardId/20
}};{actionRow:{button:Warung:3:warung:no}{button:Kembali:2:menu:no}};;all;false]
`
}]