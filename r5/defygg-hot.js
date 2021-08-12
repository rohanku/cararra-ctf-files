const WebSocket = require("ws");
const { exec } = require("child_process");

function run(ws) {
  const process = exec('./r5/defygg-hot.py', []);
  process.stdout.on('data', (data) => {
    if (ws.readyState !== WebSocket.OPEN) return;
    data.split('\n').forEach((msg) => ws.send(`${msg}\n`));
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
