module.exports = {
    name: "$alias",
    description: "blbla",
    usage: "$alias[alias]",
    params: ["alias"],
    type: "aoi.js",
    code: `
$get[{alias}]

$let[stam;$math[100*$getGlobalUserVar[stamina;$authorID]/$getGlobalUserVar[staminamax;$authorID]]]
$let[hari;$numberSeparator[$getGlobalUserVar[harijualan;$authorID];,]]
$let[uang;$numberSeparator[$getGlobalUserVar[uangrp;$authorID];,]]
$let[reputasi;$abbreviate[$getGlobalUserVar[reputasi;$authorID];1]]
`
}