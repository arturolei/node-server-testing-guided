const calculator = require('../calculator.js')

describe ('calc funcs', () => {
    describe('calculator add functions', ()=> {
        it('should add 2 numbers', ()=>{
            //A = Arrange
            let valA = 2;
            let valB = 2;
            let expectedResult = 4;

            //A = act, assess
            let result = calculator.add(valA,valB);

            expect(result).toBe(expectedResult);
        })
        
        it('should be additive', ()=>{
            expect(calculator.add(2,0)).toBe(2);
        })
        
        it('should be 6', () => {
            expect(calculator.add_super(2,2,2)).toBe(6);
        })
    })
    
    
    describe('calc mult funcs', ()=> {
        it('should multiply 2 numbers', () => {
            expect(calculator.multiply(2,2)).toBe(4);
        })
    })

})




it('should subtract 2 numbers', () => {
    expect(calculator.subtract(2,2)).toBe(0);
})

/*NOTE THis was done backward. App was designed but then test was created; according to 
TDD, we design tests first then do things */



it('should divide 2 numbers', () => {
    expect(calculator.divide(2,2)).toBe(1);
})


/* AAA
 
A = Arrange
A = Act
A = Assess

When writing tests




*/