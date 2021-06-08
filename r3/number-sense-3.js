const WebSocket = require("ws");
const crypto = require("crypto");

// The passphrase used to repeatably generate this RSA key.
const flag = "cararraCTF{gCd_g1v3S_P4Rt1AL_1nfo!!!}";

function getRandomInt(max, offset) {
  return BigInt(Math.floor(Math.random() * max) + offset);
}

function gcd(a, b) {
  if (b === 0n) {
    return a;
  }

  return gcd(b, a % b);
}

function run(ws) {
  n = 2n ** getRandomInt(50, 10) * 3n ** getRandomInt(50, 10) * 5n ** getRandomInt(50, 10)
  ws.send("Welcome to GUESS MY NUMBER!");
  ws.send(`Enter your guess X:`);
  ws.on("message", function incoming(message) {
    x = BigInt(message);
    if (x === n) {
      ws.send(flag);
      ws.close();
      return;
    }
    if (x < 1) {
      ws.send(`Invalid guess!`);
    } else {
      ws.send(
        `gcd(X, N) = ${gcd(x, n)}`
      );
    }
  ws.send(`Enter your guess X:`);
  });
}

module.exports = { run };
