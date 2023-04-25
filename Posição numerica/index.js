const proximityCities = {
   sector_A: ['ITATIBA'],
   sector_B: ['MORUNGABA'],
   sector_C: ['JUNDIAI'],
   sector_D: ['VALINHOS'],
   sector_E: ['VINHEDO'],
   sector_F: ['CAMPINAS']
}

const sectors = [
    proximityCities.sector_A, 
    proximityCities.sector_B,
    proximityCities.sector_C,
    proximityCities.sector_D, 
    proximityCities.sector_E, 
    proximityCities.sector_F,
]

console.table(proximityCities)

sectors.forEach((setores,i) => {
    console.log(`${i+1}° Cidade: ${setores}`)
});