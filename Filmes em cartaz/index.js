
//const frm = document.querySelector("form")
//const outputTitle = document.querySelector("h3")
//const outputTime = document.querySelector("h4")

// frm.addEventListener("submit", (e) => {

   // const title = String( frm.inputTitulo.value) 
   // const duration = Number(fmr.duracao.value)

  //  const hours = Math.floor(duration / 60)
  //  const minutes = Math.floor(duration % 60)

 //   outputTitle.innerText = title
  //  outputTime = `${hours} hours and ${minutes} minutes`

  //e.preventDefault()

//})

function calcular() {
    const title = document.getElementById('inputTitulo').value
    const duration = document.getElementById('duracao')

    const outTitle = document.getElementById('outputTitle')
    const outTime =  document.getElementById('outputTime')

    const timeValue = Number(duration.value)

    const hours = Math.floor(timeValue / 60)
    const minutes = Math.floor(timeValue % 60)

    outTitle.innerHTML = `The movie title is ${title}`
    outTime.innerHTML = `${hours} hours and ${minutes} minutes`
}