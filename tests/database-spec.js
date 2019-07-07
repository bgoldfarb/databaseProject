import { expect } from 'chai'
import database from '../src/database'


describe('Database Tests', () => {
    it('Sort Database by making sure parent_id comes before correlating id', () => {
        const categories = [{

            name: "Accessories",   
        
            id: 1,
        
            parent_id: 20
        
        }, {
        
            name: "Men",
        
            id: 20,
        
            parent_id: null
        
        }];
        const expected =
        [ { name: 'Men', id: 20, parent_id: null },
        { name: 'Accessories', id: 1, parent_id: 20 } ]
            expect(database(categories)).to.deep.equal(expected)
    })
    it('Sort Database by making sure parent_id comes before correlating id with more than one extra id', () => {
        const categories = [{

            name: "Accessories",   
        
            id: 1,
        
            parent_id: 20
        
        }, {
        
            name: "Men",
        
            id: 20,
        
            parent_id: null
        
        },
        {

            name: "Belts",   
        
            id: 3,
        
            parent_id: null
        
        }
    ];
        const expected =
        [ { name: 'Men', id: 20, parent_id: null },
        { name: 'Belts', id: 3, parent_id: null },
        { name: 'Accessories', id: 1, parent_id: 20 } ]
            expect(database(categories)).to.deep.equal(expected)
    })
    it('Sort Database by making sure parent_id comes before correlating id with more than one extra id and ids are in ascending order', () => {
        const categories = [
            {

            name: "Accessories",   
        
            id: 1,
        
            parent_id: 20
        
        }, {
        
            name: "Men",
        
            id: 20,
        
            parent_id: null
        
        },
        {

            name: "Belts",   
        
            id: 3,
        
            parent_id: 15
        
        },
        {

            name: "Women",   
        
            id: 15,
        
            parent_id: null
        
        }
    ];
        const expected =
        [ { name: 'Men', id: 20, parent_id: null },
        { name: 'Women', id: 15, parent_id: null },
        { name: 'Belts', id: 3, parent_id: 15 },
        { name: 'Accessories', id: 1, parent_id: 20 } ]
            expect(database(categories)).to.deep.equal(expected)
    })
})