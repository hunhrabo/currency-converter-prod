const express = require("express");
const cors = require("cors");
const app = express();
const request = require("request");

app.use(express.static("build"));
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/get", function(req, res) {
  request(
    {
      method: "GET",
      uri: "http://api.napiarfolyam.hu?bank=mnb"
    },
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
