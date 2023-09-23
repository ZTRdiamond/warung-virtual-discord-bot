module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
$interactionModal[Delete Slash;delete-slash;{actionRow:{textInput:Slash Name:1:slashname::yes::1:200}}{actionRow:{textInput:Slash Type:1:slashtype::yes::1:30}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==delete-slash;]
`
},{
    name: "delete-slash",
    type: "interaction",
    prototype: "modal",
    $if: "old",
    code: `
$if[$getApplicationCommandID[$textInputValue[slashname];$textInputValue[slashtype]]!=]
$interactionReply[;{newEmbed:{color:$getVar[color]}{title:Delete Slash#COLON# $textInputValue[slashname]}{description:
Berhasil menghapus slash command nya ngap!
$deleteApplicationCommand[$textInputValue[slashtype];$getApplicationCommandID[$textInputValue[slashname];$textInputValue[slashtype]]]}}
;;;all;yes]

$else
$interactionReply[;{newEmbed:{color:$getVar[color]}{title:Delete Slash#COLON# $textInputValue[slashname]}{description:
Gk bisa ngehapus cok, Soalnya gw gk nemu slash nya cokk sumpah}}
;;;all;yes]

$endif
`
}]