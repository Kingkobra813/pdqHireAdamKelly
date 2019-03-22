const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
var axios = require("axios");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

//ENDPOINTS
// app.get("https://pdqweb.azurewebsites.net/api/brain")

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
