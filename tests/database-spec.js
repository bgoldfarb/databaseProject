import { expect } from 'chai'
import database from '../src/database'


describe('Database Tests', () => {

    var categories = [{
 
        name: "Accessories",   
    
        id: 6,
    
        parent_id: 2
    
    }, {
    
        name: "Men",
    
        id: 2,
    
        parent_id: null
    
    },{
    
        name: "Women",
    
        id: 10,
    
        parent_id: null
    
    },
    {
    
        name: "Belts",
    
        id: 5,
    
        parent_id: 10
    
    },
    {
    
        name: "Kids",
    
        id: 33,
    
        parent_id: null
    
    },
    {
    
        name: "Shirts",
    
        id: 9,
    
        parent_id: 33
    
    },
    {
    
        name: "Petites",
    
        id: 19,
    
        parent_id: null
    
    },
    {
    
        name: "Sweaters",
    
        id: 54,
    
        parent_id: 19
    
    }];
    
    
    it('shows database exists', () => {
        const expected = [ { name: 'Men', id: 2, parent_id: null },
        { name: 'Accessories', id: 6, parent_id: 2 },
        { name: 'Women', id: 10, parent_id: null },
        { name: 'Belts', id: 5, parent_id: 10 },
        { name: 'Kids', id: 33, parent_id: null },
        { name: 'Shirts', id: 9, parent_id: 33 },
        { name: 'Petites', id: 19, parent_id: null },
        { name: 'Sweaters', id: 54, parent_id: 19 } ]
            expect(database(expected))
    })
})