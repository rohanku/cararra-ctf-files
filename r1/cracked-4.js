const utils = require("../utils");

function page(url) {
  const flag = "cararraCTF{!nf0rm3d_brUtE_f0Rc3_v3ry_oP}";
  pass = utils.getParameterByName("pass", url);
  if (pass == null) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
          <title>cracked-4</title>
        </head>

        <body>
          <script>
            function process() {
                      history.replaceState(
                                  null,
                                  null,
                                  "?pass=" + document.getElementById("pass").value
                                );
                      return true;
                    }
        </script>

          <p>Enter a password!</p>
          <!-- Hint: Try the password "cararra"... -->
          <form onSubmit="return process();">
            Password: <input type="text" name="pass" id="pass" />
            <input type="submit" value="go" />
          </form>
        </body>
      </html>

`;
  } else if (pass == flag) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>cracked-4</title>
    </head>

    <body>
      <p>That is the correct password!</p>
      <p>${flag}</p>
    </body>

    </html>
`;
  } else if (pass == flag.substring(0, pass.length)) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
          <title>cracked-4</title>
        </head>

        <body>
          <script>
            function process() {
                      history.replaceState(
                                  null,
                                  null,
                                  "?pass=" + document.getElementById("pass").value
                                );
                      return true;
                    }
        </script>

          <p>Enter a password!</p>
          <!-- Hint: Try the password "cararra"... -->
          <form onSubmit="return process();">
            Password: <input type="text" name="pass" id="pass" />
            <input type="submit" value="go" />
          </form>
      <p>Incorrect password, but you're on the right path!</p>
    </body>

    </html>
`;
  } else {
    return `
    <!DOCTYPE html>
    <html>
        <head>
          <title>cracked-4</title>
        </head>

        <body>
          <script>
            function process() {
                      history.replaceState(
                                  null,
                                  null,
                                  "?pass=" + document.getElementById("pass").value
                                );
                      return true;
                    }
        </script>

          <p>Enter a password!</p>
          <!-- Hint: Try the password "cararra"... -->
          <form onSubmit="return process();">
            Password: <input type="text" name="pass" id="pass" />
            <input type="submit" value="go" />
          </form>
      <p>Incorrect password!</p>
    </body>

    </html>
`;
  }
}

module.exports = { page };
