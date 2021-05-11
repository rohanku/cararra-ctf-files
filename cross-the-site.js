function page(url) {

//basic route for homepage
  msg = getParameterByName(msg, url);
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
                                  "?msg=" + document.getElementById("msg").value
                                );
                      return true;
                    }
        </script>

          <p>Enter a message to display!</p>
          <form onSubmit="process();">
            Password: <input type="text" name="msg" id="msg" />
            <input type="submit" value="Submit" />
          </form>
          <p>Your message</p>
          ${msg ? msg : ""}
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
