module.exports = [{
  name: "redeem",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `
$if[$toLowercase[$slashOption[kode]]==starter]
$setGlobalUserVar[starter;true;$authorID]
$setGlobalUserVar[labusiam;$sum[$getGlobalUserVar[labusiam;$authorID];5];$authorID]
$setGlobalUserVar[asamjawa;$sum[$getGlobalUserVar[asamjawa;$authorID];5];$authorID]
$setGlobalUserVar[kangkung;$sum[$getGlobalUserVar[kangkung;$authorID];5];$authorID]
$setGlobalUserVar[kacangpanjang;$sum[$getGlobalUserVar[kacangpanjang;$authorID];5];$authorID]
$setGlobalUserVar[sayurtahujadi;$sum[$getGlobalUserVar[sayurtahujadi;$authorID];5];$authorID]
$setGlobalUserVar[uangrp;$sum[$getGlobalUserVar[uangrp;$authorID];20000];$authorID]

$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Redeem Code:$userAvatar[$authorID]}{description:
$getVar[checkmark]︱Berhasil mengklaim kode **STARTER** dan kamu mendapatkan reward berikut#COLON#
> Uang Rp.20,000
> Sayur Tahu Jadi x5
> Kangkung x5
> Kacang Panjang x5
> Asam Jawa x5
> Labu Siam x5
}};;;all;false]

$onlyIf[$getGlobalUserVar[starter;$authorID]==false;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Kamu telah menggunakan kode ini sebelumnya, Jadi kamu tidak dapat menggunakan nya lagi.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$else
$interactionReply[;{newEmbed:{color:$getVar[cerror]}{author:Redeem Code:$userAvatar[$clientID]}{description:$getVar[xmark]︱Gagal melakukan redeem kode, Karna kode **$slashOption[kode]** yang kamu masukan tidak valid!}};;;all;true]
$endif
`
}]