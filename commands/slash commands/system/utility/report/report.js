module.exports = [{
  name: "report",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionModal[Laporkan Sesuatu;report;{actionRow:{textInput:Masukan Laporan Disini:2:isilaporan:Ketik disini:yes::1:4000}}]
`
},{
  name: "report",
  type: "interaction",
  prototype: "modal",
  code: `
$channelSendMessage[$getVar[reportchannel];{newEmbed:{color:$getVar[color]}{author:$usertag[$authorID] Memberikan Laporan:$userAvatar[$authorID]}{description:
**ID:** $authorID
**Isi Laporan:**
>>> \`\`\`
$textInputValue[isilaporan]
\`\`\`
}{footer:Laporan}{timestamp}};no]

$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Pesan Laporan:$userAvatar[$clientID]}{description:
Semua laporanmu telah berhasil dikirimkan kepada pihak developer kami dan akan dibaca nanti, Terima kasih telah memberikan kami laporan.
}};;;all;true]
`
}]