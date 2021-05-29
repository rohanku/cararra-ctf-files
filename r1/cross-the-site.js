const utils = require("../utils");

function page(url) {
  html = utils.getParameterByName("html", url);
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>cross-the-site</title>
        </head>

        <body>
          <script>
            function process() {
                      history.replaceState(
                                  null,
                                  null,
                                  "?html=" + document.getElementById("html").value
                                );
                      return true;
                    }
        </script>

          <p>Enter some HTML to display!</p>
          <form onSubmit="process();">
            HTML: <input type="text" name="html" id="html" />
            <input type="submit" value="Submit" />
          </form>
          <p>Rendered HTML:</p>
          ${html ? html : ""}
        </body>
      </html>
      `;
}

module.exports = { page };
