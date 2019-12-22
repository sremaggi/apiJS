//CONSTANTS
const express = require('express');
const bodyParser = require('body-parser');
const getInfo = require('./getInfo');
const fil = require('./filter');
const getalldata=require('./getalldata');
const redis = require('redis');
const axios = require('axios');
const client = redis.createClient(); // this creates a new client
//PORT CONFIG
const app = new express();
const port = 3001;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//--------------------------------------------------------------------------------------------------------------//

//SOLICITO A LA API LOS DATOS DE NAVES Y LAS GUARDO EN REDIS (KEY: name) (Value: objeto con info de la nave)
app.post("/getdatainredis",async (req,res)=>{
    //Obtengo un array de objetos en 'result'
    const result = await getInfo();
    //Recorro y guardo los datos en redis
    result.forEach(element => {
        const nombre = element.name;
        const objeto = JSON.stringify(element);
         client.set(nombre, objeto, redis.print);
        });

    res.json(result);
});

//FILTER BY NAME POSTMAN
app.post('/filterbyname' , async (req,res)=>{
    const {filter} = req.body;
    const name = JSON.stringify( filter.name);
    console.log("Key Nombre: " , name);
    const response = await fil(name);

    console.log(response.name);
    res.json(response);
});

//OBTENER TODAS LAS NAVES DESDE LA API (EJERCICIO EXTRA)
app.post('/getallpages' , async(req,res)=>{
    //array con el total de datos en result
    let result = await getalldata();
    console.log(result);
    res.json(result);
    return result  
})


//REDIS CONFIGURACIONES GENERALES.
client.on('connect', function() {
    console.log('Redis client connected');
});
client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});
app.listen(port, () => console.log('listening en port', port, '!'));





