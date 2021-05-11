function setup() {

let express = require("express");
//setup express app
let app = express();

//basic route for homepage
app.get("/cross-the-site", (req, res) => {
  html = `
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
          ${req.query.msg ? req.query.msg : ""}
        </body>
      </html>
      `;
  console.log("got request: " + req.url);
  res.send(html);
});

const port = process.env.PORT || 3001;
//server listens to port 3002
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`listening on port ${port}`);
});
}

module.exports = { setup };
