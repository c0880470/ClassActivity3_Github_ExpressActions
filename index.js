const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to the world of Containers on Azure Cloud!, This is the class activity 3. Adding changes. ')
});

app.listen(config.PORT, ()=>{
    console.log('Application started successfully on port: ' + config.PORT);
});