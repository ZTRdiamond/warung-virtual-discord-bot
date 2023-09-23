module.exports = [{
  name: "start",
  type: "interaction",
  prototype: "slash",
  $if: "v4",
  code: `
$interactionModal[Start Playing;start;{actionRow:{textInput:Nama Warung:1:namawarung:Warung Makan Berkah:yes::1:100}}]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==false;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak bisa melakukan **/start** lagi karena akun kamu telah terdaftar di bot, Silahkan klik tombol dibawah.}}{actionRow:{button:Warung:3:warung:no}{button:Profile:3:profile:no}{button:Menu:2:menu:no}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "start",
  type: "interaction",
  prototype: "modal",
  code: `

$setGlobalUserVar[startbot;true;$authorID]
$setGlobalUserVar[namawarung;$textInputValue[namawarung];$authorID]

$interactionReply[;{newEmbed:{color:$getVar[color]}{author:$userTag[$authorID] Start}{description:
$getVar[checkmark]︱Berhasil mendata akun kedalam database bot, Sekarang kamu telah bisa memainkan bot ini.

Nama warungmu adalah **$textInputValue[namawarung]**, Kamu selalu bisa mengubah nama warungmu kapan saja dengan menggunakan **/pengaturan**
}};{actionRow:{button:Guide:3:guide:no}{button:Warung:3:warung:no}{button:Pengaturan:3:pengaturan:no}};;all;yes]
`
}]