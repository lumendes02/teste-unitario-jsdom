const {sum, inOneHour} = require('./my-code')

const {validaCampos} = require('./funcoes/verificacoes.js')
// import validaCampos from './funcoes/verificacoes.js'

describe('math functions', () => {
    it('sums 2 numbers', () => {
        expect(sum(1,2)).toBe(3)
    })
})

describe('time functions', () => {
    it('returns the timestamp for one hour ahead', () => {
        const realDateNow = Date.now.bind(global.Date)
        global.Date.now = () => 0
        expect(inOneHour()).toBe(3600000)
        global.Date.now = realDateNow
    })
})

it('returns Error msg.', () => {
    validaCampos(0,0,0)
    const validacao = document.getElementById('#erro')
    expect(validacao).toBeDefined()
    validaCampos(1,1,1)
})

