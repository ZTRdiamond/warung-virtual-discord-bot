const vari = require("./variablehandler.js")
const cmd = require("./commandhandler.js")
const call = require("./callbackhandler.js")
const slash = require("./slashhandler.js")
const status = require("./statushandler.js")

/*
Combining Variable Handler and Command Handler into one handler. 
*/
function handler_main(client) {
  cmd.handle_commands(client);
  slash.handle_slash(client);//Handling commands. See commandhandler.js
  console.log("╭───◉  " + "Loaded Command Handler");
  vari.handle_vars(client);//Handling variables. See variablehandler.js.
  console.log("|───◉  " + "Loaded Variable Handler");
  status.handle_status(client);//Handling variables. See variablehandler.js.
  console.log("|───◉  " + "Loaded Status Handler");
  console.log("╰───◉ " + "Main Handler Ready!");
  

}

module.exports={ 
  handler_main
}
