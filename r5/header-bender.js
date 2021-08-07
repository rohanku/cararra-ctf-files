const utils = require("../utils");
const locale = require("locale")

function page(req) {
  const flag = "cararraCTF{r3quests_c@n_cOntain_a_lot_of_1nfo!!}";
  const headers = {
  };

  const html = `

<!DOCTYPE html>
<html>
<head>
<title>curling-2</title>
</head>
<body>

<h1>Are you eligible for the flag?</h1>
<p></p>
</body>
</html>

`;
  let url = req.url;
  header = {
    "Content-Type": "text/html",
  };
  var locales = new locale.Locales(req.headers["accept-language"])
  console.log(req.headers["accept-language"])
  console.log(locales['0'].code);
  return [
    {
      "Content-Type": "text/html",
      flag: flag,
    },
    `
    <!DOCTYPE html>
<html>
<head>
<title>curling-2</title>
</head>
<body>

<h1>Congratulations!</h1>
<p>Bob sent you the flag, but he doesn't want to display it on your browser. Where might more information be stored in Bob's response?</p>

</body>
</html>
`,
  ];
}

module.exports = { page };
