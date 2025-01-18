import {formateCurency } from '../script/utils/money.js';

describe('Test sute: testMoney',() =>{
    it('convert cents into dolar',() => { 
        expect(formateCurency(2000)).toEqual('20.00')
    })

    it('work with 0',() =>{
        expect(formateCurency(0)).toEqual('0.00')
    })

    it (' work with round' ,()=>{
        expect(formateCurency(2000.5)).toEqual('20.01')
    })

})