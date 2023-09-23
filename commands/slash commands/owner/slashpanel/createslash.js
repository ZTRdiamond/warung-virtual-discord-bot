module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
$interactionModal[Create Slash;create-slash;{actionRow:{textInput:Slash Name:1:slashname::yes::1:200}}{actionRow:{textInput:Slash Desc:1:slashdesc::yes::1:1000}}{actionRow:{textInput:Tipe:1:slashtype::yes::1:30}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==create-slash;]
`
},{
    name: "create-slash",
    type: "interaction",
    prototype: "modal",
    $if: "old",
    code: `
$if[$textInputValue[slashtype]==global]
$interactionReply[;{newEmbed:{color:$getVar[color]}{title:Create Slash}{description:
**Slash created:**
name: $textInputValue[slashname]
desc: $textInputValue[slashdesc]
type: $textInputValue[slashtype]
}};;;all;yes]
$createApplicationCommand[global;$textInputValue[slashname];$textInputValue[slashdesc];true]

$else

$interactionReply[;{newEmbed:{color:$getVar[color]}{title:Create Slash}{description:
**Slash created:**
name: $textInputValue[slashname]
desc: $textInputValue[slashdesc]
type: $textInputValue[slashtype]
}};;;all;yes]
$createApplicationCommand[$guildID;$textInputValue[slashname];$textInputValue[slashdesc];true]

$endif
`
}]