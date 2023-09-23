const aoijs = require("aoi.js")


let text = require("../config/callbacks.json")
/*
Handles callbacks.
*/

function handle_callbacks(bot) {
  console.log("╭───◉ " + "\x1b[1;4;36mCALLBACK EVENTS");
  for(var item in text.callbacks) {
  console.log(text.callbacks[item]);
  eval(text.callbacks[item]);
  }
  console.log("╰───◉ " + "\x1b[1;4;36mCALLBACK EVENTS");

}


module.exports={
  handle_callbacks
}