const filter = require('../src/filter');

describe('filterbyname', ()=>{
    it('return objet with info',async ()=>{

        //Array con nombres de prueba para realizar los tests.
        const nombres = ["Executor",
        "Sentinel-class landing craft",
        "Death Star"];

        //recorro el array y ejecuto las pruebas a todos los nombres de este.
        nombres.forEach(async(e,i,nombres) => {
        const starship = await filter(nombres[i]);
        expect(starship.name).toEqual(e);
        expect(starship).toHaveProperty("model");
        expect(starship).toHaveProperty("url");
        expect(starship).toHaveProperty("manufacturer");
    
    });
    
   

    })


})