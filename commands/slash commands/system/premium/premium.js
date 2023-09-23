module.exports = [{
    name: "premium",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$if[$getGlobalUserVar[wvpremium;$authorID]==true]
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:$username[$authorID] Premium:$userAvatar[$authorID]}{description:
**Info Premium:**
> **Premium:** $get[statuspremium]
> **Tipe Premium:** $get[tipepremium]
> **Expired:** $get[expiredpremium]
}};;;all;false]

$else
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Premium Perks:$userAvatar[$clientID]}{description:
**Info Premium:**
> **Premium:** $get[statuspremium]
> **Tipe Premium:** $get[tipepremium]
> **Expired:** $get[expiredpremium]

*Premium List Sedang Dibuat...*
}{footer:Warung Virtual | ©Zanixon Development}};{actionRow:{button:???:3:delete:no}};;all;false]

$endif

$let[statuspremium;$replaceText[$replaceText[$getGlobalUserVar[wvpremium;$authorID];true;Aktif;1];false;Tidak Aktif;1]]
$let[tipepremium;$getGlobalUserVar[wvpremiumtype;$authorID]]
$let[expiredpremium;<t:$getGlobalUserVar[wvpremiumexpired;$authorID]:R>]
`
}]