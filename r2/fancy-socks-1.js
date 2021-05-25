const net = require('net');
const WebSocket = require('ws');
const flag = "cararraCTF{d0nt_t3lL_m3_y0U_diD_thAt_by_h@ND}"
const questions = 500;
// Create a server object
function run(httpServer) {
  const wss = new WebSocket.Server({ server: httpServer, path: "/r2/fancy-socks-1" });

  wss.on('connection', function connection(ws) {
    console.log('opened connection');
    let count = 1;
    ws.send('Time to take the ultimate FANCY SOCKS MULTIPLICATION TEST!');
    ws.send(`Bob wrote some random numbers on his socks, and he want you to calculate their products. Answer ${questions} epic multiplication questions to get the flag :)`);
    let n1 = Math.floor(Math.random() * 1000000000);
    let n2 = Math.floor(Math.random() * 1000000000);
    ws.send(`Question ${count}:`);
    ws.send(`${n1} * ${n2} = ?`);
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
      if (parseInt(message) != n1 * n2) {
        ws.send(`Incorrect answer! Sorry :(`);
        ws.close();
        return;
      }
      ws.send(`Correct!`);
      if (count == questions) {
        ws.send(`Congratulations, you solved all ${questions} questions! Here is your flag: ${flag}`);
        ws.close();
        return;
      }
      count++;
      n1 = Math.floor(Math.random() * 1000000000);
      n2 = Math.floor(Math.random() * 1000000000);
      ws.send(`Question ${count}:`);
      ws.send(`${n1} * ${n2} = ?`);
    });
  });

  const server = new net.Server({ server: httpServer, path: "/r2/fancy-socks-1"});

  server.on('connection', function connection(ws) {
    console.log('opened connection');
    let count = 1;
    ws.send('Time to take the ultimate FANCY SOCKS MULTIPLICATION TEST!');
    ws.send(`Bob wrote some random numbers on his socks, and he want you to calculate their products. Answer ${questions} epic multiplication questions to get the flag :)`);
    let n1 = Math.floor(Math.random() * 1000000000);
    let n2 = Math.floor(Math.random() * 1000000000);
    ws.write(`Question ${count}:`);
    ws.write(`${n1} * ${n2} = ?`);
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
      if (parseInt(message) != n1 * n2) {
        ws.write(`Incorrect answer! Sorry :(`);
        ws.end();
        return;
      }
      ws.send(`Correct!`);
      if (count == questions) {
        ws.write(`Congratulations, you solved all ${questions} questions! Here is your flag: ${flag}`);
        ws.end();
        return;
      }
      count++;
      n1 = Math.floor(Math.random() * 1000000000);
      n2 = Math.floor(Math.random() * 1000000000);
      ws.write(`Question ${count}:`);
      ws.write(`${n1} * ${n2} = ?`);
    });
  });
}

module.exports = { run };
