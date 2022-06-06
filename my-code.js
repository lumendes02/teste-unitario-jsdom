
const sum = (a, b) => {
    return a + b
} 

const inOneHour = () => {
    const now = Date.now()
    const oneHourInMilliseconds = 1 * 60 * 60 * 1000 // 1 hora X 60 minutos X 60 segundos X 1000 milissegundos
    return now + oneHourInMilliseconds
}

module.exports = { sum, inOneHour }