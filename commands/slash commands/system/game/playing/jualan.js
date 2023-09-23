module.exports = [{
  name: "jualan",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `
$if[$randomText[$nonEscape[$replaceTextWithRegex[$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;sayurasem\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;sayurkacangpanjangjadi\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;sayurlabusiam\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;sayurkangkung\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;sayurbuncis\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;sayurorektempe\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;sayurtahu\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;sayursawihijau\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;sayursawiputih\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;sayurtoge\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;sayurjamur\\;\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;sayurtimun\\;;1];false;g;]none;\\;none;g;]]]==sayurasem]

$if[$getGlobalUserVar[sayurasemjadi;$authorID]>=1]


$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];$getGlobalUserVar[sayurasemhargajual;$authorID]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{title:Warung $getGlobalUserVar[namawarung;$authorID]}{description:
*Kamu berjualan di lokasi **Kp.Rambutan***
**+$get[wvexp] Xp**

Kamu berhasil menjual **Sayur Asem** dengan harga **$numberSeparator[$getGlobalUserVar[sayurasemhargajual;$authorID];,]** kepada pembeli dan sisa pembeli di antrian adalah **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,]**.
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[wvexp;$sum[$getGlobalUserVar[wvexp;$authorID];$get[wvexp]];$authorID]

$setGlobalUserVar[sayurasemjadi;$sub[$getGlobalUserVar[sayurasemjadi;$authorID];1];$authorID]
$setGlobalUserVar[antrian;$sub[$getGlobalUserVar[antrian;$authorID];1];$authorID]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$elseif[$randomText[$nonEscape[$replaceTextWithRegex[$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;sayurasem\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;sayurkacangpanjangjadi\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;sayurlabusiam\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;sayurkangkung\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;sayurbuncis\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;sayurorektempe\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;sayurtahu\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;sayursawihijau\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;sayursawiputih\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;sayurtoge\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;sayurjamur\\;\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;sayurtimun\\;;1];false;g;]none;\\;none;g;]]]==sayurkacangpanjang]

$if[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1]

$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];$getGlobalUserVar[sayurkacangpanjanghargajual;$authorID]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{title:Warung $getGlobalUserVar[namawarung;$authorID]}{description:
*Kamu berjualan di lokasi **Kp.Rambutan***
**+$get[wvexp] Xp**

Kamu berhasil menjual **Sayur Kacang Panjang** dengan harga **$numberSeparator[$getGlobalUserVar[sayurkacangpanjanghargajual;$authorID];,]** kepada pembeli dan sisa pembeli di antrian adalah **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,]**.
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[wvexp;$sum[$getGlobalUserVar[wvexp;$authorID];$get[wvexp]];$authorID]

$setGlobalUserVar[sayurkacangpanjangjadi;$sub[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID];1];$authorID]
$setGlobalUserVar[antrian;$sub[$getGlobalUserVar[antrian;$authorID];1];$authorID]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$endelseif

$elseif[$randomText[$nonEscape[$replaceTextWithRegex[$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;sayurasem\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;sayurkacangpanjangjadi\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;sayurlabusiam\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;sayurkangkung\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;sayurbuncis\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;sayurorektempe\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;sayurtahu\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;sayursawihijau\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;sayursawiputih\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;sayurtoge\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;sayurjamur\\;\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;sayurtimun\\;;1];false;g;]none;\\;none;g;]]]==sayurlabusiam]


$if[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1]

$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];$getGlobalUserVar[sayurlabusiamhargajual;$authorID]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{title:Warung $getGlobalUserVar[namawarung;$authorID]}{description:
*Kamu berjualan di lokasi **Kp.Rambutan***
**+$get[wvexp] Xp**

Kamu berhasil menjual **Sayur Labu Siam** dengan harga **$numberSeparator[$getGlobalUserVar[sayurlabusiamhargajual;$authorID];,]** kepada pembeli dan sisa pembeli di antrian adalah **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,]**.
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[wvexp;$sum[$getGlobalUserVar[wvexp;$authorID];$get[wvexp]];$authorID]

$setGlobalUserVar[sayurlabusiamjadi;$sub[$getGlobalUserVar[sayurlabusiamjadi;$authorID];1];$authorID]
$setGlobalUserVar[antrian;$sub[$getGlobalUserVar[antrian;$authorID];1];$authorID]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$endelseif

$elseif[$randomText[$nonEscape[$replaceTextWithRegex[$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;sayurasem\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;sayurkacangpanjangjadi\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;sayurlabusiam\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;sayurkangkung\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;sayurbuncis\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;sayurorektempe\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;sayurtahu\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;sayursawihijau\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;sayursawiputih\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;sayurtoge\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;sayurjamur\\;\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;sayurtimun\\;;1];false;g;]none;\\;none;g;]]]==sayurkangkung]

$if[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1]

$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];$getGlobalUserVar[sayurkangkunghargajual;$authorID]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{title:Warung $getGlobalUserVar[namawarung;$authorID]}{description:
*Kamu berjualan di lokasi **Kp.Rambutan***
**+$get[wvexp] Xp**

Kamu berhasil menjual **Sayur Kangkung** dengan harga **$numberSeparator[$getGlobalUserVar[sayurkangkunghargajual;$authorID];,]** kepada pembeli dan sisa pembeli di antrian adalah **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,]**.
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[wvexp;$sum[$getGlobalUserVar[wvexp;$authorID];$get[wvexp]];$authorID]

$setGlobalUserVar[sayurkangkungjadi;$sub[$getGlobalUserVar[sayurkangkungjadi;$authorID];1];$authorID]
$setGlobalUserVar[antrian;$sub[$getGlobalUserVar[antrian;$authorID];1];$authorID]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$endelseif

$elseif[$randomText[$nonEscape[$replaceTextWithRegex[$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;sayurasem\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;sayurkacangpanjangjadi\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;sayurlabusiam\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;sayurkangkung\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;sayurbuncis\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;sayurorektempe\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;sayurtahu\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;sayursawihijau\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;sayursawiputih\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;sayurtoge\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;sayurjamur\\;\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;sayurtimun\\;;1];false;g;]none;\\;none;g;]]]==sayurbuncis]


$if[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1]

$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];$getGlobalUserVar[sayurbuncishargajual;$authorID]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{title:Warung $getGlobalUserVar[namawarung;$authorID]}{description:
*Kamu berjualan di lokasi **Kp.Rambutan***
**+$get[wvexp] Xp**

Kamu berhasil menjual **Sayur Buncis** dengan harga **$numberSeparator[$getGlobalUserVar[sayurbuncishargajual;$authorID];,]** kepada pembeli dan sisa pembeli di antrian adalah **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,]**.
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[wvexp;$sum[$getGlobalUserVar[wvexp;$authorID];$get[wvexp]];$authorID]

$setGlobalUserVar[sayurbuncisjadi;$sub[$getGlobalUserVar[sayurbuncisjadi;$authorID];1];$authorID]
$setGlobalUserVar[antrian;$sub[$getGlobalUserVar[antrian;$authorID];1];$authorID]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$endelseif

$elseif[$randomText[$nonEscape[$replaceTextWithRegex[$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;sayurasem\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;sayurkacangpanjangjadi\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;sayurlabusiam\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;sayurkangkung\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;sayurbuncis\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;sayurorektempe\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;sayurtahu\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;sayursawihijau\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;sayursawiputih\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;sayurtoge\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;sayurjamur\\;\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;sayurtimun\\;;1];false;g;]none;\\;none;g;]]]==sayurorektempe]


$if[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1]

$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];$getGlobalUserVar[sayurorektempehargajual;$authorID]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{title:Warung $getGlobalUserVar[namawarung;$authorID]}{description:
*Kamu berjualan di lokasi **Kp.Rambutan***
**+$get[wvexp] Xp**

Kamu berhasil menjual **Sayur Orek Tempe** dengan harga **$numberSeparator[$getGlobalUserVar[sayurorektempehargajual;$authorID];,]** kepada pembeli dan sisa pembeli di antrian adalah **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,]**.
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[wvexp;$sum[$getGlobalUserVar[wvexp;$authorID];$get[wvexp]];$authorID]

$setGlobalUserVar[sayurorektempejadi;$sub[$getGlobalUserVar[sayurorektempejadi;$authorID];1];$authorID]
$setGlobalUserVar[antrian;$sub[$getGlobalUserVar[antrian;$authorID];1];$authorID]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$endelseif

$elseif[$randomText[$nonEscape[$replaceTextWithRegex[$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;sayurasem\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;sayurkacangpanjangjadi\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;sayurlabusiam\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;sayurkangkung\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;sayurbuncis\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;sayurorektempe\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;sayurtahu\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;sayursawihijau\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;sayursawiputih\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;sayurtoge\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;sayurjamur\\;\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;sayurtimun\\;;1];false;g;]none;\\;none;g;]]]==sayurtahu]


$if[$getGlobalUserVar[sayurtahujadi;$authorID]>=1]

$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];$getGlobalUserVar[sayurtahuhargajual;$authorID]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{title:Warung $getGlobalUserVar[namawarung;$authorID]}{description:
*Kamu berjualan di lokasi **Kp.Rambutan***
**+$get[wvexp] Xp**

Kamu berhasil menjual **Sayur Tahu** dengan harga **$numberSeparator[$getGlobalUserVar[sayurtahuhargajual;$authorID];,]** kepada pembeli dan sisa pembeli di antrian adalah **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,]**.
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[wvexp;$sum[$getGlobalUserVar[wvexp;$authorID];$get[wvexp]];$authorID]

$setGlobalUserVar[sayurtahujadi;$sub[$getGlobalUserVar[sayurtahujadi;$authorID];1];$authorID]
$setGlobalUserVar[antrian;$sub[$getGlobalUserVar[antrian;$authorID];1];$authorID]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$endelseif

$elseif[$randomText[$nonEscape[$replaceTextWithRegex[$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;sayurasem\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;sayurkacangpanjangjadi\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;sayurlabusiam\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;sayurkangkung\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;sayurbuncis\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;sayurorektempe\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;sayurtahu\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;sayursawihijau\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;sayursawiputih\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;sayurtoge\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;sayurjamur\\;\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;sayurtimun\\;;1];false;g;]none;\\;none;g;]]]==sayursawihijau]

$if[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1]

$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];$getGlobalUserVar[sayursawihijauhargajual;$authorID]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{title:Warung $getGlobalUserVar[namawarung;$authorID]}{description:
*Kamu berjualan di lokasi **Kp.Rambutan***
**+$get[wvexp] Xp**

Kamu berhasil menjual **Sayur Sawi Hijau** dengan harga **$numberSeparator[$getGlobalUserVar[sayursawihijauhargajual;$authorID];,]** kepada pembeli dan sisa pembeli di antrian adalah **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,]**.
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[wvexp;$sum[$getGlobalUserVar[wvexp;$authorID];$get[wvexp]];$authorID]

$setGlobalUserVar[sayursawihijaujadi;$sub[$getGlobalUserVar[sayursawihijaujadi;$authorID];1];$authorID]
$setGlobalUserVar[antrian;$sub[$getGlobalUserVar[antrian;$authorID];1];$authorID]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$endelseif

$elseif[$randomText[$nonEscape[$replaceTextWithRegex[$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;sayurasem\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;sayurkacangpanjangjadi\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;sayurlabusiam\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;sayurkangkung\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;sayurbuncis\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;sayurorektempe\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;sayurtahu\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;sayursawihijau\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;sayursawiputih\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;sayurtoge\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;sayurjamur\\;\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;sayurtimun\\;;1];false;g;]none;\\;none;g;]]]==sayursawiputih]


$if[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1]

$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];$getGlobalUserVar[sayursawiputihhargajual;$authorID]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{title:Warung $getGlobalUserVar[namawarung;$authorID]}{description:
*Kamu berjualan di lokasi **Kp.Rambutan***
**+$get[wvexp] Xp**

Kamu berhasil menjual **Sayur Sawi Putih** dengan harga **$numberSeparator[$getGlobalUserVar[sayursawiputihhargajual;$authorID];,]** kepada pembeli dan sisa pembeli di antrian adalah **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,]**.
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[wvexp;$sum[$getGlobalUserVar[wvexp;$authorID];$get[wvexp]];$authorID]

$setGlobalUserVar[sayursawiputihjadi;$sub[$getGlobalUserVar[sayursawiputihjadi;$authorID];1];$authorID]
$setGlobalUserVar[antrian;$sub[$getGlobalUserVar[antrian;$authorID];1];$authorID]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$endelseif

$elseif[$randomText[$nonEscape[$replaceTextWithRegex[$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;sayurasem\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;sayurkacangpanjangjadi\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;sayurlabusiam\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;sayurkangkung\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;sayurbuncis\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;sayurorektempe\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;sayurtahu\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;sayursawihijau\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;sayursawiputih\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;sayurtoge\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;sayurjamur\\;\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;sayurtimun\\;;1];false;g;]none;\\;none;g;]]]==sayurtoge]


$if[$getGlobalUserVar[sayurtogejadi;$authorID]>=1]

$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];$getGlobalUserVar[sayurtogehargajual;$authorID]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{title:Warung $getGlobalUserVar[namawarung;$authorID]}{description:
*Kamu berjualan di lokasi **Kp.Rambutan***
**+$get[wvexp] Xp**

Kamu berhasil menjual **Sayur Toge** dengan harga **$numberSeparator[$getGlobalUserVar[sayurtogehargajual;$authorID];,]** kepada pembeli dan sisa pembeli di antrian adalah **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,]**.
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[wvexp;$sum[$getGlobalUserVar[wvexp;$authorID];$get[wvexp]];$authorID]

$setGlobalUserVar[sayurtogejadi;$sub[$getGlobalUserVar[sayurtogejadi;$authorID];1];$authorID]
$setGlobalUserVar[antrian;$sub[$getGlobalUserVar[antrian;$authorID];1];$authorID]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$endelseif

$elseif[$randomText[$nonEscape[$replaceTextWithRegex[$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;sayurasem\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;sayurkacangpanjangjadi\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;sayurlabusiam\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;sayurkangkung\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;sayurbuncis\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;sayurorektempe\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;sayurtahu\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;sayursawihijau\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;sayursawiputih\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;sayurtoge\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;sayurjamur\\;\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;sayurtimun\\;;1];false;g;]none;\\;none;g;]]]==sayurjamur]


$if[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1]

$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];$getGlobalUserVar[sayurjamurhargajual;$authorID]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{title:Warung $getGlobalUserVar[namawarung;$authorID]}{description:
*Kamu berjualan di lokasi **Kp.Rambutan***
**+$get[wvexp] Xp**

Kamu berhasil menjual **Sayur Jamur** dengan harga **$numberSeparator[$getGlobalUserVar[sayurjamurhargajual;$authorID];,]** kepada pembeli dan sisa pembeli di antrian adalah **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,]**.
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[wvexp;$sum[$getGlobalUserVar[wvexp;$authorID];$get[wvexp]];$authorID]

$setGlobalUserVar[sayurjamurjadi;$sub[$getGlobalUserVar[sayurjamurjadi;$authorID];1];$authorID]
$setGlobalUserVar[antrian;$sub[$getGlobalUserVar[antrian;$authorID];1];$authorID]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$endelseif

$elseif[$randomText[$nonEscape[$replaceTextWithRegex[$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[sayurasemjadi;$authorID]>=1];true;sayurasem\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkacangpanjangjadi;$authorID]>=1];true;sayurkacangpanjangjadi\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurlabusiamjadi;$authorID]>=1];true;sayurlabusiam\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurkangkungjadi;$authorID]>=1];true;sayurkangkung\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurbuncisjadi;$authorID]>=1];true;sayurbuncis\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurorektempejadi;$authorID]>=1];true;sayurorektempe\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtahujadi;$authorID]>=1];true;sayurtahu\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawihijaujadi;$authorID]>=1];true;sayursawihijau\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayursawiputihjadi;$authorID]>=1];true;sayursawiputih\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtogejadi;$authorID]>=1];true;sayurtoge\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurjamurjadi;$authorID]>=1];true;sayurjamur\\;\\;;1]$replaceText[$checkCondition[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1];true;sayurtimun\\;;1];false;g;]none;\\;none;g;]]]==sayurtimun]

$if[$getGlobalUserVar[sayurtimunjadi;$authorID]>=1]

$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];$getGlobalUserVar[sayurtimunhargajual;$authorID]];$authorID]

$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{title:Warung $getGlobalUserVar[namawarung;$authorID]}{description:
*Kamu berjualan di lokasi **Kp.Rambutan***
**+$get[wvexp] Xp**

Kamu berhasil menjual **Sayur Timun** dengan harga **$numberSeparator[$getGlobalUserVar[sayurtimunhargajual;$authorID];,]** kepada pembeli dan sisa pembeli di antrian adalah **$numberSeparator[$getGlobalUserVar[antrian;$authorID];,]**.
}};{actionRow:{button:Jualan:3:jual-u1:no}{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}};;all;false]

$setGlobalUserVar[wvexp;$sum[$getGlobalUserVar[wvexp;$authorID];$get[wvexp]];$authorID]

$setGlobalUserVar[sayurtimunjadi;$sub[$getGlobalUserVar[sayurtimunjadi;$authorID];1];$authorID]
$setGlobalUserVar[antrian;$sub[$getGlobalUserVar[antrian;$authorID];1];$authorID]

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$endelseif

$else
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$username[$authorID] Berjualan:$userAvatar[$authorID]}{description:
Kamu tidak memiliki barang dagangan untuk dijual, **/masak** makanan dahulu untuk mulai berjualan lagi!}};{actionRow:{button:Warung:3:warung:no}{button:Menu:2:menu}};;all;true]

$endif

$let[wvexp;$random[1;$math[$getGlobalUserVar[wvlevel;$authorID]*20*1.25]]]

$setGlobalUserVar[stamina;$sub[$getGlobalUserVar[stamina;$authorID];$random[1;20]];$authorID]

$onlyIf[$getGlobalUserVar[antrian;$authorID]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu tidak memiliki antrian pelanggan saat ini, Gunakan **__/menunggu__** untuk merefresh antrian pembeli atau tekan tombol dibawah}}{actionRow:{button:Menunggu:3:menunggu:no}{button:Kembali:2:warung:no}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[stamina;$authorID]>=100;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu perlu istirahat karna stamina yang kamu miliki tersisa **$truncate[$math[$getGlobalUserVar[stamina;$authorID]/1000*100]]%**, Gunakan **/istirahat** untuk istirahat atau tekan tombol dibawah}}{actionRow:{button:Istirahat:3:istirahat:no}{button:Kembali:2:warung:no}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
}]