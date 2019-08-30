const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

describe('hobbits model', () =>{
    describe('insert()', () =>{
        beforeEach(async () => {
            // this function executes and clears out the table before each test
            await db('hobbits').truncate();
          });
        it('should insert 2 hobbits in db', async () => {
            await Hobbits.insert({name:"Buddy"});
            await Hobbits.insert({name:"Mindy"});


            const hobbits_db = await db('hobbits');
            expect(hobbits_db).toHaveLength(2);
        })
    })
})