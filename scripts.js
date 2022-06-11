// import validaCampos from './funcoes/verificacoes.js'
const btn = document.querySelector("#acao");
const {validaCampos, pessoasSatisfeitas} = require('./funcoes/verificacoes.js')
const {calculaTotalPicanha, calculaMediaPessoa} = require('./funcoes/calcula.js')


btn.addEventListener("click", function(e) {
    e.preventDefault();
   
    const picanhaValor = document.querySelector('#picanhaValor').value;
    const adultosQuantidade = parseInt(document.querySelector('#adultosQuantidade').value);

    if (validaCampos(picanhaValor,adultosQuantidade) == true) return; 

    var totalGramaCarne = calculaTotalPicanha(picanhaValor);
    var mediaPessoa = calculaMediaPessoa(totalGramaCarne, adultosQuantidade);

    pessoasSatisfeitas(totalGramaCarne, mediaPessoa);
})