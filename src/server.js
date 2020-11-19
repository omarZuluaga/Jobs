const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'../dist/sistema-geolocalizacion-tareas-de-campo'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'./dist/sistema-geolocalizacion-tareas-de-campo/index.html'));
    console.log(__dirname+'./dist/sistema-geolocalizacion-tareas-de-campo/index.html');
});

app.listen(process.env.PORT || 8080);