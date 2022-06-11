(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function calculaTotalPicanha(picanhaValor) {
    return  (picanhaValor * 1000) / 58;
}


function calculaMediaPessoa(media, pessoas) {
    console.log(media, pessoas)
    return media / pessoas
}

module.exports = {calculaTotalPicanha, calculaMediaPessoa}
},{}],2:[function(require,module,exports){
function validaCampos(picanhaValor, adultosQuantidade, criancaQuantidade) {
    if (picanhaValor <= 0 || adultosQuantidade <= 0) {
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

function pessoasSatisfeitas(totalGramaCarne, mediaPessoa) {
    if (document.getElementById('erro') !== null) {
        document.getElementById('erro').remove();
    }
    if (document.getElementById('totalCarne') == null) {
        var dado = Math.floor( totalGramaCarne );
        var msgtotal = document.createElement('p');
            msgtotal.id = 'totalCarne'
            msgtotal.style.cssText = 'color:black;'
            msgtotal.innerHTML = 'total da carne: ' + dado + ' Gramas'
        document.body.appendChild(msgtotal)
    }
    if (document.getElementById('media') == null) {
        var dado = Math.floor( mediaPessoa );
        var msgMedia = document.createElement('p');
            msgMedia.id = 'media'
            msgMedia.style.cssText = 'color:green;'
            msgMedia.innerHTML = 'Media por pessoa: ' + dado + ' Gramas'
        document.body.appendChild(msgMedia)
    }
}   

module.exports = { validaCampos, pessoasSatisfeitas }
},{}],3:[function(require,module,exports){
// import validaCampos from './funcoes/verificacoes.js'
const btn = document.querySelector("#acao");
const {validaCampos, pessoasSatisfeitas} = require('./funcoes/verificacoes.js')
const {calculaTotalPicanha, calculaMediaPessoa} = require('./funcoes/calcula.js')


btn.addEventListener("click", function(e) {
    e.preventDefault();
   
    const picanhaValor = document.querySelector('#picanhaValor').value;
    const adultosQuantidade = parseInt(document.querySelector('#adultosQuantidade').value);
    const criancaQuantidade = parseInt(document.querySelector('#criancaQuantidade').value);

    if (validaCampos(picanhaValor,adultosQuantidade,criancaQuantidade) == true) return; 

    var totalGramaCarne = calculaTotalPicanha(picanhaValor);
    var mediaPessoa = calculaMediaPessoa(totalGramaCarne,adultosQuantidade + criancaQuantidade);

    pessoasSatisfeitas(totalGramaCarne, mediaPessoa);
})
},{"./funcoes/calcula.js":1,"./funcoes/verificacoes.js":2}]},{},[3]);
