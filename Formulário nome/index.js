
//variáveis relacionadas ao form e o h3 (onde vai ficar o resultado)
const formulario = document.querySelector("form")
const resposta = document.getElementById("h3")

//comando para executar

formulario.addEventListener("submit", (envio) => {
    const nome = formulario.inputName.value // pegando as informações escritas no input da pagina
    resposta.innerText = `Olá ${nome}`

    envio.preventDefault() //evita de enviar e dar um load na pagina
})