module.exports = [{
  name: "masak",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `
$c[sayurasem]
$if[$slashOption[masakan]==sayurasem]
$setGlobalUserVar[sayurasemjadi;$sum[$getGlobalUserVar[sayurasemjadi;$authorID];$slashOption[jumlah]];$authorID]

$setGlobalUserVar[labusiam;$sub[$getGlobalUserVar[labusiam;$authorID];$slashOption[jumlah]];$authorID]
$setGlobalUserVar[jagung;$sub[$getGlobalUserVar[jagung;$authorID];$slashOption[jumlah]];$authorID]
$setGlobalUserVar[kacangpanjang;$sub[$getGlobalUserVar[kacangpanjang;$authorID];$slashOption[jumlah]];$authorID]
$setGlobalUserVar[kangkung;$sub[$getGlobalUserVar[kangkung;$authorID];$slashOption[jumlah]];$authorID]
$setGlobalUserVar[asamjawa;$sub[$getGlobalUserVar[asamjawa;$authorID];$slashOption[jumlah]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Masak:$userAvatar[$authorID]}{description:
**$username[$authorID]** memasak **Sayur Asem** sebanyak **$numberSeparator[$slashOption[jumlah];,] porsi** dan menghabiskan bahan#COLON#
> **Labu Siam:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] buah
> **Jagung:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] buah
> **Kacang Panjang:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] buah
> **Kangkung:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] buah
> **Asam Jawa:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] buah
}};;;all;true]

$onlyIf[$getGlobalUserVar[labusiam;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Labu Siam** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** untuk memasak **Sayur Asem**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[jagung;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Jagung** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** untuk memasak **Sayur Asem**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[kacangpanjang;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Kacang Panjang** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** untuk memasak **Sayur Asem**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[kangkung;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Kangkung** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** untuk memasak **Sayur Asem**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[asamjawa;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Asam Jawa** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** untuk memasak **Sayur Asem**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$c[sayurkacangpanjang]
$elseif[$toLowerCase[$slashOption[masakan]]==sayurkacangpanjang]
$setGlobalUserVar[sayurkacangpanjangjadi;$sum[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID];$slashOption[jumlah]];$authorID]

$setGlobalUserVar[kacangpanjang;$sub[$getGlobalUserVar[kacangpanjang;$authorID];$slashOption[jumlah]];$authorID]
$setGlobalUserVar[tempe;$sub[$getGlobalUserVar[tempe;$authorID];$slashOption[jumlah]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Masak:$userAvatar[$authorID]}{description:
**$username[$authorID]** memasak **Sayur Kacang Panjang** sebanyak **$numberSeparator[$slashOption[jumlah];,] porsi** dan menghabiskan bahan#COLON#
> **Kacang Panjang:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] buah
> **Tempe:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] papan
}};;;all;true]

$onlyIf[$getGlobalUserVar[tempe;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Tempe** sebanyak **$numberSeparator[$slashOption[jumlah];,] papan** untuk memasak **Sayur Kacang Panjang**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[kacangpanjang;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Kacang Panjang** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** untuk memasak **Sayur Kacang Panjang**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[sayurkacangpanjangdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak memiliki resep **Sayur Kacang Panjang**, Beli resep tersebut untuk membuka nya!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[sayurlabusiam]
$elseif[$toLowerCase[$slashOption[masakan]]==sayurlabusiam]
$setGlobalUserVar[sayurlabusiamjadi;$sum[$getGlobalUserVar[sayurlabusiamjadi;$authorID];$slashOption[jumlah]];$authorID]

$setGlobalUserVar[labusiam;$sub[$getGlobalUserVar[labusiam;$authorID];$slashOption[jumlah]];$authorID]
$setGlobalUserVar[tempe;$sub[$getGlobalUserVar[tempe;$authorID];$slashOption[jumlah]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Masak:$userAvatar[$authorID]}{description:
**$username[$authorID]** memasak **Sayur Labu Siam** sebanyak **$numberSeparator[$slashOption[jumlah];,] porsi** dan menghabiskan bahan#COLON#
> **Labu Siam:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] buah
> **Tempe:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] papan
}};;;all;true]

$onlyIf[$getGlobalUserVar[tempe;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Tempe** sebanyak **$numberSeparator[$slashOption[jumlah];,] papan** untuk memasak **Sayur Labu Siam**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[labusiam;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Labu Siam** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** untuk memasak **Sayur Labu Siam**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[sayurlabusiamdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak memiliki resep **Sayur Labu Siam**, Beli resep tersebut untuk membuka nya!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[sayurkangkung]
$elseif[$toLowerCase[$slashOption[masakan]]==sayurkangkung]
$setGlobalUserVar[sayurkangkungjadi;$sum[$getGlobalUserVar[sayurkangkungjadi;$authorID];$slashOption[jumlah]];$authorID]

$setGlobalUserVar[kangkung;$sub[$getGlobalUserVar[kangkung;$authorID];$slashOption[jumlah]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Masak:$userAvatar[$authorID]}{description:
**$username[$authorID]** memasak **Sayur Kangkung** sebanyak **$numberSeparator[$slashOption[jumlah];,] porsi** dan menghabiskan bahan#COLON#
> **Kangkung:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] buah
}};;;all;true]

$onlyIf[$getGlobalUserVar[kangkung;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Kangkung** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** untuk memasak **Sayur Kangkung**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[sayurkangkungdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak memiliki resep **Sayur Kangkung**, Beli resep tersebut untuk membuka nya!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[sayurbuncis]
$elseif[$toLowerCase[$slashOption[masakan]]==sayurbuncis]
$setGlobalUserVar[sayurbuncisjadi;$sum[$getGlobalUserVar[sayurbuncisjadi;$authorID];$slashOption[jumlah]];$authorID]

$setGlobalUserVar[buncis;$sub[$getGlobalUserVar[buncis;$authorID];$math[300*$slashOption[jumlah]]];$authorID]
$setGlobalUserVar[tempe;$sub[$getGlobalUserVar[tempe;$authorID];$slashOption[jumlah]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Masak:$userAvatar[$authorID]}{description:
**$username[$authorID]** memasak **Sayur Buncis** sebanyak **$numberSeparator[$slashOption[jumlah];,] porsi** dan menghabiskan bahan#COLON#
> **Buncis:** x$numberSeparator[$math[100*$slashOption[jumlah]];,] gram
> **Tempe:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] papan
}};;;all;true]

$onlyIf[$getGlobalUserVar[tempe;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Tempe** sebanyak **$numberSeparator[$slashOption[jumlah];,] papan** untuk memasak **Sayur Buncis**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[buncis;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Buncis** sebanyak **$numberSeparator[$math[100*$slashOption[jumlah]];,] gram** untuk memasak **Sayur Buncis**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[sayurbuncisdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak memiliki resep **Sayur Buncis**, Beli resep tersebut untuk membuka nya!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[sayurtempe]
$elseif[$toLowerCase[$slashOption[masakan]]==sayurtempe]
$setGlobalUserVar[sayurtempejadi;$sum[$getGlobalUserVar[sayurtempejadi;$authorID];$slashOption[jumlah]];$authorID]

$setGlobalUserVar[tempe;$sub[$getGlobalUserVar[tempe;$authorID];$slashOption[jumlah]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Masak:$userAvatar[$authorID]}{description:
**$username[$authorID]** memasak **Sayur Orek Tempe** sebanyak **$numberSeparator[$slashOption[jumlah];,] porsi** dan menghabiskan bahan#COLON#
> **Tempe:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] papan
}};;;all;true]

$onlyIf[$getGlobalUserVar[tempe;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Tempe** sebanyak **$numberSeparator[$slashOption[jumlah];,] papan** untuk memasak **Sayur Orek Tempe**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[sayurorektempedimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak memiliki resep **Sayur Orek Tempe**, Beli resep tersebut untuk membuka nya!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[sayurtahu]
$elseif[$toLowerCase[$slashOption[masakan]]==sayurtahu]
$setGlobalUserVar[sayurtahujadi;$sum[$getGlobalUserVar[sayurtahujadi;$authorID];$slashOption[jumlah]];$authorID]

$setGlobalUserVar[tahu;$sub[$getGlobalUserVar[tahu;$authorID];$math[3*$slashOption[jumlah]]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Masak:$userAvatar[$authorID]}{description:
**$username[$authorID]** memasak **Sayur Tahu** sebanyak **$numberSeparator[$slashOption[jumlah];,] porsi** dan menghabiskan bahan#COLON#
> **Tahu:** x$numberSeparator[$math[3*$slashOption[jumlah]];,] pcs
}};;;all;true]

$onlyIf[$getGlobalUserVar[tahu;$authorID]>=$math[3*$slashOption[jumlah]];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Tahu** sebanyak **$numberSeparator[$math[3*$slashOption[jumlah]];,] pcs** untuk memasak **Sayur Tahu**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[sayurtahudimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak memiliki resep **Sayur Tahu**, Beli resep tersebut untuk membuka nya!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[sayursawihijau]
$elseif[$toLowerCase[$slashOption[masakan]]==sayursawihijau]
$setGlobalUserVar[sayursawihijaujadi;$sum[$getGlobalUserVar[sayursawihijaujadi;$authorID];$slashOption[jumlah]];$authorID]

$setGlobalUserVar[sawihijau;$sub[$getGlobalUserVar[sawihijau;$authorID];$slashOption[jumlah]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Masak:$userAvatar[$authorID]}{description:
**$username[$authorID]** memasak **Sayur Sawi Hijau** sebanyak **$numberSeparator[$slashOption[jumlah];,] porsi** dan menghabiskan bahan#COLON#
> **Sawi Hijau:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] buah
}};;;all;true]

$onlyIf[$getGlobalUserVar[sawihijau;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Sawi Hijau** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** untuk memasak **Sayur Sawi Hijau**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[sayursawihijaudimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak memiliki resep **Sayur Sawi Hijau**, Beli resep tersebut untuk membuka nya!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[sayursawiputih]
$elseif[$toLowerCase[$slashOption[masakan]]==sayursawiputih]
$setGlobalUserVar[sayursawiputihjadi;$sum[$getGlobalUserVar[sayursawiputihjadi;$authorID];$slashOption[jumlah]];$authorID]

$setGlobalUserVar[sawiputih;$sub[$getGlobalUserVar[sawiputih;$authorID];$slashOption[jumlah]];$authorID]
$setGlobalUserVar[tahu;$sub[$getGlobalUserVar[tahu;$authorID];$math[2*$slashOption[jumlah]]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Masak:$userAvatar[$authorID]}{description:
**$username[$authorID]** memasak **Sayur Sawi Putih** sebanyak **$numberSeparator[$slashOption[jumlah];,] porsi** dan menghabiskan bahan#COLON#
> **Sawi Putih:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] buah
> **Tahu:** x$numberSeparator[$math[2*$slashOption[jumlah]];,] pcs
}};;;all;true]

$onlyIf[$getGlobalUserVar[tahu;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Tahu** sebanyak **$numberSeparator[$math[2*$slashOption[jumlah]];,] pcs** untuk memasak **Sayur Sawi Putih**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[sawiputih;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Sawi Putih** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** untuk memasak **Sayur Sawi Putih**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[sayursawihijaudimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak memiliki resep **Sayur Sawi Putih**, Beli resep tersebut untuk membuka nya!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[sayurtoge]
$elseif[$toLowerCase[$slashOption[masakan]]==sayurtoge]
$setGlobalUserVar[sayurtogejadi;$sum[$getGlobalUserVar[sayurtogejadi;$authorID];$slashOption[jumlah]];$authorID]

$setGlobalUserVar[tahu;$sub[$getGlobalUserVar[tahu;$authorID];$math[2*$slashOption[jumlah]]];$authorID]
$setGlobalUserVar[toge;$sub[$getGlobalUserVar[toge;$authorID];$math[300*$slashOption[jumlah]]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Masak:$userAvatar[$authorID]}{description:
**$username[$authorID]** memasak **Sayur Toge** sebanyak **$numberSeparator[$slashOption[jumlah];,] porsi** dan menghabiskan bahan#COLON#
> **Toge:** x$numberSeparator[$math[300*$slashOption[jumlah]];,] gram
> **Tahu:** x$numberSeparator[$math[2*$slashOption[jumlah]];,] pcs
}};;;all;true]

$onlyIf[$getGlobalUserVar[tahu;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Tahu** sebanyak **$numberSeparator[$math[2*$slashOption[jumlah]];,] pcs** untuk memasak **Sayur Toge**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[toge;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Toge** sebanyak **$numberSeparator[$math[300*$slashOption[jumlah]];,] gram** untuk memasak **Sayur Toge**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[sayurtogedimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak memiliki resep **Sayur Toge**, Beli resep tersebut untuk membuka nya!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[sayurjamur]
$elseif[$toLowerCase[$slashOption[masakan]]==sayurjamur]
$setGlobalUserVar[sayurjamurjadi;$sum[$getGlobalUserVar[sayurjamurjadi;$authorID];$slashOption[jumlah]];$authorID]

$setGlobalUserVar[tahu;$sub[$getGlobalUserVar[tahu;$authorID];$math[2*$slashOption[jumlah]]];$authorID]
$setGlobalUserVar[jamur;$sub[$getGlobalUserVar[jamur;$authorID];$math[2*$slashOption[jumlah]]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Masak:$userAvatar[$authorID]}{description:
**$username[$authorID]** memasak **Sayur Jamur** sebanyak **$numberSeparator[$slashOption[jumlah];,] porsi** dan menghabiskan bahan#COLON#
> **Jamur:** x$numberSeparator[$math[2*$slashOption[jumlah]];,] buah
> **Tahu:** x$numberSeparator[$math[2*$slashOption[jumlah]];,] pcs
}};;;all;true]

$onlyIf[$getGlobalUserVar[tahu;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Tahu** sebanyak **$numberSeparator[$math[2*$slashOption[jumlah]];,] pcs** untuk memasak **Sayur Jamur**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[jamur;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Jamur** sebanyak **$numberSeparator[$math[2*$slashOption[jumlah]];,] buah** untuk memasak **Sayur Jamur**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[sayurjamurdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak memiliki resep **Sayur Jamur**, Beli resep tersebut untuk membuka nya!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[sayurtimun]
$elseif[$toLowerCase[$slashOption[masakan]]==sayurtimun]
$setGlobalUserVar[sayurtimunjadi;$sum[$getGlobalUserVar[sayurtimunjadi;$authorID];$slashOption[jumlah]];$authorID]

$setGlobalUserVar[timun;$sub[$getGlobalUserVar[timun;$authorID];$slashOption[jumlah]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Masak:$userAvatar[$authorID]}{description:
**$username[$authorID]** memasak **Sayur Timun** sebanyak **$numberSeparator[$slashOption[jumlah];,] porsi** dan menghabiskan bahan#COLON#
> **Timun:** x$numberSeparator[$math[1*$slashOption[jumlah]];,] buah
}};;;all;true]

$onlyIf[$getGlobalUserVar[timun;$authorID]>=$slashOption[jumlah];{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Memasak Gagal, Kamu tidak memiliki bahan **Timun** sebanyak **$numberSeparator[$slashOption[jumlah];,]** untuk memasak **Sayur Timun**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[sayurjamurdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak memiliki resep **Sayur Timun**, Beli resep tersebut untuk membuka nya!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$else
$interactionReply[;{newEmbed:{color:$getVar[cerror]}{description:
$getVar[xmark]︱Tidak dapat menemukan resep **__$slashOption[masakan]__** di dalam sistem!, Jika merasa sudah benar mohon koreksi pengetikanmu agar sistem dapat membacanya. __Contoh: Sayur Asem => sayurasem__
}};;;all;true]

$endif

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[cerror]}{description:
$getVar[xmark]︱Jumlah angka yang anda masukan tidak valid!
}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
}]