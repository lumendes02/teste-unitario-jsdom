// import validaCampos from './funcoes/verificacoes.js'
const btn = document.querySelector("#acao");
const {validaCampos} = require('./funcoes/verificacoes.js')


btn.addEventListener("click", function(e) {
    e.preventDefault();
   
    const picanhaValor = document.querySelector('#picanhaValor').value;
    const adultosQuantidade = document.querySelector('#adultosQuantidade').value;
    const criancaQuantidade = document.querySelector('#criancaQuantidade').value;

    validaCampos(0,0,0)
})