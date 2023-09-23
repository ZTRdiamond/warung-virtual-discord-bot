module.exports = [{
  name: "menunggu",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `
$if[$getGlobalUserVar[premium;$authorID]==true]
$if[$randomText[1;1;1;1;1;1;1;1;2;2;2;2]==1]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:⭐︱Menunggu Pembeli:$userAvatar[$authorID]}{description:
**$username[$authorID]** menunggu pembeli dan mendapatkan **$numberSeparator[$getGlobalUserVar[pembelidatang;$authorID];,] orang** pembeli dan sekarang di antrian ada **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,] orang**
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[antrian;$sum[$getGlobalUserVar[antrian;$authorID];$getGlobalUserVar[pembelidatang;$authorID]];$authorID]

$globalCooldown[2s;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{description:Tunggu **%time%** untuk menunggu pembeli lagi!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:⭐︱Menunggu Pembeli:$userAvatar[$authorID]}{description:
**$username[$authorID]** menunggu pembeli tetapi tidak satupun pembeli datang untuk saat ini dan sekarang di antrian ada **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,] orang**
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$globalCooldown[2s;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{description:Tunggu **%time%** untuk menunggu pembeli lagi!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$endif

$else
$if[$randomText[2;2;2;2;2;2;2;2;1;1;1;1]==1]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Menunggu Pembeli:$userAvatar[$authorID]}{description:
**$username[$authorID]** menunggu pembeli dan mendapatkan **$numberSeparator[$getGlobalUserVar[pembelidatang;$authorID];,] orang** pembeli dan sekarang di antrian ada **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,] orang**
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[antrian;$sum[$getGlobalUserVar[antrian;$authorID];$getGlobalUserVar[pembelidatang;$authorID]];$authorID]

$globalCooldown[2s;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{description:Tunggu **%time%** untuk menunggu pembeli lagi!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Menunggu Pembeli:$userAvatar[$authorID]}{description:
**$username[$authorID]** menunggu pembeli tetapi tidak satupun pembeli datang untuk saat ini dan sekarang di antrian ada **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,] orang**
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$globalCooldown[2s;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{description:Tunggu **%time%** untuk menunggu pembeli lagi!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endif

$endif

$onlyIf[$getGlobalUserVar[antrian;$authorID]<$getGlobalUserVar[mejakapasitas;$authorID];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Antrian pembelimu sudah mencapai kapasitas maksimal yaitu **$numberSeparator[$getGlobalUserVar[mejakapasitas;$authorID];,] Orang**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "menunggu",
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
$if[$getGlobalUserVar[premium;$authorID]==true]
$if[$randomText[1;1;1;1;1;1;1;1;2;2;2;2]==1]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:⭐︱Menunggu Pembeli:$userAvatar[$authorID]}{description:
**$username[$authorID]** menunggu pembeli dan mendapatkan **$numberSeparator[$getGlobalUserVar[pembelidatang;$authorID];,] orang** pembeli dan sekarang di antrian ada **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,] orang**
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[antrian;$sum[$getGlobalUserVar[antrian;$authorID];$getGlobalUserVar[pembelidatang;$authorID]];$authorID]

$globalCooldown[2s;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{description:Tunggu **%time%** untuk menunggu pembeli lagi!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:⭐︱Menunggu Pembeli:$userAvatar[$authorID]}{description:
**$username[$authorID]** menunggu pembeli tetapi tidak satupun pembeli datang untuk saat ini dan sekarang di antrian ada **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,] orang**
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$globalCooldown[2s;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{description:Tunggu **%time%** untuk menunggu pembeli lagi!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$endif

$else
$if[$randomText[2;2;2;2;2;2;2;2;1;1;1;1]==1]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Menunggu Pembeli:$userAvatar[$authorID]}{description:
**$username[$authorID]** menunggu pembeli dan mendapatkan **$numberSeparator[$getGlobalUserVar[pembelidatang;$authorID];,] orang** pembeli dan sekarang di antrian ada **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,] orang**
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[antrian;$sum[$getGlobalUserVar[antrian;$authorID];$getGlobalUserVar[pembelidatang;$authorID]];$authorID]

$globalCooldown[2s;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{description:Tunggu **%time%** untuk menunggu pembeli lagi!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Menunggu Pembeli:$userAvatar[$authorID]}{description:
**$username[$authorID]** menunggu pembeli tetapi tidak satupun pembeli datang untuk saat ini dan sekarang di antrian ada **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,] orang**
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$globalCooldown[2s;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{description:Tunggu **%time%** untuk menunggu pembeli lagi!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endif

$endif

$onlyIf[$getGlobalUserVar[antrian;$authorID]<$getGlobalUserVar[mejakapasitas;$authorID];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Antrian pembelimu sudah mencapai kapasitas maksimal yaitu **$numberSeparator[$getGlobalUserVar[mejakapasitas;$authorID];,] Orang**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
}]