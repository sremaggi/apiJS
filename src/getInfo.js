const axios = require('axios');

const getInfo = async (req, res) =>{
const {data} = await axios.get('https://swapi.co/api/starships/?page=1');

//ARRAY WITH STARSHIPS OBJETS
console.log(data.results);
return data.results;


}

module.exports = getInfo;
