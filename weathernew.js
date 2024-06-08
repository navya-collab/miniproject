const express = require('express');
require('dotenv').config();
const cors = require('cors'); 

const app = express();
const port = 3000;
app.use(cors());
const apiKey = process.env.API_KEY;

app.get('/weather', async (req, res) => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=${apiKey}`);
        let data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
        res.status(500).json({ error: 'An error occurred while fetching weather data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
