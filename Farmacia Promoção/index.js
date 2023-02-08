let medicine01 = 'dipirona'
let codigo01 = '245'
let medicine02 = 'ciclobenzaprina'
let codigo02 = '547'

function calcular() {
    const product = document.getElementById('inputProduct').value
    const outputProduct = document.getElementById('outputProduct')
    const outputPromo = document.getElementById('outputPromo') 

    if (product === medicine01 || product === codigo01) {

        outputProduct.innerText = `Produto promocional ${medicine01}`
        outputPromo.innerText = `2x caixas com 10 comprimidos por R$ 9,00`

        
    }
    else if (product === medicine02 || product === codigo02) {

        outputProduct.innerText = `Produto promocional ${medicine02}`
        outputPromo.innerText = `2x caixas com 10 comprimidos por R$ 30,00`

        
    }
    else {
        outputProduct.innerText = `Produto invalido você digitou: ${product}`
        outputPromo.innerText = ``
    }
}