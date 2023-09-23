module.exports = [{
    name: "delete",
    type: "interaction",
    prototype: "button",
    code: `
$interactionReply[Message Deleted!;;;;all;true]
$deleteMessage[$messageID;$channelID]
`
}]