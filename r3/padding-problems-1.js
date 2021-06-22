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
  classes = [
    { name: "AP Chem", grade: "A+" },
    { name: "AP Spanish", grade: "F" },
    { name: "English 11 Honors", grade: "F" },
    { name: "APUSH", grade: "F" },
    { name: "AP Physics", grade: "A+" },
  ];
  return rsa_encrypt(JSON.stringify(classes), n, e);
}
