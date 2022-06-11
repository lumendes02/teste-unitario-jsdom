function calculaTotalPicanha(picanhaValor) {
    return  (picanhaValor * 1000) / 58;
}


function calculaMediaPessoa(media, pessoas) {
    console.log(media, pessoas)
    return media / pessoas
}

module.exports = {calculaTotalPicanha, calculaMediaPessoa}