module.exports = [{
  name: "pengaturan-menu",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionModal[Ganti Nama Warung;ganti-nama-wr;{actionRow:{textInput:Masukan Nama#COLON#:1:nama:Masukan nama warung disini:yes::1:100}}]

$onlyIf[$interactionData[values[0]]==ganti-nama-wr;]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "ganti-nama-wr",
  type: "interaction",
  prototype: "modal",
  code: `
$setGlobalUserVar[namawarung;$textInputValue[nama];$authorID]
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Ganti Nama Warung:$userAvatar[$authorID]}{description:
$getVar[checkmark]︱Berhasil mengganti nama warungmu menjadi **$textInputValue[nama]**!
}};;;all;true]
`
}]