const request = require('request');
const puppeteer = require('puppeteer');
const flag = "cararraCTF{d0nt_d1SP4y_uSeR_!npUt_cuz_XSS}";


async function send(url) {
  (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
    console.log(url)
      await page.setCookie({name: "flag", value: flag, domain: 'cararra-ctf-files.herokuapp.com:3002'});
      await page.goto(url);
      await browser.close();
  })();
    
}

function page(url) {
  u = getParameterByName("url", url);
  if (u) {
    send(u);
  return `
    <!DOCTYPE html>
    <html>
        <head>
          <title>admin-bot</title>
        </head>

        <body>
          <script>
            function process() {
                      history.replaceState(
                                  null,
                                  null,
                                  "?url=" + document.getElementById("url").value
                                );
                      return true;
                    }
        </script>

          <p>Enter a URL you want the admin bot to visit!</p>
          <form onSubmit="process();">
            Password: <input type="text" name="url" id="url" />
            <input type="submit" value="Submit" />
          </form>
          <p>URL visited!</p>
        </body>
      </html>
      `;

  }
  return `
    <!DOCTYPE html>
    <html>
        <head>
          <title>admin-bot</title>
        </head>

        <body>
          <script>
            function process() {
                      history.replaceState(
                                  null,
                                  null,
                                  "?url=" + document.getElementById("url").value
                                );
                      return true;
                    }
        </script>

          <p>Enter a URL you want the admin bot to visit!</p>
          <form onSubmit="process();">
            Password: <input type="text" name="url" id="url" />
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
      `;
}
function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

module.exports = { page };
