const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8090;

app.get("/", (request, reponse) => {
    reponse.status(200).json("hello");
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));

app.get("/photos", async (request, reponse) => {
    const API = `https:api.unsplash.com/photos/?client_id=${process.env.ACCESS_KEY}&query=goat`
    const res = await axios.get(API);
    console.log(res.data);
    reponse.status(200).json("hello");
    const photos = res.data.results.map((photo) => {
        return {
            id: photo.id,
            img_url: photo.urls.regular,
            original_image: photo.links.self,
            photographer: photo.user.name
        }
    })
    reponse.staus(200).json(photo);
});