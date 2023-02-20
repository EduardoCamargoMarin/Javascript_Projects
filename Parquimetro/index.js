function calcular() {
    const money = document.getElementById('inputMoney').value

    const change = document.getElementById('outputChange')
    const time = document.getElementById('outputTime')

    
        if (money < 2) {
            time.innerText = `Tempo: 30 min`
            change.innerText = `Troco:R$ ${money - 1}`
        }
        else if(money < 3) {
            time.innerText = `Tempo: 60 min`
            change.innerText = `Troco:R$ ${(money - 2).toFixed(2)}`
        }
        else if(money < 5) {
            time.innerText = `Tempo: 180 min`
            change.innerText = `Troco:R$ ${(money - 4).toFixed(2)}`
        }
        else {
            time.innerText = `Tempo: 180 min`
            change.innerText = `Troco:R$ ${money - 4}`
        }
    }



