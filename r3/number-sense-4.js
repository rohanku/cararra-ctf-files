const WebSocket = require("ws");
const crypto = require("crypto");

// The passphrase used to repeatably generate this RSA key.
const flag = "cararraCTF{unl1m1t3d_tr1es_t00_eZ}";

function intLog(base, num) {
  let lo = 0n;
  let hi = 10000n;
  while (lo + 1n < hi) {
    let mid = (lo + hi) / 2n;
    let pow = base ** mid;
    if (pow <= num) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return lo;
}

function getRandomInt(base, max, offset) {
  return (
    base **
    BigInt(
      Math.floor(Math.random() * Number(intLog(base, max)) - offset) + offset
    )
  );
}

function gcd(a, b) {
  if (b === 0n) {
    return a;
  }

  return gcd(b, a % b);
}

function run(ws) {
  let max = 2n ** 100n;
  let primes = [2n, 3n, 5n, 7n, 11n, 13n];
  let n = 1n;
  let a = 1n;
  for (let i = 0; i < primes.length; i++) {
    n *= getRandomInt(primes[i], max / n, 10);
    a *= primes[i];
  }
  ws.send("Welcome to GUESS MY NUMBER!");
  ws.send(`Enter your guess X:`);
  ws.on("message", function incoming(message) {
    if (ws.readyState !== WebSocket.OPEN) {
      return;
    }
    try {
      x = BigInt(message);
      if (x === n) {
        ws.send(flag);
        ws.close();
        return;
      }
      if (x < 1) {
        ws.send(`Invalid guess: ${message}`);
      } else {
        g = gcd(a, x / gcd(x, n));
        ws.send(`gcd(${a}, X/gcd(X, N)) = ${g}`);
      }
    } catch {
      ws.send(`Invalid guess: ${message}`);
    }
    ws.send(`Enter your guess X:`);
  });
}

module.exports = { run };
