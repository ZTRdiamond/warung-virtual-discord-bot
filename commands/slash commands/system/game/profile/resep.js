module.exports = [{
  name: "resep",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `
$if[$toLowerCase[$slashOption[nama]]==sayurasem]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Resep Sayur Asem:$userAvatar[$clientID]}{description:
**Bahan-bahan dibutuhkan:**
> **Labu Siam** - 1 buah
> **Jagung** - 1 buah
> **Kacang Panjang** - 1 buah
> **kangkung** - 1 buah
> **Asam Jawa** - 1 buah

**Note:** Developer telah mengurangi beberapa bahan agar player mudah membuat makanan nya
}};;;all;false]

$onlyIf[$getGlobalUserVar[sayurasemdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu tidak bisa melihat resep **Sayur Asem** karna belum membuka resep tersebut!}}{options:{ephemeral:true}}{extraOptions:{interaction:trye}}]

$c[sayurkacangpanjang]
$elseif[$toLowercase[$slashOption[nama]]==sayurkacangpanjang]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Resep Sayur Kacang Panjang:$userAvatar[$clientID]}{description:
**Bahan-bahan dibutuhkan:**
> **Kacang Panjang** - 1 ikat
> **Tempe** - 1 papan
}}]

$onlyIf[$getGlobalUserVar[sayurkacangpanjangdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu tidak bisa melihat resep **Sayur Kacang Panjang** karna belum membuka resep tersebut!}}{options:{ephemeral:true}}{extraOptions:{interaction:trye}}]
$endelseif

$c[sayurlabusiam]
$elseif[$toLowercase[$slashOption[nama]]==sayurlabusiam]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Resep Sayur Labu Siam:$userAvatar[$clientID]}{description:
**Bahan-bahan dibutuhkan:**
> **Labu Siam** - 1 buah
> **Tempe** - 1 papan
}}]

$onlyIf[$getGlobalUserVar[sayurlabusiamdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu tidak bisa melihat resep **Sayur Labu Siam** karna belum membuka resep tersebut!}}{options:{ephemeral:true}}{extraOptions:{interaction:trye}}]
$endelseif

$c[sayurkangkung]
$elseif[$toLowercase[$slashOption[nama]]==sayurkangkung]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Resep Sayur Kangkung:$userAvatar[$clientID]}{description:
**Bahan-bahan dibutuhkan:**
> **Kangkung** - 1 buah
}}]

$onlyIf[$getGlobalUserVar[sayurkangkungdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu tidak bisa melihat resep **Sayur Kangkung** karna belum membuka resep tersebut!}}{options:{ephemeral:true}}{extraOptions:{interaction:trye}}]
$endelseif

$c[sayurbuncis]
$elseif[$toLowercase[$slashOption[nama]]==sayurbuncis]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Resep Sayur Buncis:$userAvatar[$clientID]}{description:
**Bahan-bahan dibutuhkan:**
> **Buncis** - 100 gram
> **Tempe** - 1 papan
}}]

$onlyIf[$getGlobalUserVar[sayurbuncisdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu tidak bisa melihat resep **Sayur Buncis** karna belum membuka resep tersebut!}}{options:{ephemeral:true}}{extraOptions:{interaction:trye}}]
$endelseif

$c[sayurorektempe]
$elseif[$toLowercase[$slashOption[nama]]==sayurorektempe]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Resep Sayur Orek Tempe:$userAvatar[$clientID]}{description:
**Bahan-bahan dibutuhkan:**
> **Tempe** - 1 papan
}}]

$onlyIf[$getGlobalUserVar[sayurorektempedimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu tidak bisa melihat resep **Sayur Orek Tempe** karna belum membuka resep tersebut!}}{options:{ephemeral:true}}{extraOptions:{interaction:trye}}]
$endelseif

$c[sayurtahu]
$elseif[$toLowercase[$slashOption[nama]]==sayurtahu]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Resep Sayur Tahu:$userAvatar[$clientID]}{description:
**Bahan-bahan dibutuhkan:**
> **Tahu** - 3 pcs
}}]

$onlyIf[$getGlobalUserVar[sayurtahudimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu tidak bisa melihat resep **Sayur Tahu** karna belum membuka resep tersebut!}}{options:{ephemeral:true}}{extraOptions:{interaction:trye}}]
$endelseif

$c[sayursawihijau]
$elseif[$toLowercase[$slashOption[nama]]==sayursawihijau]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Resep Sayur Sawi Hijau:$userAvatar[$clientID]}{description:
**Bahan-bahan dibutuhkan:**
> **Sawi Hijau** - 1 buah
}}]

$onlyIf[$getGlobalUserVar[sayursawihijaudimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu tidak bisa melihat resep **Sayur Sawi Hijau** karna belum membuka resep tersebut!}}{options:{ephemeral:true}}{extraOptions:{interaction:trye}}]
$endelseif

$c[sayursawiputih]
$elseif[$toLowercase[$slashOption[nama]]==sayursawiputih]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Resep Sayur Sawi Putih:$userAvatar[$clientID]}{description:
**Bahan-bahan dibutuhkan:**
> **Sawi Putih** - 1 buah
> **Tahu** - 2 pcs
}}]

$onlyIf[$getGlobalUserVar[sayursawiputihdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu tidak bisa melihat resep **Sayur Sawi Putih** karna belum membuka resep tersebut!}}{options:{ephemeral:true}}{extraOptions:{interaction:trye}}]
$endelseif

$c[sayurtoge]
$elseif[$toLowercase[$slashOption[nama]]==sayurtoge]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Resep Sayur Toge:$userAvatar[$clientID]}{description:
**Bahan-bahan dibutuhkan:**
> **Toge** - 300 gram
> **Tahu** - 2 pcs
}}]

$onlyIf[$getGlobalUserVar[sayurtogedimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu tidak bisa melihat resep **Sayur Toge** karna belum membuka resep tersebut!}}{options:{ephemeral:true}}{extraOptions:{interaction:trye}}]
$endelseif

$c[sayurjamur]
$elseif[$toLowercase[$slashOption[nama]]==sayurjamur]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Resep Sayur Jamur:$userAvatar[$clientID]}{description:
**Bahan-bahan dibutuhkan:**
> **Jamur** - 2 buah
> **Tahu** - 2 pcs
}}]

$onlyIf[$getGlobalUserVar[sayurjamurdimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu tidak bisa melihat resep **Sayur Jamur** karna belum membuka resep tersebut!}}{options:{ephemeral:true}}{extraOptions:{interaction:trye}}]
$endelseif

$c[sayurtimun]
$elseif[$toLowercase[$slashOption[nama]]==sayurtimun]
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Resep Sayur Timun:$userAvatar[$clientID]}{description:
**Bahan-bahan dibutuhkan:**
> **Timun** - 1 buah
}}]

$onlyIf[$getGlobalUserVar[sayurtimundimiliki;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:
$getVar[alertmark]︱Kamu tidak bisa melihat resep **Sayur Timun** karna belum membuka resep tersebut!}}{options:{ephemeral:true}}{extraOptions:{interaction:trye}}]
$endelseif

$else
$interactionReply[;{newEmbed:{color:$getVar[cerror]}{description:
$getVar[xmark]︱Resep dengan nama **__$slashOption[nama]__** tidak tersedia dalam sistem bot!
}};;;all;true]

$endif

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
}]