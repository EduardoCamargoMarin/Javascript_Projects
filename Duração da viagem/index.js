
const days = Number(prompt('Quantos dias viajou? '))
const hours = Number(prompt('Quantos horas ficou fora do hotel:  '))
const total = (days * hours) + hours
const valor = document.getElementById('a')

alert(`Você viajou por ${days} dias \n Ficou fora por ${hours} horas \n Total: ${total} horas viajando`)

valor.innerHTML = total + ' horas viajando'
