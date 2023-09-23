module.exports = [{
  name: "funfact",
  type: "interaction",
  prototype: "slash",
  code: `
$setGlobalUserVar[funfactopen;1;$authorID]

$onlyIf[$getGlobalUserVar[funfactopen;$authorID]>=6;]

$setGlobalUserVar[funfactopen;$sum[$getGlobalUserVar[funfactopen;$authorID];1];$authorID]

$interactionReply[;{newEmbed:{color:$getVar[color]}{author:$username[$clientID] Funfact:$userAvatar[$clientID]}{description:
*"$getVar[funfact$getGlobalUserVar[funfactopen;$authorID]]"*
}{footer:Request by $usertag[$authorID] | Halaman $getGlobalUserVar[funfactopen;$authorID]/5}};;;all;true]
`
}]