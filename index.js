var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url"); // built-in utility

const scriptpages = {
  "./r1/cracked-4": require("./r1/cracked-4"),
  "./r1/admin-bot": require("./r1/admin-bot"),
  "./r1/cross-the-site": require("./r1/cross-the-site"),
  "./r3/sanity-check": require("./r3/sanity-check"),
  "./r3/curling-1": require("./r3/curling-1.js"),
};
const headerscriptpages = {
  "./r2/cookie-monster-1": require("./r2/cookie-monster-1"),
  "./r2/cookie-monster-2": require("./r2/cookie-monster-2"),
  "./r3/curling-2": require("./r3/curling-2.js"),
  "./r5/header-bender": require("./r5/header-bender.js"),
};

const websockets = {
  "/r2/fancy-socks-1": require("./r2/fancy-socks-1"),
  "/r2/fancy-socks-2": require("./r2/fancy-socks-2"),
  "/r2/fancy-socks-3": require("./r2/fancy-socks-3"),
  "/r2/fancy-socks-4": require("./r2/fancy-socks-4"),
  "/r3/number-sense-3": require("./r3/number-sense-3"),
  "/r3/number-sense-4": require("./r3/number-sense-4"),
  "/r3/number-sense-5": require("./r3/number-sense-5"),
  "/r3/padding-problems-1": require("./r3/padding-problems-1-ws"),
  "/r3/learn-your-cbcs": require("./r3/learn-your-cbcs"),
  "/r3/padding-problems-2": require("./r3/padding-problems-2"),
  "/r4/bolt-on-security": require("./r4/bolt-on-security-ws"),
  "/r4/obscurity-security-1": require("./r4/obscurity-security-1.js"),
  "/r4/obscurity-security-2": require("./r4/obscurity-security-2.js"),
  "/r4/overflow": require("./r4/overflow.js"),
  "/r4/stack-attack": require("./r4/stack-attack.js"),
  "/r4/rip-the-rip": require("./r4/rip-the-rip.js"),
  "/r5/defygg-hot": require("./r5/defygg-hot.js"),
};

const binaries = new Set([
"./r3/magic-bytes",
"./r4/obscurity-security-1",
"./r4/obscurity-security-2",
"./r4/overflow",
"./r4/rip-the-rip",
"./r5/sqlite_nov1ce.db",
"./r5/double-des.py",
"./r5/defygg-hot.py",
]);

const hidden = new Set([
  "./index.js",
  "./r1/cracked-4.js",
  "./r1/admin-bot.js",
  "./r1/cross-the-site.js",
  "./r3/sanity-check.js",
  "./r3/curling-1.js",
  "./r2/cookie-monster-1.js",
  "./r2/cookie-monster-2.js",
  "./r3/curling-2.js",
  "./r2/fancy-socks-1.js",
  "./r2/fancy-socks-2.js",
  "./r2/fancy-socks-3.js",
  "./r2/fancy-socks-4.js",
  "./r3/number-sense-3.js",
  "./r3/number-sense-4.js",
  "./r3/number-sense-5.js",
  "./r3/padding-problems-1-ws.js",
  "./r3/learn-your-cbcs.js",
  "./r3/padding-problems-2.js",
  "./r4/bolt-on-security-ws.js",
  "./r4/obscurity-security-1.js",
  "./r4/obscurity-security-2.js",
  "./r4/overflow.js",
  "./r4/overflow-flag.txt",
  "./r4/stack-attack.js",
  "./r4/stack-attack-flag.txt",
  "./r4/rip-the-rip.js",
  "./r4/rip-the-rip.txt",
  "./r5/defygg-hot.js",
  "./r5/defygg-hot-flag.txt",
  "./r5/defygg-hot-key.txt",
]);

const hostname = "0.0.0.0";
const port = process.env.PORT || 3001;

const httpServer = http.createServer(function (request, response) {
  console.log("request starting...");

  var filePath = "." + url.parse(request.url).pathname;
  if (filePath == "./") filePath = "./index.html";

  var extname = path.extname(filePath);
  var contentType = "text/html";
  if (hidden.has(filePath)) {
    return;
  }

  switch (extname) {
    case ".zip":
      contentType = "application/zip";
      break;
    case ".ico":
      contentType = "image/x-icon";
      break;
    case ".txt":
      contentType = "text/plain";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".wav":
      contentType = "audio/wav";
      break;
    case ".c":
      contentType = "text/plain";
      break;
    default:
      if (filePath in scriptpages) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(scriptpages[filePath].page(request.url), "utf-8");
        return;
      }
      if (filePath in headerscriptpages) {
        ([headers, page] = headerscriptpages[filePath].page(request)),
          response.writeHead(200, headers);
        response.end(page, "utf-8");
        return;
      }
      if (binaries.has(filePath)) {
        contentType = "application/octet-stream";
      }
      if (extname === ".js") {
        contentType = "text/javascript";
      }
  }

  fs.readFile(filePath, function (error, content) {
    if (error) {
      if (error.code == "ENOENT") {
        fs.readFile("./404.html", function (error, content) {
          response.writeHead(200, { "Content-Type": contentType });
          response.end(content, "utf-8");
        });
      } else {
        response.writeHead(500);
        response.end(
          "Sorry, check with the site admin for error: " + error.code + " ..\n"
        );
        response.end();
      }
    } else {
      if (contentType == "text/html") {
        response.writeHead(200, { "Content-Type": contentType });
      } else {
        response.writeHead(200, {
          "Content-Type": contentType,
          "Content-Disposition": "attachment",
        });
      }
      response.end(content, "utf-8");
    }
  });
});

const WebSocket = require("ws");
const wss = new WebSocket.Server({ server: httpServer });

wss.on("connection", function connection(ws, req) {
  let pathname = url.parse(req.url, true).pathname;
  console.log(pathname);
  if (pathname in websockets) {
    websockets[pathname].run(ws);
  } else {
    ws.close();
  }
});

httpServer.listen(port);
console.log(`Server running at http://${hostname}:${port}/`);
