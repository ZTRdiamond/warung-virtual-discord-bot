const aoijs = require("aoi.js")

function handle_vars(client) {
  client.variables(require("../vardata/mainvar.js"))
  client.variables(require("../vardata/economy.js"))
  client.variables(require("../vardata/utility.js"))
  client.variables(require("../vardata/tips.js"))
  client.variables(require("../vardata/emoji.js"))
  client.variables(require("../vardata/funfact.js"))

}
module.exports={
  handle_vars
}