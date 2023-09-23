module.exports = [{
  name: "rules",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[;{newEmbed:{color:$getVar[color]}{author:$username[$clientID] Rules:$userAvatar[$clientID]}{description:
Peraturan Yang Wajib Diketahui Player!

**Rules:**
> 1. Dilarang melakukan bug abuse
> 2. Dilarang memanfaatkan bug
> 3. Wajib melaporkan bug kepada developer
> 4. Dilarang menggunakan auto clicker(AFK)
> 5. Wajib Melaporkan player yang memanfaatkan bug

Peraturan diatas dapat berubah sewaktu-waktu.
}{footer:$usertag[$botOwnerID] | ©Zanixon Development}};;;all;true]
`
}]