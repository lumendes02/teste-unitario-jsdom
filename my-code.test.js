const {validaCampos, pessoasSatisfeitas} = require('./funcoes/verificacoes.js')
const {calculaTotalPicanha, calculaMediaPessoa} = require('./funcoes/calcula.js')

it('returns picanha grams.', () => {
    //espera 58 reais em picanha ser igual 1000 gramas
    expect(calculaTotalPicanha(58)).toBe(1000);
})

it('returns picanha grams.', () => {
    //espera que a media de grama de picanha de 2 pessoas e 2000 gramas de picanhar ser 1000 gramas cada.
    expect(calculaMediaPessoa(2000, 2)).toBe(1000);
})

it('returns Error msg.', () => {
    validaCampos(1,1,1)

    validaCampos(0,0,0)
    const validacao = document.getElementById('erro')
    expect(validacao).toBeDefined()

    document.createElement('erro');
    validaCampos(0,0,0)
})

it('returns result.', () => {
    document.createElement('erro');
    pessoasSatisfeitas(4000, 2)

    document.createElement('totalCarne');
    document.createElement('media');
    pessoasSatisfeitas(4000, 2)
    const validacaoTotal = document.getElementById('totalCarne')
    const validacaoMedia = document.getElementById('media')
    expect(validacaoTotal).toBeDefined()
    expect(validacaoMedia).toBeDefined()
})

