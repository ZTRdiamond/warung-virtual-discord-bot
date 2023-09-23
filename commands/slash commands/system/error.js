module.exports = [{
  name: "error",
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[;{newEmbed:{color:$getVar[calert]}{description:$getVar[alertmark]︱Mohon maaf atas ketidaknyamanan nya, Saat ini bot belum selesai sepenuhnya mohon bersabar karna fitur lainnya akan tersedia segera.}};;;all;true]

$globalCooldown[30m;]
`
}]