module.exports = [{
  name: "djseval",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionModal[Eval Code;djseval;{actionRow:{textInput:Input code:2:djscode:Masukan kode disini:yes::1:4000}}]

$onlyIf[$getGlobalUserVar[op;$authorID]==true;{newEmbed:{color:$getVar[cerror]}{description:$getVar[xmark]︱Command ini hanya bisa digunakan oleh orang tertentu saja!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "djseval",
  type: "interaction",
  prototype: "modal",
  code: `
$eval[$textInputValue[djscode];no]
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Eval Djs Code:$userAvatar[$clientID]}{description:
  **__The code#COLON#__**
  \`\`\`js
  $textInputValue[djscode]
  \`\`\`
}};;;all;true]
`
}]