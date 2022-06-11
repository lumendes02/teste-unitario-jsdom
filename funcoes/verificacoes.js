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