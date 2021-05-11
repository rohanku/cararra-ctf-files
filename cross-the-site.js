function page(url) {

//basic route for homepage
  html = getParameterByName("html", url);
  return`
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
function getParameterByName(name, url) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
module.exports = { page };
