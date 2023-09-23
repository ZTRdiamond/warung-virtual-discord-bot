module.exports = ({
name: "help",
type: "interaction",
prototype: "slash",
code: `
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Help Commands:$userAvatar[$clientID]}{description:
**$username[$clientID]** adalah bot economy bertemakan warung makan, Bot dengan gameplay yang seru dan cara mainnya yang mudah dengan banyak fitur didalamnya.

・─ **General Commands**
> **/rules** - Menampilkan rules bot
> **/guide** - Tutorial bermain bot
> **/saran** - Beri saran ke developer
> **/report** - Laporkan sesuatu ke developer
> **/botinfo** - Informasi tentang bot
> **/ping** - Tes kecepatan respon bot
> **/developer** - Informasi developer
> **/funfact** - Fakta seru tentang bot
> **/tips** - Lihat tips menarik untuk bot
> **/premium** - Menjadi user premium

・─ **Game Commands**
> **/jualan** - Mulai berjualan dan hasilkan uang
> **/profile** - Menampilkan info pemain
> **/inventory** - Menampilkan barang yang dimiliki
> **/warung** - Menampilkan info warung pemain
> **/toko** - Tempat membeli barang kebutuhan
> **/beli** - Untuk membeli barang
> **/jual** - Untuk menjual barang
> **/buang** - Untuk membuang barang
> **/masak** - Mengolah barang mentah menjadi masakan enak
> **/pasar** - Tempat berbelanja barang mentah
> **/lokasi** - Lokasi berjualan
> **/peta** - Denah seluruh lokasi berjualan
> **/upgrade** - Meningkatkan tempat berjualan
> **/stats** - Info statistik pemain

*Join **[$username[$clientID] Support]($getVar[botserver])** untuk bertanya dan mengetahui info lebih lanjut!*
}{footer:$username[$clientID]}{timestamp}};;;all;false]
`
})
