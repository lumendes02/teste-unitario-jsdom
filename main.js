(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function calculaTotalPicanha(picanhaValor) {
    return  (picanhaValor * 1000) / 58;
}


function calculaMediaPessoa(media,adultosQuantidade,criancaQuantidade) {
    return media / (adultosQuantidade + criancaQuantidade)
}

module.exports = {calculaTotalPicanha, calculaMediaPessoa}
},{}],2:[function(require,module,exports){
function validaCampos(picanhaValor, adultosQuantidade, criancaQuantidade) {
    if (picanhaValor <= 0 || adultosQuantidade <= 0 || criancaQuantidade <= 0) {
        if (document.getElementById('erro') == null) {
            var msgErro = document.createElement('p');
            msgErro.id = 'erro'
            msgErro.style.cssText = 'color:red;'
            msgErro.innerHTML = 'Digite valor valido.'
            document.body.appendChild(msgErro)
        }
        return true
    }
}

module.exports = { validaCampos }
},{}],3:[function(require,module,exports){
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
},{"./funcoes/calcula.js":1,"./funcoes/verificacoes.js":2}]},{},[3]);
