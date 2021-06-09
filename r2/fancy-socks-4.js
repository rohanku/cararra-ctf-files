const WebSocket = require("ws");
const crypto = require("crypto");

const flag_encrypted =
  "17hdzd017hb3no17hb0h217ilem817eb1ut17e9mbr17gk1t217gdhs617h42zl17g7nsa17h7xh017i0guf17hszza17hm29f17fwlrn";

function encrypt(msg) {
  const bruh = [
    123019231,
    1230125901,
    508,
    52365235,
    412089123,
    1230580342,
    2030923023,
    145031231,
    1323015712,
  ];
  const asdf = [1231, 120309, 58, 89324234, 1023012, 1230580342];
  msg += new Array(3 - ((msg.length + 2) % 3)).join("a");
  encrypted = "";
  for (let i = 0; 3 * i < msg.length; i++) {
    let k =
      256 * 256 * msg.charCodeAt(3 * i) +
      256 * msg.charCodeAt(3 * i + 1) +
      msg.charCodeAt(3 * i + 2);
    for (let j = 0; j < bruh.length; j++) {
      k ^= bruh[j];
    }
    for (let j = 0; j < bruh.length; j++) {
      if (j % 2 == 0) {
        k += bruh[j];
      } else {
        k += 2 * bruh[j];
      }
    }
    for (let j = 0; j < asdf.length; j++) {
      k ^= asdf[j];
    }
    for (let j = 0; j < bruh.length; j++) {
      if (j % 2 == 1) {
        k += 2 * bruh[j];
      } else {
        k += bruh[j];
      }
    }
    for (let j = 0; j < asdf.length; j++) {
      if (j % 3 == 0) {
        k += asdf[j];
      } else {
        k += 2 * asdf[j];
      }
    }
    for (let j = 0; j < bruh.length; j++) {
      if (j % 2 == 1) {
        k -= 2 * bruh[j];
      } else {
        k -= bruh[j];
      }
    }
    encrypted += k.toString(36);
  }
  return encrypted;
}

function run(ws) {
  ws.send("Welcome to the ultimate FANCY SOCKS validator!");
  ws.send(
    `My very secret message that you'll never decrypt: ${flag_encrypted}`
  );
  ws.send(`Enter a message to be validated:`);
  ws.on("message", function incoming(message) {
    console.log(encrypt(message));
    if (encrypt(message.trim()) === flag_encrypted) {
      ws.send("Nice! That is the correct message.");
      ws.close();
    } else {
      ws.send("Sorry, that's incorrect.");
    }
    ws.send(`Enter a message to be validated:`);
  });
}

module.exports = { run };
