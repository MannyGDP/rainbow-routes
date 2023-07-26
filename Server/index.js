
const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send(`
    <body style="margin: 0;">
    <div style="border: 1px solid black; height: 5vh; background-color: white;">
    <h2 style="text-align: center;">NAV BAR</h2>
    </div>
    <h1>White Page</h1>
    </body>
    `);
})

app.get('/:color' , (req, res) => {
    const myColor = req.params.color;
    res.send(` 
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 5vh; background-color: ${myColor};">
        <h2 style="text-align: center;">NAV BAR</h2>
        </div>
        <h1 style="color: ${myColor};">${myColor.charAt(0).toUpperCase()}${myColor.substring(1)} Page</h1>
    </body>
`);
})

app.listen(process.env.PORT, () => {
console.log('app is running on port ${process.env.PORT}');
});

