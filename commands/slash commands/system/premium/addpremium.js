module.exports = [{
    name: "addpremium",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$if[$toLowerCase[$slashOption[tipe]]==gold]
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Add Premium To User:$userAvatar[$clientID]}{description:
Sukses menambahkan **Premium** ke **$userTag[$get[userID]]** 
> **Tipe Premium:** $get[tipeprem]
> **Expired:** $get[expiredprem]
}{footer:Warung Virtual Bot}};;;all;false]

$else
$interactionReply[;{newEmbed:{color:$getVar[cerror]}{author:Add Premium To User:$userAvatar[$clientID]}{description:$getVar[xmark]︱Tipe premium tidak valid, Tolong masukan tipe yang benar!}};;;all;true]

$endif

$let[userID;$slashOption[userid]]
$let[tipeprem;$slashOption[tipe]]
$let[expiredprem;<t:$truncate[$divide[$sum[$datestamp;$parseTime[$slashOption[time]]];1000]]:R>]

$onlyIf[$parseTime[$slashOption[time]]!=-1;{newEmbed:{color:$getVar[cerror]}{description:$getVar[xmark]︱Waktu expired yang kamu masukan tidak benar, Tolong masukan format waktu yang benar seperti \`time: 20d\`}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$userExists[$slashOption[userid]]==true;{newEmbed:{color:$getVar[cerror]}{description:$getVar[xmark]︱UserID yang kamu masukan tidak valid, Tolong masukan ID dengan benar dan valid!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]

$onlyIf[$getGlobalUserVar[op;$authorID]==true;{newEmbed:{color:$getVar[cerror]}{description:$getVar[xmark]︱Kamu tidak bisa menggunakan command ini!}}{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`
},{
    name: "confirm-prem",
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `

`
}]