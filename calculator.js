//  requirements

const express = require("express");
const bodyParser = require("body-parser");

//  setting up express
const app = express();

//  setting up body parser

app.use(bodyParser.urlencoded({ extended: true }));

// setting up a function that sends the index.html file when the root rout e is reached
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//  setting up a call back function tot a post request

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 / num2 ** 2;

  result = result * 10000;

  res.send(
    `<p style="text-align: center; font-weight: bold; font-family: "ubuntu"; margin: 20px; "> Your answer is ${result}</p>`
  );
});

//  listening to get requests on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
