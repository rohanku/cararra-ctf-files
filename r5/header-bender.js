const utils = require("../utils");
const locale = require("locale")

function page(req) {
  const flag = "cararraCTF{r3quests_c@n_cOntain_a_lot_of_1nfo!!}";
  let message = "My friend speaks Canadian french, so you can't be him..."

  let url = req.url;
  header = {
    "Content-Type": "text/html",
  };
  var locales = new locale.Locales(req.headers["accept-language"])
  console.log(req.headers["accept-language"])
  console.log(locales['0']);

  if (locales['0'].normalized === 'fr_CA') {
    message = "So you also speak Canadian french. Maybe you are him... But his email is rob@gmail.com so I guess not."
  if (req.headers["from"] === "rob@gmail.com") {
    message = "Wow, you even have the same email address. But I set Rob's 'epic' cookie to 1 so I would know its him, and you don't have it."
    if (utils.getCookie(req.headers["cookie"], "epic") === "1") {
      message = `Well, I'm conviced! Here's your flag, Rob: ${flag}.`
    }
  }
  }
  const html = `

<!DOCTYPE html>
<html>
<head>
<title>curling-2</title>
</head>
<body>

<h1>Are you eligible for the flag?</h1>
<p>${message}</p>
</body>
</html>

`;
  return [
    {
      "Content-Type": "text/html",
    },
    html
  ]
}

module.exports = { page };
