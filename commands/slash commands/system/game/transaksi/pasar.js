module.exports = [{
  name: "pasar",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Pasar Wavi:$userAvatar[$clientID]}{description:
*Blok 1 - Aneka Sayuran Segar*
**List Sayuran Segar:**
>>> **Terong** - Rp.1,200/buah
**Kangkung** - Rp.2,500/buah
**Sawi Hijau** - Rp.2,500/buah
**Sawi Putih** - Rp.3,500/buah
**Tomat** - Rp.1,200/buah
**Labu Siam** - Rp.700/buah
**Toge** - Rp.800/100gram
**Jamur** - Rp.1,300/buah
**Jagung** - Rp.1,500/buah
**Asam Jawa** - Rp.2,300/buah
**Kacang Panjang** - Rp.1,000/ikat
**Tempe** - Rp.2,000/papan
**Tahu** - Rp.800/pcs
**Timun** - Rp.3,000/buah
}{footer:Blok 1/3}{timestamp}};{actionRow:{button: :2:blok3-pasar:no:<#COLON#leftsign#COLON#1077527580233711667>}{button: :2:blok2-pasar:no:<#COLON#rightsign#COLON#1077527656972681266>}};;all;false]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "blok1-pasar",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{author:Pasar Wavi:$userAvatar[$clientID]}{description:
*Blok 1 - Aneka Sayuran Segar*
**List Sayuran Segar:**
>>> **Terong** - 
**Kangkung** - Rp.2,500/buah
**Sawi Hijau** - Rp.2,500/buah
**Sawi Putih** - Rp.3,500/buah
**Tomat** - Rp.1,200/buah
**Labu Siam** - Rp.700/buah
**Toge** - Rp.800/100gram
**Jamur** - Rp.3,000/100gram
**Jagung** - Rp.1,500/buah
**Asam Jawa** - Rp.3,300/100gram
**Kacang Panjang** - Rp.6,000/ikat
**Tempe** - Rp.3,000/250gram
**Tahu** - Rp.8,000/10pcs
**Timun** - Rp.3,000/buah
}{footer:Blok 1/3}{timestamp}};{actionRow:{button: :2:blok3-pasar:no:<#COLON#leftsign#COLON#1077527580233711667>}{button: :2:blok2-pasar:no:<#COLON#rightsign#COLON#1077527656972681266>}};;all;false]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "blok2-pasar",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{author:Pasar Wavi:$userAvatar[$clientID]}{description:
*Blok 2 - Aneka Ikan Segar*
**List Ikan Segar:**
>>> **Ikan Lele** - Rp.4,000/ekor
**Ikan Bawal** - Rp.3,500/ekor
**Ikan Kembung** - Rp.4,000/ekor
**Ikan Kakap** - Rp.25,000/ekor
**Ikan Gurame** - Rp.30,000/ekor
}{footer:Blok 2/3}{timestamp}};{actionRow:{button: :2:blok1-pasar:no:<#COLON#leftsign#COLON#1077527580233711667>}{button: :2:blok3-pasar:no:<#COLON#rightsign#COLON#1077527656972681266>}};;all;false]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "blok3-pasar",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{author:Pasar Wavi:$userAvatar[$clientID]}{description:
*Blok 3 - Aneka Daging Segar*
**List Ikan Segar:**
>>> **Daging Ayam** - Rp.5,000/potong
**Daging Sapi** - Rp.10,000/potong
}{footer:Blok 3/3}{timestamp}};{actionRow:{button: :2:blok2-pasar:no:<#COLON#leftsign#COLON#1077527580233711667>}{button: :2:blok1-pasar:no:<#COLON#rightsign#COLON#1077527656972681266>}};;all;false]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
//daging sapi Rp.130/gram
}]