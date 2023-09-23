module.exports = [{
  name: "istirahat",
  type: "interaction",
  prototype: "slash",
  code: `
$setGlobalUserVar[stamina;1000;$authorID]
$setGlobalUserVar[harijualan;$sum[$getGlobalUserVar[harijualan;$authorID];1];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Istirahat:$userAvatar[$authorID]}{description:
Kamu beristirahat untuk mengembalikan stamina mu yang hilang dan kini setelah istirahat staminamu telah kembali pulih menjadi **100%** lagi. Selamat bermain kembali!
}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu:no}};;all;false]

$onlyIf[$getGlobalUserVar[stamina;$authorID]<=99;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak bisa terlalu sering istirahat, Istirahatlah ketika stamina mu sudah dibawah **10%**!}}{actionRow:{button:Jualan:3:jual-u1:no}{button:Kembali:2:warung:no}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "istirahat",
  type: "interaction",
  prototype: "button",
  code: `
$setGlobalUserVar[stamina;1000;$authorID]
$setGlobalUserVar[harijualan;$sum[$getGlobalUserVar[harijualan;$authorID];1];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Istirahat:$userAvatar[$authorID]}{description:
Kamu beristirahat untuk mengembalikan stamina mu yang hilang dan kini setelah istirahat staminamu telah kembali pulih menjadi **100%** lagi. Selamat bermain kembali!
}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu:no}};;all;true]

$onlyIf[$getGlobalUserVar[stamina;$authorID]<=99;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak bisa terlalu sering istirahat, Istirahatlah ketika stamina mu sudah dibawah **10%**!}}{actionRow:{button:Jualan:3:jual-u1:no}{button:Kembali:2:warung:no}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
}]