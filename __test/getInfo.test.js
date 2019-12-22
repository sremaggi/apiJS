const getInfo = require('../src/getInfo');

describe('getInfo', ()=>{
    it('Get array with starships objets info', async ()=>{

        const result = await getInfo();
        expect(Array.isArray(result)).toBe(true);
       

    })

})

