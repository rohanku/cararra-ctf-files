const WebSocket = require("ws");
const crypto = require("crypto");
const prompt = require("prompt-sync")({ sigint: true });

// The passphrase used to repeatably generate this RSA key.
const flag = "cararraCTF{n1ce_yOu_kn0W_How_AES_wOrKS!}";
const algorithm = "aes-128-cbc";
const password = "Very random string made by cararra to get password";
const initial_message = "Bob is very cool and so is Alice";
const intended_message = "Bob is so much cooler than Alice";

const fromHexString = (hexString) =>
  new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

const toHexString = (bytes) =>
  bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");

function run(ws) {
  ws.send(
    "Welcome to Bob's mailbox! Feel free to send him anything and he'll decrypt it for you!"
  );
  crypto.scrypt(password, "salt", 16, (err, key) => {
    if (err) throw err;
    // Then, we'll generate a random initialization vector
    crypto.randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;

      // Once we have the key and iv, we can create and use the cipher...
      const cipher = crypto.createCipheriv(algorithm, key, iv);
      cipher.setAutoPadding(false);
      padded_message =
        initial_message +
        new Array(
          1 +
            initial_message.length -
            Math.ceil(initial_message.length / 16) * 16
        ).join("a");
      let encrypted =
        toHexString(iv) + cipher.update(padded_message, "utf8", "hex");
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
            "utf8"
          );
          decrypted += decipher.final("utf8");
          ws.send(decrypted);
          if (decrypted === intended_message) {
            ws.send(`You did it! Here is your flag: ${flag}`);
            ws.close();
            return;
          }
        } catch {
          ws.send(
            "Decryption failed, this may be because your message length was not a multiple of the block length."
          );
        }
        ws.send("Message for Bob in hex: ");
      });
    });
  });
}

module.exports = { run };
