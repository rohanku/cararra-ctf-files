const WebSocket = require("ws");
const crypto = require("crypto");
const prompt = require("prompt-sync")({ sigint: true });

// The passphrase used to repeatably generate this RSA key.
const flag = "cararraCTF{p4DD1ng_OraCleS_r_3XPlo1t@ble}";
const block_length = 128;
const byte_length = block_length / 8;
const algorithm = `aes-${block_length}-cbc`;
const password = "Very random string made by cararra to get password";
const message = `${flag}`;

const fromHexString = (hexString) =>
  new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

const toHexString = (bytes) =>
  bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");

function run(ws) {
  ws.send(
    "Welcome to Bob's mailbox! Feel free to send him anything! However, he gets very angry if you send him incorrectly padded messages..."
  );
  crypto.scrypt(password, "salt", byte_length, (err, key) => {
    if (err) throw err;
    // Then, we'll generate a random initialization vector
    crypto.randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;

      // Once we have the key and iv, we can create and use the cipher...
      const cipher = crypto.createCipheriv(algorithm, key, iv);
      let encrypted =
        toHexString(iv) + cipher.update(message, "utf8", "hex");
      encrypted += cipher.final("hex");
      ws.send(
        `Another encrypted message that happens to be in Bob's mailbox: ${encrypted}`
      );
      ws.send("Message for Bob in hex: ");

      ws.on("message", function incoming(message) {
        try {
          const decipher = crypto.createDecipheriv(
            algorithm,
            key,
            fromHexString(message.substring(0, 32))
          );
          decipher.setAutoPadding(false);
          let decrypted = decipher.update(
            message.trim().substring(32),
            "hex",
            "hex"
          );
          decrypted += decipher.final("hex");
          const decipher2 = crypto.createDecipheriv(
            algorithm,
            key,
            fromHexString(message.substring(0, 32))
          );
          let decrypted2 = decipher2.update(
            message.trim().substring(32),
            "hex",
            "hex"
          );
          decrypted2 += decipher2.final("hex");
          ws.send("Thank you for your message!");
        } catch (e){
          ws.send(
            "WHY WOULD YOU SEND ME AN INCORRECTLY PADDED MESSAGE???"
          );
        }
        ws.send("Message for Bob in hex: ");
      });
    });
  });
}

module.exports = { run };
