const WebSocket = require('ws');
const ws = new WebSocket("ws://0.0.0.0:3001");

ws.onopen = () => {
  ws.send( JSON.stringify({ msg: "hello from the http server" }) );
}
