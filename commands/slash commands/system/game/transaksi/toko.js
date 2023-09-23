module.exports = [{
  name: "toko",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Toko:$userAvatar[$clientID]}{description:
**Daftar toko:**
> **Toko Resep** - Menjual berbagai resep makanan
> **Toko sembako** - Menjual berbagai bahan sembako
> **Toko Booster** - Menjual berbagai booster
}};{actionRow:{button:Toko Resep:3:tokoresep:no}{button:Toko Sembako:3:tokosembako:no}{button:Toko Booster:3:tokobooster:no}};;all;false]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "toko",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Toko:$userAvatar[$clientID]}{description:
**Daftar toko:**
> **Toko Resep** - Menjual berbagai resep makanan
> **Toko sembako** - Menjual berbagai bahan sembako
> **Toko Booster** - Menjual berbagai booster
}};{actionRow:{button:Toko Resep:3:tokoresep:no}{button:Toko Sembako:3:tokosembako:no}{button:Toko Booster:3:tokobooster:no}};;all;false]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "tokoresep",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Toko Resep Bu Puji:$userAvatar[$clientID]}{description:
**List resep**
$get[resep]
}};{actionRow:{button:Kembali:2:toko}};;all;false]

$let[resep;$replaceText[$replaceText[$getGlobalUserVar[sayurasemdimiliki;$authorID];true;> **Sayur Asem** - Owned\n;1];false;> **Sayur Asem** - Rp.30,000\n;1]$replaceText[$replaceText[$getGlobalUserVar[sayurkacangpanjangdimiliki;$authorID];true;> **Sayur Kacang Panjang** - Owned\n;1];false;> **Sayur Kacang Panjang** - Rp.50,000\n;1]$replaceText[$replaceText[$getGlobalUserVar[sayurlabusiamdimiliki;$authorID];true;> **Sayur Labu Siam** - Owned\n;1];false;> **Sayur Labu Siam** - Rp.75,000\n;1]$replaceText[$replaceText[$getGlobalUserVar[sayurkangkungdimiliki;$authorID];true;> **Sayur Kangkung** - Owned\n;1];false;> **Sayur Kangkung** - Rp.35,000\n;1]$replaceText[$replaceText[$getGlobalUserVar[sayurbuncisdimiliki;$authorID];true;> **Sayur Buncis** - Owned\n;1];false;> **Sayur Buncis** - Rp.57,000\n;1]$replaceText[$replaceText[$getGlobalUserVar[sayurorektempedimiliki;$authorID];true;> **Sayur Orek Tempe** - Owned\n;1];false;> **Sayur Orek Tempe** - Rp.78,000\n;1]$replaceText[$replaceText[$getGlobalUserVar[sayurtahudimiliki;$authorID];true;> **Sayur Tahu** - Owned\n;1];false;> **Sayur Tahu** - Rp.80,000\n;1]$replaceText[$replaceText[$getGlobalUserVar[sayursawihijaudimiliki;$authorID];true;> **Sayur Sawi Hijau** - Owned\n;1];false;> **Sayur Sawi Hijau** - Rp.95,000\n;1]$replaceText[$replaceText[$getGlobalUserVar[sayursawiputihdimiliki;$authorID];true;> **Sayur Sawi Putih** - Owned\n;1];false;> **Sayur Sawi Putih** - Rp.95,000\n;1]$replaceText[$replaceText[$getGlobalUserVar[sayurtogedimiliki;$authorID];true;> **Sayur Toge** - Owned\n;1];false;> **Sayur Toge** - Rp.43,000\n;1]$replaceText[$replaceText[$getGlobalUserVar[sayurjamurdimiliki;$authorID];true;> **Sayur Jamur** - Owned\n;1];false;> **Sayur Jamur** - Rp.63,000\n;1]$replaceText[$replaceText[$getGlobalUserVar[sayurtimundimiliki;$authorID];true;> **Sayur Timun** - Owned\n;1];false;> **Sayur Timun** - Rp.26,000\n;1]]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "tokosembako",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{author:Toko Sembako Pak Edi :$userAvatar[$clientID]}{description:
**List Barang:**
>>> **Bumbu Serba Guna** - Rp.5,000/saset
**Penyedap Rasa** - Rp.1,000/saset
**Beras** - Rp.8,500/liter
**Minyak** - Rp.15,000/liter
**Mentega** - Rp.7,500/200gram
}{footer:Halaman 1/?}{timestamp}};{actionRow:{button:Kembali:2:toko}};;all;false]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "tokobooster",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Toko Booster Bang Udin:$userAvatar[$clientID]}{description:
**List Booster:**
>>> **Booster Pembeli** - Menaikan 5% pembeli datang ke jualan mu
**Booster Harga** - Menaikan 10% semua harga dagangan mu
**Booster Antrian** - Menaikan 10% kapasitas antrian di tempat jualan mu
}};{actionRow:{button:Beli Booster Pembeli x1:3:beliboosterpembeli:no}{button:Beli Booster Harga x1:3:beliboosterharga:no}{button:Beli Booster Antrian x1:3:beliboosterantrian:no}{button:Kembali:2:toko:no}};;all;false]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
}]