module.exports = [{
  name: "warung",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Warung $getGlobalUserVar[namawarung;$authorID]:$userAvatar[$authorID]}{description:
*__Hari ke $get[hari] berjualan__*

**Info Player#COLON#**
> **Stamina:** $get[stamina]
> **Level#COLON#** $get[level]

**Info Warung#COLON#**
> **Nama#COLON#** $getGlobalUserVar[namawarung;$authorID]
> **Uang#COLON#** Rp.$get[uang]
> **Antrian#COLON#** $get[antrian]
> **Resep Dikuasai#COLON#** $get[resep] resep

**Menu Siap Dijual#COLON#** $get[menusiap]
**Booster#COLON#**
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Inventory:3:inventory-sayur:no}{button:Menu:2:menu:no}};;all;false]

$let[antrian;$numberSeparator[$getGlobalUserVar[antrian;$authorID];,] pembeli]
$let[stamina;$truncate[$math[100*$getGlobalUserVar[stamina;$authorID]/$getGlobalUserVar[staminamax;$authorID]]]%]
$let[hari;$numberSeparator[$getGlobalUserVar[harijualan;$authorID];,]]
$let[uang;$numberSeparator[$getGlobalUserVar[uangrp;$authorID];,]]
$let[reputasi;$abbreviate[$getGlobalUserVar[reputasi;$authorID];1]]
$let[level;**$numberSeparator[$getGlobalUserVar[wvlevel;$authorID];,]** - ($numberSeparator[$getGlobalUserVar[wvexp;$authorID];,]/$numberSeparator[$getGlobalUserVar[wvreqexp;$authorID];,]・$truncate[$math[100*$getGlobalUserVar[wvexp;$authorID]/$getGlobalUserVar[wvreqexp;$authorID]]]%)]
$let[resep;$numberSeparator[$getGlobalUserVar[resepdikuasai;$authorID];,]]
$let[pembeli;$numberSeparator[$getGlobalUserVar[pembeli;$authorID];,]]
$let[langganan;$numberSeparator[$getGlobalUserVar[langganan;$authorID];,]]
$let[menusiap;$replaceText[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;\n> **$getVar[sayurasemnama]:** $numberSeparator[$getGlobalUserVar[sayurasemjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;\n> **$getVar[sayurkacangpanjangnama]:** $numberSeparator[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;\n> **$getVar[sayurlabusiamnama]:** $numberSeparator[$getGlobalUserVar[sayurlabusiamjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;\n> **$getVar[sayurkangkungnama]:** $numberSeparator[$getGlobalUserVar[sayurkangkungjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;\n> **$getVar[sayurbuncisnama]:** $numberSeparator[$getGlobalUserVar[sayurbuncisjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;\n> **$getVar[sayurorektempenama]:** $numberSeparator[$getGlobalUserVar[sayurorektempejadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;\n> **$getVar[sayurtahunama]:** $numberSeparator[$getGlobalUserVar[sayurtahujadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;\n> **$getVar[sayursawihijaunama]:** $numberSeparator[$getGlobalUserVar[sayursawihijaujadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;\n> **$getVar[sayursawiputihnama]:** $numberSeparator[$getGlobalUserVar[sayursawiputihjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;\n> **$getVar[sayurtogenama]:** $numberSeparator[$getGlobalUserVar[sayurtogejadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;\n> **$getVar[sayurjamurnama]:** $numberSeparator[$getGlobalUserVar[sayurjamurjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;\n> **$getVar[sayurtimunnama]:** $numberSeparator[$getGlobalUserVar[sayurtimunjadi;$authorID];,];1];false;;4000];false;\n> ◉--==──==--◉\n;1]]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`

//$replaceText[$checkCondition[$getGlobalUserVar[$change$jadi;$authorID]>=1];true;> **$getVar[$change$nama]:** $numberSeparator[$getGlobalUserVar[$change$jadi;$authorID];,]\n;1]
},{
  name: "warung",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Warung $getGlobalUserVar[namawarung;$authorID]:$userAvatar[$authorID]}{description:
*__Hari ke $get[hari] berjualan__*

**Info Player#COLON#**
> **Stamina#COLON#** $get[stamina]
> **Level#COLON#** $get[level]

**Info Warung#COLON#**
> **Nama#COLON#** $getGlobalUserVar[namawarung;$authorID]
> **Uang#COLON#** Rp.$get[uang]
> **Antrian#COLON#** $get[antrian]
> **Resep Dikuasai#COLON#** $get[resep] resep

**Menu Siap Dijual#COLON#** $get[menusiap]
**Booster#COLON#**
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Inventory:3:inventory-sayur:no}{button:Menu:2:menu:no}};;all;false]

$let[antrian;$numberSeparator[$getGlobalUserVar[antrian;$authorID];,] pembeli]
$let[stamina;$truncate[$math[100*$getGlobalUserVar[stamina;$authorID]/$getGlobalUserVar[staminamax;$authorID]]]%]
$let[hari;$numberSeparator[$getGlobalUserVar[harijualan;$authorID];,]]
$let[uang;$numberSeparator[$getGlobalUserVar[uangrp;$authorID];,]]
$let[reputasi;$abbreviate[$getGlobalUserVar[reputasi;$authorID];1]]
$let[level;**$numberSeparator[$getGlobalUserVar[wvlevel;$authorID];,]** - ($numberSeparator[$getGlobalUserVar[wvexp;$authorID];,]/$numberSeparator[$getGlobalUserVar[wvreqexp;$authorID];,]・$truncate[$math[100*$getGlobalUserVar[wvexp;$authorID]/$getGlobalUserVar[wvreqexp;$authorID]]]%)]
$let[resep;$numberSeparator[$getGlobalUserVar[resepdikuasai;$authorID];,]]
$let[pembeli;$numberSeparator[$getGlobalUserVar[pembeli;$authorID];,]]
$let[langganan;$numberSeparator[$getGlobalUserVar[langganan;$authorID];,]]
$let[menusiap;$replaceText[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;\n> **$getVar[sayurasemnama]:** $numberSeparator[$getGlobalUserVar[sayurasemjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;\n> **$getVar[sayurkacangpanjangnama]:** $numberSeparator[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;\n> **$getVar[sayurlabusiamnama]:** $numberSeparator[$getGlobalUserVar[sayurlabusiamjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;\n> **$getVar[sayurkangkungnama]:** $numberSeparator[$getGlobalUserVar[sayurkangkungjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;\n> **$getVar[sayurbuncisnama]:** $numberSeparator[$getGlobalUserVar[sayurbuncisjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;\n> **$getVar[sayurorektempenama]:** $numberSeparator[$getGlobalUserVar[sayurorektempejadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;\n> **$getVar[sayurtahunama]:** $numberSeparator[$getGlobalUserVar[sayurtahujadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;\n> **$getVar[sayursawihijaunama]:** $numberSeparator[$getGlobalUserVar[sayursawihijaujadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;\n> **$getVar[sayursawiputihnama]:** $numberSeparator[$getGlobalUserVar[sayursawiputihjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;\n> **$getVar[sayurtogenama]:** $numberSeparator[$getGlobalUserVar[sayurtogejadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;\n> **$getVar[sayurjamurnama]:** $numberSeparator[$getGlobalUserVar[sayurjamurjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;\n> **$getVar[sayurtimunnama]:** $numberSeparator[$getGlobalUserVar[sayurtimunjadi;$authorID];,];1];false;;4000];false;\n> ◉--==──==--◉\n;1]]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`

//$replaceText[$checkCondition[$getGlobalUserVar[$change$jadi;$authorID]>=1];true;> **$getVar[$change$nama]:** $numberSeparator[$getGlobalUserVar[$change$jadi;$authorID];,]\n;1]
},{
  name: "menu",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Warung $getGlobalUserVar[namawarung;$authorID]:$userAvatar[$authorID]}{description:
*__Hari ke $get[hari] berjualan__*

**Info Player#COLON#**
> **Stamina#COLON#** $get[stamina]
> **Level#COLON#** $get[level]

**Info Warung#COLON#**
> **Nama#COLON#** $getGlobalUserVar[namawarung;$authorID]
> **Uang#COLON#** Rp.$get[uang]
> **Antrian#COLON#** $get[antrian]
> **Resep Dikuasai#COLON#** $get[resep] resep

**Menu Siap Dijual#COLON#** $get[menusiap]
**Booster#COLON#**
}};{actionRow:{button:Stats:3:stats:no}{button:Pengaturan:3:pengaturan:no}{button:Lokasi:3:lokasi:no}{button:Profile:3:profile:no}{button:Istirahat:3:istirahat:no}}{actionRow:{button:Informasi:3:informasi:no}{button:Peliharaan:3:peliharaan:no}{button:Invite:5:$getVar[botinvite]:no}{button:Kembali:2:warung:no}};;all;false]

$let[antrian;$numberSeparator[$getGlobalUserVar[antrian;$authorID];,] pembeli]
$let[stamina;$truncate[$math[100*$getGlobalUserVar[stamina;$authorID]/$getGlobalUserVar[staminamax;$authorID]]]%]
$let[hari;$numberSeparator[$getGlobalUserVar[harijualan;$authorID];,]]
$let[uang;$numberSeparator[$getGlobalUserVar[uangrp;$authorID];,]]
$let[reputasi;$abbreviate[$getGlobalUserVar[reputasi;$authorID];1]]
$let[level;**$numberSeparator[$getGlobalUserVar[wvlevel;$authorID];,]** - ($numberSeparator[$getGlobalUserVar[wvexp;$authorID];,]/$numberSeparator[$getGlobalUserVar[wvreqexp;$authorID];,]・$truncate[$math[100*$getGlobalUserVar[wvexp;$authorID]/$getGlobalUserVar[wvreqexp;$authorID]]]%)]
$let[resep;$numberSeparator[$getGlobalUserVar[resepdikuasai;$authorID];,]]
$let[pembeli;$numberSeparator[$getGlobalUserVar[pembeli;$authorID];,]]
$let[langganan;$numberSeparator[$getGlobalUserVar[langganan;$authorID];,]]
$let[menusiap;$replaceText[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;\n> **$getVar[sayurasemnama]:** $numberSeparator[$getGlobalUserVar[sayurasemjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;\n> **$getVar[sayurkacangpanjangnama]:** $numberSeparator[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;\n> **$getVar[sayurlabusiamnama]:** $numberSeparator[$getGlobalUserVar[sayurlabusiamjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;\n> **$getVar[sayurkangkungnama]:** $numberSeparator[$getGlobalUserVar[sayurkangkungjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;\n> **$getVar[sayurbuncisnama]:** $numberSeparator[$getGlobalUserVar[sayurbuncisjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;\n> **$getVar[sayurorektempenama]:** $numberSeparator[$getGlobalUserVar[sayurorektempejadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;\n> **$getVar[sayurtahunama]:** $numberSeparator[$getGlobalUserVar[sayurtahujadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;\n> **$getVar[sayursawihijaunama]:** $numberSeparator[$getGlobalUserVar[sayursawihijaujadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;\n> **$getVar[sayursawiputihnama]:** $numberSeparator[$getGlobalUserVar[sayursawiputihjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;\n> **$getVar[sayurtogenama]:** $numberSeparator[$getGlobalUserVar[sayurtogejadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;\n> **$getVar[sayurjamurnama]:** $numberSeparator[$getGlobalUserVar[sayurjamurjadi;$authorID];,];1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;\n> **$getVar[sayurtimunnama]:** $numberSeparator[$getGlobalUserVar[sayurtimunjadi;$authorID];,];1];false;;4000];false;\n> ◉--==──==--◉\n;1]]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`

//$replaceText[$checkCondition[$getGlobalUserVar[$change$jadi;$authorID]>=1];true;> **$getVar[$change$nama]:** $numberSeparator[$getGlobalUserVar[$change$jadi;$authorID];,]\n;1]
}]