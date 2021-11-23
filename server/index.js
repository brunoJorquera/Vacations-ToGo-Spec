const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json())


app.get('/', async (req, res) => {
    console.log(req)
    await axios.get('https://pokeapi.co/api/v2/location/')
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.log(err)
        })
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Running on da port: ${port}`));