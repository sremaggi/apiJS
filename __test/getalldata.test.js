const getalldata = require('../src/getalldata');


describe('getalldata', ()=>{

    it('should be retourn array with objets', async ()=>{

        let data = await getalldata();

        expect(Array.isArray(data)).toBe(true);


    })



})