module.exports = [{
  name: "saran",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionModal[Kotak Saran;saran;{actionRow:{textInput:Masukan Saran Disini:2:isisaran:Ketik disini:yes::1:4000}}]
`
},{
  name: "saran",
  type: "interaction",
  prototype: "modal",
  code: `
$channelSendMessage[$getVar[saranchannel];{newEmbed:{color:$getVar[color]}{author:$usertag[$authorID] Memberikan Saran:$userAvatar[$authorID]}{description:
**ID:** $authorID
**Isi Saran:**
>>> \`\`\`
$textInputValue[isisaran]
\`\`\`
}{footer:Kotak Saran}{timestamp}};no]

$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Kotak Saran:$userAvatar[$clientID]}{description:
Semua saranmu telah berhasil dikirimkan kepada pihak developer kami dan akan dibaca nanti, Terima kasih telah memberikan kami saran.
}};;;all;true]
`
}]