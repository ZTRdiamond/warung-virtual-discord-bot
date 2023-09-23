module.exports = [{
    name: "guide",
    type: "interaction",
    prototype: "slash",
    code: `
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:Warung Virtual Guide:$userAvatar[$clientID]}{description:
Test Message
}{footer:Warung Virtual | ©Zanixon Development}};{actionRow:{button:Test:3:delete:no}};;all;false]
`
}]