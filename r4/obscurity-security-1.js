const WebSocket = require("ws");
const { exec } = require("child_process");

function run(ws) {
  const process = exec('./r4/obscurity-security-2', []);
  process.stdout.on('data', (data) => {
    ws.send(data);
  });
  process.stderr.on('data', (data) => {
    ws.send(data);
  });
  process.stderr.on('end', (data) => {
    ws.close();
  });
  ws.on("message", function incoming(message) {
    process.stdin.write(message);
  });
}

module.exports = { run };
