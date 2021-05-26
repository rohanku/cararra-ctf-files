const WebSocket = require('ws');
const flag = "VIGENERETOOEASY"
// Create a server object
function run(ws) {

    console.log('opened connection');
    ws.send('Welcome to the ultimate FANCY SOCKS ENCRYPTOR!');
    ws.send(`Enter a message to be encrypted:`);
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
      message = message.toUpperCase().trim();
      let encrypted = "";
      for (let i = 0; i < message.length; i++) {
        encrypted += String.fromCharCode((flag.charCodeAt(i % flag.length) + message.charCodeAt(i) - 2*"A".charCodeAt(0))%26 + "A".charCodeAt(0))
      }
      ws.send(`Here is your encrypted message: ${encrypted}`);
      ws.send(`Enter a message to be encrypted:`);
  });
}

module.exports = { run };
