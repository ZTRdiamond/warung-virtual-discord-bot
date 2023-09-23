module.exports = [{
  name: "profile",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[;{newEmbed:{color:$getGlobalUserVar[color;$authorID]}{author:$nickname[$authorID;$guildID;yes] Profile:$userAvatar[$authorID]}{description:
*Hari ke $get[hari] berjualan*
*Level* $get[level]
**Stamina:** $get[stamina]
**Uang:** Rp.$get[uang]
**Reputasi:** $get[reputasi] poin
}};{actionRow:{button:Warung:3:warung:no}};;all;false]


$let[stamina;$math[100*$getGlobalUserVar[stamina;$authorID]/$getGlobalUserVar[staminamax;$authorID]]%]
$let[hari;$numberSeparator[$getGlobalUserVar[harijualan;$authorID];,]]
$let[uang;$numberSeparator[$getGlobalUserVar[uangrp;$authorID];,]]
$let[reputasi;$abbreviate[$getGlobalUserVar[reputasi;$authorID];1]]
$let[level;**$numberSeparator[$getGlobalUserVar[wvlevel;$authorID];,]** - ($numberSeparator[$getGlobalUserVar[wvexp;$authorID];,]/$numberSeparator[$getGlobalUserVar[wvreqexp;$authorID];,]・$math[100*$getGlobalUserVar[wvexp;$authorID]/$getGlobalUserVar[wvreqexp;$authorID]]%)]

$onlyIf[$getGlobalUserVar[startbot;$authorID]==true;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Saya lihat akun kamu belum terdaftar pada bot, Silahkan lakukan pendaftaran dengan **/start** lalu isi form nama warung kamu, Nanti kamu akan otomatis terdaftar pada bot.}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
}]