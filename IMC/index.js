
function calcular() {
    const name = document.getElementById('inputName').value
    const male = document.getElementById('inputMale').checked
    const female = document.getElementById('inputFemale').checked
    const heightValue = document.getElementById('inputHeight').value
    const weightValue = document.getElementById('inputWeight').value
    const outputValue = document.getElementById('outputValue')

    if (male == true) {
      let imcMale = (22 * Math.pow(heightValue,2))
        outputValue.innerText = `${name}: seu peso atual é de ${weightValue} kg, o peso ideal seria ${imcMale} kg
        \nVocê precisa emagrecer ${weightValue - imcMale}kg`

    }
    else if(female == true) {
       let imcFemale = 21* Math.pow(heightValue,2)
        outputValue.innerText = `${name}: seu peso atual é de ${weightValue}kg, o peso ideal seria ${imcFemale}kg
        \nVocê precisa emagrecer ${weightValue - imcFemale}kg`
    }
    else {
        outputValue.innerText = 'Sexo não selecionado'
    }

}
