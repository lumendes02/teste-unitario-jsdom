// export default function validaCampos(picanhaValor, adultosQuantidade, criancaQuantidade) {
//     if (picanhaValor <= 0 || adultosQuantidade <= 0 || criancaQuantidade <= 0) {
//         var msgErro = document.createElement('p');
//         msgErro.id = 'erro'
//         msgErro.style.cssText = 'color:red;'
//         msgErro.innerHTML = 'Digite valor valido.'
//         document.body.appendChild(msgErro)
//     }
// }

function validaCampos(picanhaValor, adultosQuantidade, criancaQuantidade) {
    if (picanhaValor <= 0 || adultosQuantidade <= 0 || criancaQuantidade <= 0) {
        var msgErro = document.createElement('p');
        msgErro.id = 'erro'
        msgErro.style.cssText = 'color:red;'
        msgErro.innerHTML = 'Digite valor valido.'
        document.body.appendChild(msgErro)
    }
}

module.exports = { validaCampos }