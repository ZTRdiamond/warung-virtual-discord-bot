module.exports = [{
  type: "interaction",
  prototype: "button",
  code: `
$setGlobalUserVar[wvexp;0;$authorID]

$setGlobalUserVar[wvreqexp;$get[reqexp];$authorID]
$let[reqexp;$math[$getGlobalUserVar[wvlevel;$authorID]*520*1.25]]

$setGlobalUserVar[wvlevel;$sum[$getGlobalUserVar[wvlevel;$authorID];1];$authorID]

$sendMessage[{newEmbed:{color:$getGlobalUserVar[color]}{author:$username[$authorID] Level Up!:$userAvatar[$authorID]}{description:
$getVar[checkmark]︱Berhasil naik level, **Level $getGlobalUserVar[wvlevel;$authorID]** -> **Level $math[$getGlobalUserVar[wvlevel;$authorID]+1]**
}{footer:$username[$clientID]}{timestamp}}{options:{ephemeral:true}}{extraOptions:{interaction:true}};false]

$onlyIf[$getGlobalUserVar[wvexp;$authorID]>=$getGlobalUserVar[wvreqexp;$authorID];]
`
}]