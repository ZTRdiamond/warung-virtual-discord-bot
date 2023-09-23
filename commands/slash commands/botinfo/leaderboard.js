module.exports = [{
  name: "leaderboard",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Leaderboard:$userAvatar[$clientID]}{description:
────────────────────────────
$get[lb-1]
────────────────────────────
**Posisi Kamu:** No.$getLeaderboardInfo[uangrp;$authorID;globaluser;top]︱Rp.$numberSeparator[$getLeaderboardInfo[uangrp;$authorID;globaluser;value];,]
}{footer:Halaman 1 | $username[$clientID]}};{actionRow:{button:Halaman:3:halaman:no}{button:Warung:3:warung:no}};;all;false]

$let[lb-1;$globalUserLeaderboard[uangrp;asc;**{top}** ). {username}︱{value};20;1]]
`
},{
  name: "halaman",
  type: "interaction",
  prototype: "button",
  code: `
$interactionModal[Cari Halaman Leaderboard;lb-halaman;{actionRow:{textInput:Nomor Halaman:1:no-halaman:Contoh#COLON# 10:yes::1:10}}]
`
},{
  name: "lb-halaman",
  type: "interaction",
  prototype: "modal",
  code: `
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{author:Leaderboard:$userAvatar[$clientID]}{description:
────────────────────────────
$get[lb-1]
────────────────────────────
**Posisi Kamu:** No.$getLeaderboardInfo[uangrp;$authorID;globaluser;top]︱Rp.$numberSeparator[$getLeaderboardInfo[uangrp;$authorID;globaluser;value];,]
}{footer:Halaman $get[no-halaman] | $username[$clientID]}};{actionRow:{button:Halaman:3:halaman:no}{button:Warung:3:warung:no}};;all;false]

$let[lb-1;$globalUserLeaderboard[uangrp;asc;**{top}** ). {username}︱{value};20;$get[no-halaman]]]

$onlyIf[$globalUserLeaderboard[uangrp;asc;{top};10;$get[no-halaman]]!=;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Halaman yang kamu cari tidak tersedia silahkan coba nomor halaman lain!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$isNumber[$get[no-halaman]]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Nomor halaman tidak valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$let[no-halaman;$textInputValue[no-halaman]]
`
}]