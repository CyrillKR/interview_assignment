const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
    const responseArray = [];
    for (let i = 0; i <= 10; i++) {
        const randomNumber = Math.floor(Math.random() * 100);
        responseArray.push(randomNumber);
    }
    res.status(200).json({ responseArray });
});

app.listen(3500, () => {
    console.log('listening on port 3500...');
});