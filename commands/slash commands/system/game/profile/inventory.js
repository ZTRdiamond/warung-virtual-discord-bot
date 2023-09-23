module.exports = [{
  name: "inventory",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Inventory $username[$authorID]:$userAvatar[$authorID]}{description:
**List sayuran segar dipunya:**
$get[sayuran]
}{footer:Penyimpanan 1/3}{timestamp}};{actionRow:{button: :2:inventory-sembako:no:<#COLON#leftsign#COLON#1077527580233711667>}{button:Warung:3:warung:no}{button:Menu:2:menu:no}{button: :2:inventory-daging:no:<#COLON#rightsign#COLON#1077527656972681266>}};;all;false]

$let[sayuran;$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[terong;$authorID]>=1];true;> **Terong:** x$numberSeparator[$getGlobalUserVar[terong;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[kangkung;$authorID]>=1];true;> **Kangkung:** x$numberSeparator[$getGlobalUserVar[kangkung;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[sawihijau;$authorID]>=1];true;> **Sawi Hijau:** x$numberSeparator[$getGlobalUserVar[sawihijau;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[sawiputih;$authorID]>=1];true;> **Sawi Putih:** x$numberSeparator[$getGlobalUserVar[sawiputih;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[tomat;$authorID]>=1];true;> **Tomat:** x$numberSeparator[$getGlobalUserVar[tomat;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[labusiam;$authorID]>=1];true;> **Labu Siam:** x$numberSeparator[$getGlobalUserVar[labusiam;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[toge;$authorID]>=1];true;> **Toge:** $numberSeparator[$getGlobalUserVar[toge;$authorID];,] gram\n;1]$replaceText[$checkCondition[$getGlobalUserVar[jamur;$authorID]>=1];true;> **Jamur:** $numberSeparator[$getGlobalUserVar[jamur;$authorID];,] gram\n;1]$replaceText[$checkCondition[$getGlobalUserVar[jagung;$authorID]>=1];true;> **Jagung:** x$numberSeparator[$getGlobalUserVar[jagung;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[asamjawa;$authorID]>=1];true;> **Asam Jawa:** $numberSeparator[$getGlobalUserVar[asamjawa;$authorID];,] buah\n;1]$replaceText[$checkCondition[$getGlobalUserVar[kacangpanjang;$authorID]>=1];true;> **Kacang Panjang:** x$numberSeparator[$getGlobalUserVar[kacangpanjang;$authorID];,] ikat\n;1]$replaceText[$checkCondition[$getGlobalUserVar[tempe;$authorID]>=1];true;> **Tempe:** $numberSeparator[$getGlobalUserVar[tempe;$authorID];,] gram\n;1]$replaceText[$checkCondition[$getGlobalUserVar[tahu;$authorID]>=1];true;> **Tahu:** $numberSeparator[$getGlobalUserVar[tahu;$authorID];,] pcs\n;1]$replaceText[$checkCondition[$getGlobalUserVar[timun;$authorID]>=1];true;> **Timun:** x$numberSeparator[$getGlobalUserVar[timun;$authorID];,];1];false;g;]]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "inventory-sayur",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Inventory $username[$authorID]:$userAvatar[$authorID]}{description:
**List sayuran segar dipunya:**
$get[sayuran]
}{footer:Penyimpanan 1/3}{timestamp}};{actionRow:{button: :2:inventory-sembako:no:<#COLON#leftsign#COLON#1077527580233711667>}{button:Warung:3:warung:no}{button:Menu:2:menu:no}{button: :2:inventory-daging:no:<#COLON#rightsign#COLON#1077527656972681266>}};;all;false]

$let[sayuran;$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[terong;$authorID]>=1];true;> **Terong:** x$numberSeparator[$getGlobalUserVar[terong;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[kangkung;$authorID]>=1];true;> **Kangkung:** x$numberSeparator[$getGlobalUserVar[kangkung;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[sawihijau;$authorID]>=1];true;> **Sawi Hijau:** x$numberSeparator[$getGlobalUserVar[sawihijau;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[sawiputih;$authorID]>=1];true;> **Sawi Putih:** x$numberSeparator[$getGlobalUserVar[sawiputih;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[tomat;$authorID]>=1];true;> **Tomat:** x$numberSeparator[$getGlobalUserVar[tomat;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[labusiam;$authorID]>=1];true;> **Labu Siam:** x$numberSeparator[$getGlobalUserVar[labusiam;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[toge;$authorID]>=1];true;> **Toge:** $numberSeparator[$getGlobalUserVar[toge;$authorID];,] gram\n;1]$replaceText[$checkCondition[$getGlobalUserVar[jamur;$authorID]>=1];true;> **Jamur:** $numberSeparator[$getGlobalUserVar[jamur;$authorID];,] gram\n;1]$replaceText[$checkCondition[$getGlobalUserVar[jagung;$authorID]>=1];true;> **Jagung:** x$numberSeparator[$getGlobalUserVar[jagung;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[asamjawa;$authorID]>=1];true;> **Asam Jawa:** $numberSeparator[$getGlobalUserVar[asamjawa;$authorID];,] buah\n;1]$replaceText[$checkCondition[$getGlobalUserVar[kacangpanjang;$authorID]>=1];true;> **Kacang Panjang:** x$numberSeparator[$getGlobalUserVar[kacangpanjang;$authorID];,] ikat\n;1]$replaceText[$checkCondition[$getGlobalUserVar[tempe;$authorID]>=1];true;> **Tempe:** $numberSeparator[$getGlobalUserVar[tempe;$authorID];,] gram\n;1]$replaceText[$checkCondition[$getGlobalUserVar[tahu;$authorID]>=1];true;> **Tahu:** $numberSeparator[$getGlobalUserVar[tahu;$authorID];,] pcs\n;1]$replaceText[$checkCondition[$getGlobalUserVar[timun;$authorID]>=1];true;> **Timun:** x$numberSeparator[$getGlobalUserVar[timun;$authorID];,];1];false;g;]]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "inventory-daging",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Inventory $username[$authorID]:$userAvatar[$authorID]}{description:
**List ikan segar dipunya:**
$get[ikan]

**List daging segar dipunya:**
$get[daging]
}{footer:Penyimpanan 2/3}{timestamp}};{actionRow:{button: :2:inventory-sayur:no:<#COLON#leftsign#COLON#1077527580233711667>}{button:Warung:3:warung:no}{button:Menu:2:menu:no}{button: :2:inventory-sembako:no:<#COLON#rightsign#COLON#1077527656972681266>}};;all;false]

$let[ikan;$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[ikanlele;$authorID]>=1];true;> **Ikan Lele:** $numberSeparator[$getGlobalUserVar[ikanlele;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[ikanbawal;$authorID]>=1];true;> **Ikan Bawal:** $numberSeparator[$getGlobalUserVar[ikanbawal;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[ikankembung;$authorID]>=1];true;> **Ikan Kembung:** $numberSeparator[$getGlobalUserVar[ikankembung;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[ikankakap;$authorID]>=1];true;> **Ikan Kakap:** $numberSeparator[$getGlobalUserVar[ikankakap;$authorID];,]\n;1];false;g;]]

$let[daging;$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[dagingayam;$authorID]>=1];true;> **Daging Ayam:** $numberSeparator[$getGlobalUserVar[dagingayam;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[dagingsapi;$authorID]>=1];true;> **Daging Sapi:** $numberSeparator[$getGlobalUserVar[dagingsapi;$authorID];,]\n;1];false;g;]]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
  name: "inventory-sembako",
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Inventory $username[$authorID]:$userAvatar[$authorID]}{description:
**List sembako dipunya:**
$get[sembako]
}{footer:Penyimpanan 3/3}{timestamp}};{actionRow:{button: :2:inventory-daging:no:<#COLON#leftsign#COLON#1077527580233711667>}{button:Warung:3:warung:no}{button:Menu:2:menu:no}{button: :2:inventory-sayur:no:<#COLON#rightsign#COLON#1077527656972681266>}};;all;false]

$let[sembako;$replaceTextWithRegex[$replaceText[$checkCondition[$getGlobalUserVar[bumbuserbaguna;$authorID]>=1];true;> **Bumbu Serba Guna:** $numberSeparator[$getGlobalUserVar[bumbuserbaguna;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[penyedaprasa;$authorID]>=1];true;> **Penyedap Rasa:** $numberSeparator[$getGlobalUserVar[penyedaprasa;$authorID];,]\n;1]$replaceText[$checkCondition[$getGlobalUserVar[beras;$authorID]>=1];true;> **Beras:** $numberSeparator[$getGlobalUserVar[beras;$authorID];,] liter\n;1]$replaceText[$checkCondition[$getGlobalUserVar[minyak;$authorID]>=1];true;> **Minyak:** $numberSeparator[$getGlobalUserVar[minyak;$authorID];,] liter\n;1]$replaceText[$checkCondition[$getGlobalUserVar[mentega;$authorID]>=1];true;> **Mentega:** $numberSeparator[$getGlobalUserVar[mentega;$authorID];,] gram;1];false;g;]]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
}]