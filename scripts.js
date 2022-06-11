// import validaCampos from './funcoes/verificacoes.js'
const btn = document.querySelector("#acao");
const {validaCampos} = require('./funcoes/verificacoes.js')
const {calculaTotalPicanha, calculaMediaPessoa} = require('./funcoes/calcula.js')


btn.addEventListener("click", function(e) {
    e.preventDefault();
   
    const picanhaValor = document.querySelector('#picanhaValor').value;
    const adultosQuantidade = document.querySelector('#adultosQuantidade').value;
    const criancaQuantidade = document.querySelector('#criancaQuantidade').value;

    if (validaCampos(picanhaValor,adultosQuantidade,criancaQuantidade) == true) return; 

    var media = calculaTotalPicanha(picanhaValor);

    console.log(calculaTotalPicanha(picanhaValor))
    console.log(calculaMediaPessoa(media,adultosQuantidade,criancaQuantidade))
    
})