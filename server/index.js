const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());

//ENDPOINTS
// app.get("/url", (req, res, next) => {
//   res.send(axios.get("https://swapi.co/api/people/1/"));
// });

app.get("/api", (req, res) => {
  axios
    .get("https://pdqweb.azurewebsites.net/api/brain")
    .then(azureRes => res.send(azureRes.data))
    .catch(err => {
      console.log(err);
    });
});

// app.get("/express_backend", (req, res) => {
//   res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
// });

const port = 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
