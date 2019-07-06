import { expect } from 'chai'
import database from '../src/database'


describe('Add Up 2 Sum', () => {
    
    it('should return true for empty array and sum of 0', () => {
            expect(database([], 0)).to.be.equal(true)
    })
})