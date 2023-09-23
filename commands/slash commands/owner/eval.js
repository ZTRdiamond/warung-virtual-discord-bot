module.exports = [{
  name: "eval",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionModal[Eval Code;eval;{actionRow:{textInput:Input Code:2:code:Masukan kode disini:yes::1:4000}}]

$onlyIf[$getGlobalUserVar[op;$authorID]==true;{newEmbed:{color:$getVar[cerror]}{description:$getVar[xmark]︱Command ini hanya bisa digunakan oleh orang tertentu saja!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "eval",
  type: "interaction",
  prototype: "modal",
  code: `
$eval[$textInputValue[code];no]
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Eval Aoi.js Code:$userAvatar[$clientID]}{description:
  **__The code#COLON#__**
  \`\`\`js
  $textInputValue[code]
  \`\`\`
}};;;all;true]
`
}]