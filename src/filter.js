const redis = require('redis');
const util = require('util'); //libreria por defecto, podemos tranformar la funcion a asincrona

const client = redis.createClient();

const getAsync = util.promisify(client.get).bind(client);

const filter_redis= async (nombre)=>{ 
    const res = await getAsync(nombre);
    const resO = JSON.parse(res);
    return resO;
};
module.exports = filter_redis;


