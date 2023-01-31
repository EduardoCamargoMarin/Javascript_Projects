
function calcular() {
    const vehicle = document.getElementById('inputVehicle').value
    const vehicleModel = document.getElementById('inputVehicleModel').value
    const year = document.getElementById('inputYear').value
    const price = document.getElementById('inputPrice').value
    const resultVehicle = document.getElementById('outputVehicle')
    const resultVehicleModel = document.getElementById('outputVehicleModel')
    const resultYear =  document.getElementById('outputYear')
    const resultPrice = document.getElementById('outputPrice') 
    const resultPortion = document.getElementById('outputPortion')

    //Valor da entrada
    const firstPayday = price * 0.50

    //Valor parcelado
    const portionPayday = firstPayday / 12

    
    resultVehicle.innerText = `Promoção: ${vehicle}`
    resultVehicleModel.innerText = `Modelo: ${vehicleModel}`
    resultYear.innerText = `Ano: ${year}`
    resultPrice.innerText = `Entrada: R$ ${firstPayday}`
    resultPortion.innerText = `Parcelado: 12x de R$ ${portionPayday.toFixed(2)}`

    if (price <=0 || year <= 0) {
        alert('Valor invalido - Numeros negativos') 
        resultVehicle.innerText = `Promoção:`
        resultVehicleModel.innerText = `Modelo: `
        resultYear.innerText = `Ano:`
        resultPrice.innerText = `Entrada:`
        resultPortion.innerText = `Parcelado: `
    } 
    
}