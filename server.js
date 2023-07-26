const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8090;

app.get("/", (request, reponse)=>{
    reponse.status(200).json("hello");
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));