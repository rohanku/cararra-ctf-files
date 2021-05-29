var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url"); // built-in utility

var scriptpages = {
  "./r1/cracked-4": require("./r1/cracked-4"),
  "./r1/admin-bot": require("./r1/admin-bot"),
  "./r1/cross-the-site": require("./r1/cross-the-site"),
};
var headerscriptpages = {
  "./r2/cookie-monster-1": require("./r2/cookie-monster-1"),
  "./r2/cookie-monster-2": require("./r2/cookie-monster-2"),
};

var websockets = {
  "/r2/fancy-socks-1": require("./r2/fancy-socks-1"),
  "/r2/fancy-socks-2": require("./r2/fancy-socks-2"),
  "/r2/fancy-socks-3": require("./r2/fancy-socks-3"),
};

const hostname = "0.0.0.0";
const port = process.env.PORT || 3001;

const httpServer = http.createServer(function (request, response) {
  console.log("request starting...");

  var filePath = "." + url.parse(request.url).pathname;
  if (filePath == "./") filePath = "./index.html";

  var extname = path.extname(filePath);
  var contentType = "text/html";

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
