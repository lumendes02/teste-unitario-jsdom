function calculaTotalPicanha(picanhaValor) {
    return  (picanhaValor * 1000) / 58;
}


function calculaMediaPessoa(media,adultosQuantidade,criancaQuantidade) {
    return media / (adultosQuantidade + criancaQuantidade)
}

module.exports = {calculaTotalPicanha, calculaMediaPessoa}