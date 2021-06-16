const utils = require("../utils");

function page(url) {
  number = utils.getParameterByName("number", url);
  const flag = "cararraCTF{curl1nG_1s_4_c00l_spOrt}";
  const pass = "3981";

  if (!number) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>curling-1</title>
        </head>

        <body>
          <script>
            function process() {
                      history.replaceState(
                                  null,
                                  null,
                                  "?number=" + document.getElementById("number").value
                                );
                      return true;
                    }
        </script>

          <p>Guess a number between 1 and 10000!</p>
          <form onSubmit="process();">
            Guess: <input type="text" name="number" id="number" />
            <input type="submit" value="Submit"/>
          </form>
        </body>
      </html>
      `
  }
  if (number === pass) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>curling-1</title>
        </head>

        <body>
          <script>
            function process() {
                      history.replaceState(
                                  null,
                                  null,
                                  "?number=" + document.getElementById("number").value
                                );
                      return true;
                    }
        </script>
          <p> That is correct! Here is your flag: ${flag} </p>
        </body>
      </html>
      `
  }

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>curling-1</title>
        </head>

        <body>
          <script>
            function process() {
                      history.replaceState(
                                  null,
                                  null,
                                  "?number=" + document.getElementById("number").value
                                );
                      return true;
                    }
        </script>
          <p> Sorry, ${number} is incorrect </p>
          <p>Guess a number between 1 and 1000!</p>
          <form onSubmit="process();">
            Guess: <input type="text" name="number" id="number" />
            <input type="submit" value="Submit"/>
          </form>
        </body>
      </html>
      `
}

module.exports = { page };
