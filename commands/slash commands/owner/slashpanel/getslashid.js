module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
$interactionModal[Get Slash ID;get-slashid1;{actionRow:{textInput:Slash Name:1:slashname::yes::1:200}}{actionRow:{textInput:Slash Type:1:slashtype::yes::1:30}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==get-slashid;]
`
},{
    name: "get-slashid1",
    type: "interaction",
    prototype: "modal",
    $if: "old",
    code: `
$if[$getApplicationCommandID[$textInputValue[slashname];$textInputValue[slashtype]]!=]
$interactionReply[;{newEmbed:{color:$getVar[color]}{title:Get Slash ID#COLON# $textInputValue[slashname]}{description:
$getApplicationCommandID[$textInputValue[slashname];$textInputValue[slashtype]]}}
;;;all;yes]

$else
$interactionReply[;{newEmbed:{color:$getVar[color]}{title:Get Slash ID#COLON# $textInputValue[slashname]}{description:
Gw gk nemu slash \`/$textInputValue[slashname]\` nya cokk sumpah!}}
;;;all;yes]

$endif
`
}]