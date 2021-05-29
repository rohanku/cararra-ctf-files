const utils = require("../utils");
const jwt = require("jsonwebtoken");


function page(req) {
const secret = "thissecretiswaytounguessablecuzcararramadeit";

items = {
  p1: {
    name: "+1 powerup",
    cost: 50,
    message: "wow you also get a message with it!",
    add: 1,
  },
  p3: {
    name: "+3 powerup",
    cost: 1000,
    message: "you just really can't afford a flag it seems",
    add: 3,
  },
  p5: {
    name: "+5 powerup",
    cost: 1500,
    message: "you just really can't afford a flag it seems",
    add: 5,
  },
  flag: {
    name: "Flag",
    cost: 10000000000000,
    message: "cararraCTF{APIs_are_not_private!!!!}",
    add: 0,
  },
};
  let url = req.url;
  let cookie = req.headers.cookie;
  let info_cookie = utils.getCookie(cookie, "info");
  let info = { cookies: 0, add: 1, items: [] };
  if (info_cookie !== "") {
    try {
      info = jwt.verify(info_cookie, secret);
    } catch {
  let page = `
<!DOCTYPE html>
<html>
  <head>
    <title>cookie-monster-2</title>
  </head>

  <body>
  <h1> Cookie has been tampered with!!! </h1>
  </body>
</html>
      `;
  return [
    {
      "Content-Type": "text/html",
    },
    page,
  ];
    }
      
  }
  let earn_amount = utils.getParameterByName("earn", url);
  if (earn_amount !== null) {
    info.cookies += parseInt(earn_amount);
  }
  let to_buy = utils.getParameterByName("buy", url);
  if (to_buy in items) {
    if (items[to_buy].cost <= info.cookies) {
      info.cookies -= items[to_buy].cost;
      info.add += items[to_buy].add;
      info.items.push(`${items[to_buy].name}: ${items[to_buy].message}`);
    }
  }
  let buttons = "";
  for (let [k, item] of Object.entries(items)) {
    buttons += `<p>${item.name} (Cost: ${item.cost}) <button onclick="buy('${k}')"> Buy </button></p>\n`;
  }
  let page = `
<!DOCTYPE html>
<html>
  <head>
    <title>cookie-monster-2</title>
  </head>

  <body>
    <script>
    function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};
            function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(';').shift();
}
      function update() {
        let info = parseJwt(getCookie("info"));
        if (document.getElementById("cookies").innerHTML != "Cookies: " + info.cookies) {
          document.getElementById("cookies").innerHTML = "Cookies: " + info.cookies;
        }
let owned = "";
for (let item of info.items) {
  owned += "<p>"+item + "</p>\\n";
}
if (owned != document.getElementById("owned").innerHTML) {
        document.getElementById("owned").innerHTML = owned;
        }
      }
      var t=setInterval(update,200);
      function earn() {
        let info = parseJwt(getCookie("info"));
              fetch(window.location.href.split("?")[0] + "?earn=" + info.add);
            }
      function buy(item) {
              fetch(window.location.href.split("?")[0] + "?buy=" + item);
            }
  </script>
    <h1 id="cookies">Cookies: ${info.cookies}</h1>
    <p>Click the button to earn cookies!</p>
    <button onclick="earn()"> Earn a cookie! </button>
    <h3>Shop</h3>
    ${buttons}

    <h3>Owned</h3>
    <div id="owned">
    </div>

  </body>
</html>
      `;
  return [
    {
      "Content-Type": "text/html",
      "Set-Cookie":
        "info=" + jwt.sign(info, secret) + "; Path=/r2/cookie-monster-2",
    },
    page,
  ];
}

module.exports = { page };
