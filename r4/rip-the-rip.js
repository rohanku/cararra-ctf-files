const WebSocket = require("ws");
const { exec } = require("child_process");

function run(ws) {
  const process = exec('./r4/rip-the-rip', []);
  process.stdout.on('data', (data) => {
    if (ws.readyState !== WebSocket.OPEN) return;
    ws.send(data);
  });
  process.stderr.on('data', (data) => {
    if (ws.readyState !== WebSocket.OPEN) return;
    ws.send(data);
  });
  process.on('exit', (data) => {
    ws.close();
  });
  ws.on("message", function incoming(message) {
    if (ws.readyState !== WebSocket.OPEN) return;
    process.stdin.write(message);
  });
}

module.exports = { run };
