const aoijs = require("aoi.js")


let text = require("../config/slash.json")
/*
Handles callbacks.
*/

function handle_slash(bot) {
  title=`
let title="$log[ ╭──────◉ ⏳ Load Slash Commands]"
bot.readyCommand({
          channel:"",
          code: title
})`
  eval(title);

  for(var item in text.slash) {
    a=`
let a="$log[<>──◉ Slash loaded...]"
bot.readyCommand({
          channel:"",
          code:text.slash[item]+a
       })`
    //eval(a);
  }
    
  loaded=`
let loaded="$log[ ╰──────◉ ✅ Slash Commands Loaded]"
bot.readyCommand({
          channel:"",
          code: loaded
})`
  eval(loaded);
    
}

module.exports={
  handle_slash
}