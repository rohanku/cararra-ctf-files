const WebSocket = require("ws");
const crypto = require("crypto");

// The passphrase used to repeatably generate this RSA key.
const flag = "cararraCTF{chOs3N_pL41nt3xt_OP_w1thout_r@nDom_paddIng}";

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

function rsa_encrypt(message, n, e) {
  return bnToB64(modpow(b64ToBn(btoa(message)), e, n));
}

function create_encrypted_message(n, e) {
  grades = [
    "A+",
    "A",
    "A-",
    "B+",
    "B",
    "B-",
    "C+",
    "C",
    "C-",
    "D+",
    "D",
    "D-",
    "F",
  ];
  classes = [
    {
      name: "AP Chem",
      grade: grades[Math.floor(Math.random() * grades.length)],
    },
    {
      name: "AP Spanish",
      grade: grades[Math.floor(Math.random() * grades.length)],
    },
    {
      name: "English 11 Honors",
      grade: grades[Math.floor(Math.random() * grades.length)],
    },
    { name: "APUSH", grade: grades[Math.floor(Math.random() * grades.length)] },
    {
      name: "AP Physics",
      grade: grades[Math.floor(Math.random() * grades.length)],
    },
  ];
  return rsa_encrypt(JSON.stringify(classes), n, e);
}

module.exports = { run };

function run(ws) {
  const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 1024,
  });
  jwk = privateKey.export({ format: "jwk" });
  n = b64ToBn(Buffer.from(jwk.n, "base64").toString("base64"));
  e = b64ToBn(Buffer.from(jwk.e, "base64").toString("base64"));
  const message_encrypted = create_encrypted_message(n, e);
  ws.send(`We intercepted this message from Bob: ${message_encrypted}`);
  ws.send(`Public key (in base64): `);
  ws.send(`n = ${Buffer.from(jwk.n, "base64").toString("base64")}`);
  ws.send(`e = ${Buffer.from(jwk.e, "base64").toString("base64")}`);
  ws.send(
    `Please enter a stringified JSON object consisting of Bob's grades in the specified order (you only get one try!!!):`
  );
  ws.on("message", function incoming(message) {
    try {
      ans = JSON.stringify(JSON.parse(message));
      if (rsa_encrypt(ans, n, e) === message_encrypted) {
        ws.send(`Nice job! Here is your flag: ${flag}`);
      } else {
        ws.send(`That is incorrect! Bye!`);
      }
    } catch (e) {
      console.log(e);
      ws.send(`Invalid JSON object...`);
    }
    ws.close();
  });
}

module.exports = { run };
