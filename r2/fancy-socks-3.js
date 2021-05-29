const WebSocket = require("ws");
const crypto = require("crypto");

// The passphrase used to repeatably generate this RSA key.
const flag = "cararraCTF{th4ts_y_U_us3_P@Dd!nG}";

function modpow(a, b, n) {
  if (b == BigInt(0)) {
    return BigInt(1);
  }
  half = modpow(a, b / BigInt(2), n);
  if (b % BigInt(2) == 0) {
    return (half * half) % n;
  } else {
    return (half * half * a) % n;
  }
}

function b64ToBn(b64) {
  var bin = atob(b64);
  var hex = [];

  bin.split("").forEach(function (ch) {
    var h = ch.charCodeAt(0).toString(16);
    if (h.length % 2) {
      h = "0" + h;
    }
    hex.push(h);
  });

  return BigInt("0x" + hex.join(""));
}

function bnToB64(bn) {
  var hex = BigInt(bn).toString(16);
  if (hex.length % 2) {
    hex = "0" + hex;
  }

  var bin = [];
  var i = 0;
  var d;
  var b;
  while (i < hex.length) {
    d = parseInt(hex.slice(i, i + 2), 16);
    b = String.fromCharCode(d);
    bin.push(b);
    i += 2;
  }

  return btoa(bin.join(""));
}

function run(ws) {
  const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 1024,
  });
  jwk = privateKey.export({ format: "jwk" });
  n = b64ToBn(Buffer.from(jwk.n, "base64").toString("base64"));
  e = b64ToBn(Buffer.from(jwk.e, "base64").toString("base64"));
  d = b64ToBn(Buffer.from(jwk.d, "base64").toString("base64"));
  const flag_encrypted = bnToB64(modpow(b64ToBn(btoa(flag)), e, n));
  ws.send("Welcome to the ultimate FANCY SOCKS DECRYPTOR!");
  ws.send(
    `My very secret message that you'll never decrypt: ${flag_encrypted}`
  );
  ws.send(`Public key (in base64): `);
  ws.send(`n = ${Buffer.from(jwk.n, "base64").toString("base64")}`);
  ws.send(`e = ${Buffer.from(jwk.e, "base64").toString("base64")}`);
  ws.send(`Enter a message to be decrypted (in base64):`);
  ws.on("message", function incoming(message) {
    if (message.trim() == flag_encrypted) {
      ws.send("I told you I wouldn't encrypt that. Bye!");
      ws.close();
      return;
    }
    try {
      ws.send(
        `Here is your decrypted message: ${bnToB64(
          modpow(b64ToBn(message.trim()), d, n)
        )}`
      );
      ws.send(`Happy now? Bye!`);
      ws.close();
    } catch {
      ws.send(`Sorry, can't decrypt that!`);
      ws.close();
    }
  });
}

module.exports = { run };
