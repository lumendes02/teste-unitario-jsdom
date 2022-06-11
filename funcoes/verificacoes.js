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