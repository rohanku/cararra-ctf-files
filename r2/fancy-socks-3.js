const WebSocket = require('ws');
const crypto = require('crypto');
const pem2jwk = require('pem-jwk').pem2jwk

// The passphrase used to repeatably generate this RSA key.
const flag = "cararraCTF{th4ts_y_U_us3_P@Dd!nG}"

function run(ws) {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
    });
    const flag_encrypted = crypto.publicEncrypt(publicKey, flag).toString('base64');
    publicKeyJWK = publicKey.export({format: 'jwk'});
    ws.send('Welcome to the ultimate FANCY SOCKS DECRYPTOR!');
    ws.send(`My very secret message that you'll never decrypt: ${flag_encrypted}`);
    ws.send(`Public key (in base64): `);
    ws.send(`n = ${publicKeyJWK.n}`);
    ws.send(`e = ${publicKeyJWK.e}`);
    ws.send(`Enter a message to be decrypted:`);
    ws.on('message', function incoming(message) {
      console.log(message);
      if (message.trim() == flag_encrypted) {
        ws.send("I told you I wouldn't encrypt that. Bye!");
        ws.close();
        return;
      }
      ws.send(`Here is your decrypted message: ${crypto.privateDecrypt(privateKey, Buffer.from(message, 'base64'))}`);
      ws.send(`Happy now? Bye!`);
      ws.close();
  });
}

module.exports = { run };
