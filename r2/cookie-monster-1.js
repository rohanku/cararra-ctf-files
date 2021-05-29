const utils = require('../utils');

items = {
  epicness: { name: "Epicness", cost: 10, message: "wow you also get a message with it!" },
  thingamabob: { name: "Thingamabob", cost: 100, message: "you just really can't afford a flag it seems"},
  flag: { name: "Flag", cost: 100000000000, message: "cararraCTF{g0tt@_3nSRe_AutHenT1c!ty}" },
}

function page(req) {
  let url = req.url;
  let cookie = req.headers.cookie;
  let info_cookie = utils.getCookie(cookie, "info");
  let info = { cookies: 0, items: [] };
  if (info_cookie !== "") {
    info = JSON.parse(atob(info_cookie));
  }
  if (utils.getParameterByName("earn", url) !== null) {
    info.cookies += 1;
  }
let to_buy = utils.getParameterByName("buy", url)
  if (to_buy in items) {
    if (items[to_buy].cost <= info.cookies) {
      info.cookies -= items[to_buy].cost;
      info.items.push(to_buy);
    }
  }
let buttons = "";
for (let [k, item] of Object.entries(items)) {
  buttons += `<p>${item.name} (Cost: ${item.cost}) <button onclick="buy('${k}')"> Buy </button></p>\n`
}
let owned = "";
for (let item of info.items) {
  owned += `<p>${items[item].name}: ${items[item].message}</p>\n`;
}
  let page = `
<!DOCTYPE html>
<html>
  <head>
    <title>cookie-monster-1</title>
  </head>

  <body>
    <script>
      function earn() {
              fetch(window.location.href.split("?")[0] + "?earn").then(response => location.reload());
            }
      function buy(item) {
              fetch(window.location.href.split("?")[0] + "?buy=" + item).then(response => location.reload());
            }
  </script>
    <h1>Cookies: ${info.cookies}</h1>
    <p>Click the button to earn cookies!</p>
    <button onclick="earn()"> Earn a cookie! </button>
    <h3>Shop</h3>
    ${buttons}

    <h3>Owned</h3>
    ${owned}

  </body>
</html>
      `;
return [{ "Content-Type": "text/html", "Set-Cookie": "info=" + btoa(JSON.stringify(info)) }, page]
}

module.exports = { page };
