const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());

//ENDPOINTS

app.get("/api", (req, res) => {
  axios
    .get("https://pdqweb.azurewebsites.net/api/brain")
    .then(azureRes => res.send(azureRes.data))
    .catch(err => {
      console.log(err);
    });
});

const port = 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
