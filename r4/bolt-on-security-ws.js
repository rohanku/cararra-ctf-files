const WebSocket = require("ws");

const flag = "cararraCTF{h@rd_2_pr0teCT_inh3r3ntly_InSECURE_functions}";
const favorite_expression = "21*69*420*69696+120391238019283091283";

function run(ws) {
  ws.send("Welcome to Bob's quick calculator implementation!");
  ws.send(`Enter your expression (if you guess my favorite expression, I'll give you the flag!):`);
  ws.on("message", function incoming(message) {
    try {
      if (message.trim() === favorite_expression) {
        ws.send(`You guessed it! Here's your flag: ${flag}`);
        ws.close();
        return;
      }
      ans = eval(message);
      if (typeof(ans) === "number") {
        ws.send(`${ans}`);
      } else {
        ws.send(`That was not a numerical expression!`);
      }
    } catch (e) {
      console.log(e);
      ws.send(`Could not evaluate that expression`);
    }
    ws.send(`Enter your expression:`);
  });
}

module.exports = { run };
