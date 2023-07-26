const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8090;

app.get("/", (request, response) => {
    response.status(200).json("hello");
});



app.get("/photos", async (request, response) => {
    const API = `https:api.unsplash.com/search/photos/?client_id=${process.env.ACCESS_KEY}&query=goat`
    const res = await axios.get(API);
    console.log(res.data);
    //reponse.status(200).json("hello");
    const photos = res.data.results.map((photo) => {
        return {
            id: photo.id,
            img_url: photo.urls.regular,
            original_image: photo.links.self,
            photographer: photo.user.name
        }
    })
    response.status(200).json(photos);
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));