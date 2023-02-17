
function calcular() {
    //Entrada de dados
    const money = document.getElementById('inputMoney').value
    //Saida de dados
    const out100 = document.getElementById('output100')
    const out50 = document.getElementById('output50')
    const out20 = document.getElementById('output20')
    const out10 = document.getElementById('output10')

let amountLeft = money % 100 //Restante

const notas100 = Math.floor(money / 100) // Calcula as notas de R$100,00 - arredondado para baixo
const notas50 = Math.floor(money / 50) // Calcula as notas de R$50,00 - arredondado para baixo
const notas20 = Math.floor(money / 20) // Calcula as notas de R$20,00 - arrendodado para baixo
const notas10 = Math.floor(money / 10) // Calcula as notas de R$10,00 - arrendodado para baixo


if(money % 10 != 0) {
    alert('Valor invalido para as notas disponíveis (R$10, R$20, R$50, R$100)')
    
    }

if(notas100 > 0 || notas50 > 0 || notas20 > 0 || notas10 > 0) {
    out100.innerText = `Notas de R$100,00: ${notas100}`
    out50.innerText = `Notas de R$50,00: ${notas50}`
    out20.innerText = `Notas de R$20,00: ${notas20}`
    out10.innerText = `Notas de R$10,00: ${notas10}`
}

}






