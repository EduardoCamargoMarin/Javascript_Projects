function addInfo() {
    //Entrada de dados para trazer as informações do menu
    const plateName01 = document.getElementById('inputPlate01').value
    const plateName02 = document.getElementById('inputPlate02').value
    const plateName03 = document.getElementById('inputPlate03').value
    const plateName04 = document.getElementById('inputPlate04').value

    const platePrice01 = document.getElementById('inputPrice01').value
    const platePrice02 = document.getElementById('inputPrice02').value
    const platePrice03 = document.getElementById('inputPrice03').value
    const platePrice04 = document.getElementById('inputPrice04').value

    const nameSectorA = document.getElementById('inputSectorA').value
    const nameSectorB = document.getElementById('inputSectorB').value
    const nameSectorC = document.getElementById('inputSectorC').value

    //saida de dados
    const outputPlateName01 = document.getElementById('outputPlate01')
    const outputPlateName02 = document.getElementById('outputPlate02')
    const outputPlateName03 = document.getElementById('outputPlate03')
    const outputPlateName04 = document.getElementById('outputPlate04')

    const outputFirstPlate = document.getElementById('outputFirstPlate01')
    const outputSecondPlate = document.getElementById('outputSecondPlate02')
    const outputThirdPlate = document.getElementById('outputThirdPlate03')
    const outputFourthPlate = document.getElementById('outputFourthPlate04')

    const outputPriceValue01 = document.getElementById('outputPrice01')
    const outputPriceValue02 = document.getElementById('outputPrice02')
    const outputPriceValue03 = document.getElementById('outputPrice03')
    const outputPriceValue04 = document.getElementById('outputPrice04')

    const outputSectorName01 = document.getElementById('outputSectorA')
    const outputSectorName02 = document.getElementById('outputSectorB')
    const outputSectorName03 = document.getElementById('outputSectorC')

    outputPlateName01.innerText = `${plateName01}`
    outputPlateName02.innerText = `${plateName02}`
    outputPlateName03.innerText = `${plateName03}`
    outputPlateName04.innerText = `${plateName04}`

    outputFirstPlate.innerText = `${plateName01}`
    outputSecondPlate.innerText = `${plateName02}`
    outputThirdPlate.innerText = `${plateName03}`
    outputFourthPlate.innerText = `${plateName04}`

    outputPriceValue01.innerText = `${platePrice01}`
    outputPriceValue02.innerText = `${platePrice02}`
    outputPriceValue03.innerText = `${platePrice03}`
    outputPriceValue04.innerText = `${platePrice04}`

    outputSectorName01.innerText = `${nameSectorA}`
    outputSectorName02.innerText = `${nameSectorB}`
    outputSectorName03.innerText = `${nameSectorC}`

}








function calcular() {
    //Busca dos dados da outra função
    const plateName0101 = document.getElementById('inputPlate01').value
    const plateName0202 = document.getElementById('inputPlate02').value
    const plateName0303 = document.getElementById('inputPlate03').value
    const plateName0404 = document.getElementById('inputPlate04').value

    const platePrice0101 = document.getElementById('inputPrice01').value
    const platePrice0202 = document.getElementById('inputPrice02').value
    const platePrice0303 = document.getElementById('inputPrice03').value
    const platePrice0404 = document.getElementById('inputPrice04').value

    const nameSectorAA = document.getElementById('inputSectorA').value
    const nameSectorBB = document.getElementById('inputSectorB').value
    const nameSectorCC = document.getElementById('inputSectorC').value


    const plate01 = document.getElementById('plate01').checked
    const plate02 = document.getElementById('plate02').checked
    const plate03 = document.getElementById('plate03').checked
    const plate04 = document.getElementById('plate04').checked

    const payMoney = document.getElementById('payMoney').checked
    const payCard = document.getElementById('payCard').checked

    const sectorA = document.getElementById('sectorA').checked
    const sectorB = document.getElementById('sectorB').checked
    const sectorC = document.getElementById('sectorC').checked

    const inputAddress = document.getElementById('inputAddress').value
//==========================================================================
    //Saida de dados
    const outputOrder = document.getElementById('outputOrder')
    const outputPayment = document.getElementById('outputPayment')
    const outputTip = document.getElementById('outputTip')
    const outputTotal = document.getElementById('outputTotal')
    const outputAddress = document.getElementById('outputAddress')

    //Condições do programa

    //Criar uma condição para caso tenha mais de uma marmita selecionada.

    if(plate01 == true && payMoney == true && sectorA == true) {
        outputOrder.innerText = `${plateName0101}`
        outputPayment.innerText = `PIX`
        outputTip.innerText = `R$${nameSectorAA}`
        outputTotal.innerText = `R$${Number(platePrice0101)  + Number(nameSectorAA) }`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate02 == true && payMoney == true && sectorA == true) {
        outputOrder.innerText = `${plateName0202}`
        outputPayment.innerText = `PIX`
        outputTip.innerText = `R$${nameSectorAA}`
        outputTotal.innerText = `R$${Number(platePrice0202)  + Number(nameSectorAA) }`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate03 == true && payMoney == true && sectorA == true) {
        outputOrder.innerText = `${plateName0303}`
        outputPayment.innerText = `PIX`
        outputTip.innerText = `R$${nameSectorAA}`
        outputTotal.innerText = `R$${Number(platePrice0303) + Number(nameSectorAA)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate04 == true && payMoney == true && sectorA == true) {
        outputOrder.innerText = `${plateName0404}`
        outputPayment.innerText = `PIX`
        outputTip.innerText = `R$${nameSectorAA}`
        outputTotal.innerText = `R$${Number(platePrice0404) + Number(nameSectorAA)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate01 == true && payCard== true && sectorA == true) {
        outputOrder.innerText = `${plateName0101}`
        outputPayment.innerText = `Cartão`
        outputTip.innerText = `R$${nameSectorAA}`
        outputTotal.innerText = `R$${Number(platePrice0101) + Number(nameSectorAA)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate02 == true && payCard == true && sectorA == true) {
        outputOrder.innerText = `${plateName0202}`
        outputPayment.innerText = `Cartão`
        outputTip.innerText = `R$${nameSectorAA}`
        outputTotal.innerText = `R$${Number(platePrice0202) + Number(nameSectorAA)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate03 == true && payCard == true && sectorA == true) {
        outputOrder.innerText = `${plateName0303}`
        outputPayment.innerText = `Cartão`
        outputTip.innerText = `R$${nameSectorAA}`
        outputTotal.innerText = `R$${Number(platePrice0303) + Number(nameSectorAA)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate04 == true && payCard == true && sectorA == true) {
        outputOrder.innerText = `${plateName0404}`
        outputPayment.innerText = `Cartão`
        outputTip.innerText = `R$${nameSectorAA}`
        outputTotal.innerText = `R$${Number(platePrice0404) + Number(nameSectorAA)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate01 == true && payMoney == true && sectorB == true) {
        outputOrder.innerText = `${plateName0101}`
        outputPayment.innerText = `PIX`
        outputTip.innerText = `R$${nameSectorBB}`
        outputTotal.innerText = `R$${Number(platePrice0101)  + Number(nameSectorBB) }`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate02 == true && payMoney == true && sectorB == true) {
        outputOrder.innerText = `${plateName0202}`
        outputPayment.innerText = `PIX`
        outputTip.innerText = `R$${nameSectorBB}`
        outputTotal.innerText = `R$${Number(platePrice0202)  + Number(nameSectorBB) }`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate03 == true && payMoney == true && sectorB == true) {
        outputOrder.innerText = `${plateName0303}`
        outputPayment.innerText = `PIX`
        outputTip.innerText = `R$${nameSectorBB}`
        outputTotal.innerText = `R$${Number(platePrice0303) + Number(nameSectorBB)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate04 == true && payMoney == true && sectorB == true) {
        outputOrder.innerText = `${plateName0404}`
        outputPayment.innerText = `PIX`
        outputTip.innerText = `R$${nameSectorBB}`
        outputTotal.innerText = `R$${Number(platePrice0404) + Number(nameSectorBB)}`
        outputAddress.innerText = `${inputAddress}`
    }

    else if(plate01 == true && payCard== true && sectorB == true) {
        outputOrder.innerText = `${plateName0101}`
        outputPayment.innerText = `Cartão`
        outputTip.innerText = `R$${nameSectorBB}`
        outputTotal.innerText = `R$${Number(platePrice0101) + Number(nameSectorBB)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate02 == true && payCard == true && sectorB == true) {
        outputOrder.innerText = `${plateName0202}`
        outputPayment.innerText = `Cartão`
        outputTip.innerText = `R$${nameSectorBB}`
        outputTotal.innerText = `R$${Number(platePrice0202) + Number(nameSectorBB)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate03 == true && payCard == true && sectorB == true) {
        outputOrder.innerText = `${plateName0303}`
        outputPayment.innerText = `Cartão`
        outputTip.innerText = `R$${nameSectorBB}`
        outputTotal.innerText = `R$${Number(platePrice0303) + Number(nameSectorBB)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate04 == true && payCard == true && sectorB == true) {
        outputOrder.innerText = `${plateName0404}`
        outputPayment.innerText = `Cartão`
        outputTip.innerText = `R$${nameSectorBB}`
        outputTotal.innerText = `R$${Number(platePrice0404) + Number(nameSectorBB)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate01 == true && payCard== true && sectorC == true) {
        outputOrder.innerText = `${plateName0101}`
        outputPayment.innerText = `Cartão`
        outputTip.innerText = `R$${nameSectorCC}`
        outputTotal.innerText = `R$${Number(platePrice0101) + Number(nameSectorCC)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate02 == true && payCard == true && sectorC == true) {
        outputOrder.innerText = `${plateName0202}`
        outputPayment.innerText = `Cartão`
        outputTip.innerText = `R$${nameSectorCC}`
        outputTotal.innerText = `R$${Number(platePrice0202) + Number(nameSectorCC)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate03 == true && payCard == true && sectorC == true) {
        outputOrder.innerText = `${plateName0303}`
        outputPayment.innerText = `Cartão`
        outputTip.innerText = `R$${nameSectorCC}`
        outputTotal.innerText = `R$${Number(platePrice0303) + Number(nameSectorCC)}`
        outputAddress.innerText = `${inputAddress}`
    }
    else if(plate04 == true && payCard == true && sectorC == true) {
        outputOrder.innerText = `${plateName0404}`
        outputPayment.innerText = `Cartão`
        outputTip.innerText = `R$${nameSectorCC}`
        outputTotal.innerText = `R$${Number(platePrice0404) + Number(nameSectorCC)}`
        outputAddress.innerText = `${inputAddress}`
    }
    

}