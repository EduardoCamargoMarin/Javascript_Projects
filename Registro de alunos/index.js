
//Armazenamento de dados
let info = []

function adicionarDados() {
    //Entrada de dados
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let registro = document.getElementById('registro').value
    let curso = document.getElementById('curso').value

    //Objeto para adicionar na array
    info.push({
        nome:nome,
        idade:idade,
        registro:registro,
        curso:curso
    })

    //Limpa os dados do formulário na entrada de dados
    document.getElementById('nome').value = ''
    document.getElementById('idade').value = ''
    document.getElementById('registro').value = ''
    document.getElementById('curso').value = ''

    //permanência do antigo dado registrado
    let tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0]
    let novaLinha = tabela.insertRow(tabela.length)
    let celula1 = novaLinha.insertCell(0)
    let celula2 = novaLinha.insertCell(1)
    let celula3 = novaLinha.insertCell(2)
    let celula4 = novaLinha.insertCell(3)
    
    celula1.innerHTML = nome + ' | '
    celula2.innerHTML = idade + ' | '
    celula3.innerHTML = registro + ' | '
    celula4.innerHTML = curso + ' | '
}