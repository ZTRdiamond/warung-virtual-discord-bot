module.exports = [{
  name: "beli",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `
$if[$toLowerCase[$slashOption[barang]]==labusiam]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Labu Siam** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** dengan harga **Rp.$numberSeparator[$math[700*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_labusiam_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$elseif[$toLowerCase[$slashOption[barang]]==terong]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Terong** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** dengan harga **Rp.$numberSeparator[$math[1200*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_terong_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==kangkung]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Kangkung** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** dengan harga **Rp.$numberSeparator[$math[2500*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_kangkung_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==sawihijau]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Sawi Hijau** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** dengan harga **Rp.$numberSeparator[$math[2500*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_sawihijau_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==sawiputih]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Sawi Putih** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** dengan harga **Rp.$numberSeparator[$math[2500*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_sawiputih_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==tomat]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Tomat** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** dengan harga **Rp.$numberSeparator[$math[1200*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_tomat_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==toge]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Toge** sebanyak **$numberSeparator[$slashOption[jumlah];,] gram** dengan harga **Rp.$numberSeparator[$math[8*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_toge_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==jamur]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Jamur** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** dengan harga **Rp.$numberSeparator[$math[1300*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_jamur_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==jagung]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Jagung** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** dengan harga **Rp.$numberSeparator[$math[1500*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_jagung_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==asamjawa]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Asam Jawa** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** dengan harga **Rp.$numberSeparator[$math[2300*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_asamjawa_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==kacangpanjang]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Kacang Panjang** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** dengan harga **Rp.$numberSeparator[$math[1000*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_kacangpanjang_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==tempe]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Tempe** sebanyak **$numberSeparator[$slashOption[jumlah];,] papan** dengan harga **Rp.$numberSeparator[$math[2000*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_tempe_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==tahu]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Tahu** sebanyak **$numberSeparator[$slashOption[jumlah];,] pcs** dengan harga **Rp.$numberSeparator[$math[800*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_tahu_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==timun]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Timun** sebanyak **$numberSeparator[$slashOption[jumlah];,] buah** dengan harga **Rp.$numberSeparator[$math[3000*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_timun_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==buncis]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Buncis** sebanyak **$numberSeparator[$slashOption[jumlah];,] gram** dengan harga **Rp.$numberSeparator[$math[16*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_buncis_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[list ikan]

$elseif[$toLowerCase[$slashOption[barang]]==ikanlele]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Ikan Lele** sebanyak **$numberSeparator[$slashOption[jumlah];,] ekor** dengan harga **Rp.$numberSeparator[$math[4000*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_ikanlele_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==ikanbawal]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Ikan Bawal** sebanyak **$numberSeparator[$slashOption[jumlah];,] ekor** dengan harga **Rp.$numberSeparator[$math[3500*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_ikanbawal_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==ikankembung]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Ikan Kembung** sebanyak **$numberSeparator[$slashOption[jumlah];,] ekor** dengan harga **Rp.$numberSeparator[$math[4000*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_ikankembung_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==ikankakap]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Ikan Kakap** sebanyak **$numberSeparator[$slashOption[jumlah];,] ekor** dengan harga **Rp.$numberSeparator[$math[25000*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_ikankakap_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$elseif[$toLowerCase[$slashOption[barang]]==ikangurame]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu akan membeli **Ikan Gurame** sebanyak **$numberSeparator[$slashOption[jumlah];,] ekor** dengan harga **Rp.$numberSeparator[$math[30000*$slashOption[jumlah]];,]**
> **Yakin ingin membeli?**
}};{actionRow:{button:Beli:3:beli_ikangurame_$slashOption[jumlah]:no}{button:Batal:4:batal:no}};;all;true]

$onlyIf[$isNumber[$slashOption[jumlah]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Jumlah angka yang kamu masukan tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$slashOption[jumlah]!=&&$slashOption[jumlah]>=1;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Masukan jumlah barang yang ingin kamu beli!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$else
$interactionReply[;{newEmbed:{color:$getVar[cerror]}{description:
$getVar[xmark]︱Barang dengan nama **__$toLowerCase[$slashOption[barang]]__** tidak tersedia di dalam sistem, Mohon koreksi ulang nama barang yang anda masukan bila dirasa sudah benar.
}};;;all;true]

$endif

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
$c[//labusiam]
$if[$advancedTextSplit[$interactionData[customId];_;2]==labusiam]
$setGlobalUserVar[labusiam;$sum[$getGlobalUserVar[labusiam;$authorID];$get[jumlah-brg]];$authorID]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[700*$get[jumlah-brg]]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Labu Siam** sebanyak **$numberSeparator[$get[jumlah-brg];,] buah** dengan harga **Rp.$numberSeparator[$math[700*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[700*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[700*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$c[//terong]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==terong]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[1200*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[terong;$sum[$getGlobalUserVar[terong;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Terong** sebanyak **$numberSeparator[$get[jumlah-brg];,] buah** dengan harga **Rp.$numberSeparator[$math[1200*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[1200*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[1200*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[//jamur]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==jamur]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[1300*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[jamur;$sum[$getGlobalUserVar[jamur;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Jamur** sebanyak **$numberSeparator[$get[jumlah-brg];,] buah** dengan harga **Rp.$numberSeparator[$math[1300*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[1300*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[1300*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[//kangkung]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==kangkung]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[2500*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[kangkung;$sum[$getGlobalUserVar[kangkung;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Kangkung** sebanyak **$numberSeparator[$get[jumlah-brg];,] buah** dengan harga **Rp.$numberSeparator[$math[2500*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[2500*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[2500*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[//asamjawa]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==asamjawa]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[2500*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[asamjawa;$sum[$getGlobalUserVar[asamjawa;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Asam Jawa** sebanyak **$numberSeparator[$get[jumlah-brg];,] buah** dengan harga **Rp.$numberSeparator[$math[2300*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[2300*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[2300*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[toge]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==toge]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[8*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[toge;$sum[$getGlobalUserVar[toge;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Toge** sebanyak **$numberSeparator[$get[jumlah-brg];,] gram** dengan harga **Rp.$numberSeparator[$math[8*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[8*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[12*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[sawihijau]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==sawihijau]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[2500*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[sawihijau;$sum[$getGlobalUserVar[sawihijau;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Sawi Hijau** sebanyak **$numberSeparator[$get[jumlah-brg];,] buah** dengan harga **Rp.$numberSeparator[$math[2500*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[2500*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[2500*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[sawiputih]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==sawiputih]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[2500*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[sawiputih;$sum[$getGlobalUserVar[sawiputih;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Sawi Putih** sebanyak **$numberSeparator[$get[jumlah-brg];,] buah** dengan harga **Rp.$numberSeparator[$math[2500*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[2500*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[2500*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[jagung]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==jagung]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[1500*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[jagung;$sum[$getGlobalUserVar[jagung;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Jagung** sebanyak **$numberSeparator[$get[jumlah-brg];,] buah** dengan harga **Rp.$numberSeparator[$math[1500*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[1500*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[1500*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[kacangpanjang]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==kacangpanjang]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[1000*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[kacangpanjang;$sum[$getGlobalUserVar[kacangpanjang;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Kacang Panjang** sebanyak **$numberSeparator[$get[jumlah-brg];,] buah** dengan harga **Rp.$numberSeparator[$math[1000*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[1000*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[1000*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[tomat]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==tomat]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[1200*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[tomat;$sum[$getGlobalUserVar[tomat;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Tomat** sebanyak **$numberSeparator[$get[jumlah-brg];,] buah** dengan harga **Rp.$numberSeparator[$math[1200*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[1200*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[1200*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[tempe]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==tempe]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[2000*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[tempe;$sum[$getGlobalUserVar[tempe;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Tempe** sebanyak **$numberSeparator[$get[jumlah-brg];,] papan** dengan harga **Rp.$numberSeparator[$math[2000*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[2000*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[2000*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[tahu]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==tahu]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[800*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[tahu;$sum[$getGlobalUserVar[tahu;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Tahu** sebanyak **$numberSeparator[$get[jumlah-brg];,] pcs** dengan harga **Rp.$numberSeparator[$math[800*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[800*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[800*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[timun]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==timun]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[3000*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[timun;$sum[$getGlobalUserVar[timun;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Timun** sebanyak **$numberSeparator[$get[jumlah-brg];,] buah** dengan harga **Rp.$numberSeparator[$math[3000*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[3000*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[3000*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[buncis]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==buncis]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[12*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[buncis;$sum[$getGlobalUserVar[buncis;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Buncis** sebanyak **$numberSeparator[$get[jumlah-brg];,] gram** dengan harga **Rp.$numberSeparator[$math[12*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[12*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[12*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif


$c[list ikan]

$c[ikanlele]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==ikanlele]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[4000*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[ikanlele;$sum[$getGlobalUserVar[ikanlele;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Ikan Lele** sebanyak **$numberSeparator[$get[jumlah-brg];,] ekor** dengan harga **Rp.$numberSeparator[$math[4000*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[4000*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[4000*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[ikanbawal]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==ikanbawal]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[3500*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[ikanbawal;$sum[$getGlobalUserVar[ikanbawal;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Ikan Bawal** sebanyak **$numberSeparator[$get[jumlah-brg];,] ekor** dengan harga **Rp.$numberSeparator[$math[3500*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[3500*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[3500*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[ikankembung]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==ikankembung]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[4000*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[ikankembung;$sum[$getGlobalUserVar[ikankembung;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Ikan Kembung** sebanyak **$numberSeparator[$get[jumlah-brg];,] ekor** dengan harga **Rp.$numberSeparator[$math[4000*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[4000*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[4000*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[ikankakap]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==ikankakap]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[25000*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[ikankakap;$sum[$getGlobalUserVar[ikankakap;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Ikan Kakap** sebanyak **$numberSeparator[$get[jumlah-brg];,] ekor** dengan harga **Rp.$numberSeparator[$math[25000*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[25000*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[25000*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$c[ikangurame]
$elseif[$advancedTextSplit[$interactionData[customId];_;2]==ikangurame]
$setGlobalUserVar[uangrp;$sub[$getGlobalUserVar[uangrp;$authorID];$math[30000*$get[jumlah-brg]]];$authorID]
$setGlobalUserVar[ikangurame;$sum[$getGlobalUserVar[ikangurame;$authorID];$get[jumlah-brg]];$authorID]

$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Membeli Barang:$userAvatar[$authorID]}{description:
Kamu berhasil membeli **Ikan Gurame** sebanyak **$numberSeparator[$get[jumlah-brg];,] ekor** dengan harga **Rp.$numberSeparator[$math[30000*$get[jumlah-brg]];,]**
}};;;all;true]

$onlyIf[$getGlobalUserVar[uangrp;$authorID]>=$math[30000*$get[jumlah-brg]];{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Gagal membeli, Uang yang kamu miliki kurang dari **Rp.$numberSeparator[$math[30000*$get[jumlah-brg]];,]**}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
$endelseif

$else
$interactionReply[;{newEmbed:{color:$getVar[cerror]}{description:
Oops, Mungkin ada yang error!
}};;;all;true]

$endif

$onlyIf[$get[cid]==beli;]

$let[jumlah-brg;$advancedTextSplit[$interactionData[customId];_;3]]
$let[nama-brg;$advancedTextSplit[$interactionData[customId];_;2]]
$let[cid;$advancedTextSplit[$interactionData[customId];_;1]]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "batal",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{description:$getVar[checkmark]︱Pembelian barang telah dibatalkan!}};;;all;true]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
}]