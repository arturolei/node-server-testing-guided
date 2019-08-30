const request = require('supertest');

const server = require('./server.js');

describe('server.js', () =>{  
    it('should set the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })

    //http status code is right
    //format of the data
    //structure of the return data

    describe('GET /', ()=>{
        it('should return 200 ok',  () => {
            return request(server).get('/')
            .then(res => {
            expect(res.status).toBe(200);
             })
        })


        //Test for format of what we get back (not the structure)
        it('should return a JSON object', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        })

        //test for the json structure 
        it('should return {api:"up"}', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({api:"up"});
        })
        
    })

    /*
    describe('GET /', () => {
        it('should return 200ok', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(500);
        })
    })
    
    */

})