const dinnerValue = Number(prompt('Valor do Jantar R$: '))
const tip = 10
const dinnerTip = dinnerValue * 0.10
const dinnerTotal = dinnerTip + dinnerValue

alert(`O valor da janta foi R$${dinnerValue} com a taxa de ${tip}% ficou tudo em R$${dinnerTotal}`)

