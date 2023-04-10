//Para criar um sistema de tradução de texto, pode haver varios meios de resolver, porém vamos testar com alguns modelos.
// 2° versão é traduzir frases que já estão visiveis para o usuário.

const text01 = document.getElementById('text01')
const text02 = document.getElementById('text02')

let translatePTBR = document.getElementById('btn_ptbr')
let translateEN = document.getElementById('btn_en')

//text01.innerText = 'Esse é um teste inicial!'
//text02.innerText = 'Esse é o teste final!'

translatePTBR.addEventListener("click", () => {
text01.innerText = 'Esse é um teste inicial!'
text02.innerHTML = 'Esse é o teste final!'
})

translateEN.addEventListener("click", () => {
text01.innerText = 'This is an initial test!'
text02.innerHTML = 'This is the final test!'
})