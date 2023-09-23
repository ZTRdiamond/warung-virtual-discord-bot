module.exports = [{
  name: "pengaturan",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:Menu Pengaturan:$userAvatar[$authoriD]}{description:
Klik menu selektor dibawah untuk melihat menu pengaturan yang ada untuk player.
}{timestamp}};{actionRow:{stringInput:pengaturan-menu:Pengaturan:1:1:{option:Ganti Nama Warung:ganti-nama-wr:Klik untuk mulai mengganti nama warungmu:no:}{option:Ganti Warna Embed:ganti-warna-embed:Klik untuk mulai mengganti warna embed warungmu:no:⭐}}};;all;true]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
}]