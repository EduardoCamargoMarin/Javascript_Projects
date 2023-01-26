
const frm = document.querySelector("form")
const outputTitle = document.querySelector("h3")
const outputTime = document.querySelector("h4")

frm.addEventListener("submit",function(e) {
    const title = frm.inputTitulo.value
    const duration = Number(fmr.duracao.value)

    const hours = Math.floor(duration / 60)
    const minutes = Math.floor(duration % 60)

    outputTitle.innerText = title
    outputTime = `${hours} hours and ${minutes} minutes`

    e.preventDefault()

})