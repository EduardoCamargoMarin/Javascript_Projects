
function calcular() {
    const vehicle = document.getElementById('inputVehicle').value
    const year = Number(document.getElementById('inputYear'))
    const price = Number(document.getElementById('inputPrice'))
    const resultVehicle = document.getElementById('outputVehicle')
    const resultYear =  document.getElementById('outputYear')
    const resultPrice = document.getElementById('outputPrice') 
    const resultPortion = document.getElementById('outputPortion')

    //Valor da entrada
    const firstPayday = price * 0.50

    //Valor parcelado
    const portionPayday = firstPayday / 12

    resultVehicle.innerText = `Promoção: ${vehicle}`
    resultYear.innerText = `Ano: ${year}`
    resultPrice.innerText = `Entrada: ${firstPayday}`
    resultPortion.innerText = `${portionPayday}`




}