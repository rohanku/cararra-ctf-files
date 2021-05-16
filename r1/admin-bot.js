const request = require('request');
const puppeteer = require('puppeteer');
const utils = require('./utils');
var validUrl = require('valid-url');
const flag = "cararraCTF{d0nt_d1SP4y_uSeR_!npUt_cuz_XSS}";


async function send(url) {
  (async () => {
      const browser = await puppeteer.launch({
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
        ],
      });
      const page = await browser.newPage();
      await page.setCookie({name: "flag", value: flag, domain: 'cararra-ctf-files.herokuapp.com'});
      await page.goto(url);
      await browser.close();
  })();
    
}

function page(url) {
  u = utils.getParameterByName("url", url);
  if (u && validUrl.isUri(u)) {
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

module.exports = { page };
