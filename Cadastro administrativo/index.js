//armazenar os dados inseridos.
let cadastros = []


//Função adiciona novos dados que são enviados para "cadastros" por meio do .push()
function addItem() {
    const employee = document.getElementById('employee').value
    const role = document.getElementById('role').value

    cadastros.push({employee,role})
    updateTable()
    //Deixa o campo de entrada vazio após executar a ação acima.
    document.getElementById('employee').value = ''
    document.getElementById('role').value = '' 
}

//função para excluir os usuários.
function removeItem(index) {
    cadastros.splice(index, 1) // deleta 1 item.
    updateTable()
}

//Função para atualizar a parte da tabela mostrando todos os cadastros gerados.
function updateTable() {
    let tabela = document.getElementById('tabela')
    tabela.innerHTML = ''

    for(let i = 0; i < cadastros.length; i++) {
        let empregado = cadastros[i]

        let linha = tabela.insertRow()
        let employeeColuna = linha.insertCell()
        let roleColuna = linha.insertCell()
        let actionColuna =linha.insertCell()

        employeeColuna.innerHTML = empregado.employee
        roleColuna.innerHTML = empregado.role

        let btnAction = document.createElement('button')
        btnAction.innerHTML = 'Excluir'
        btnAction.onclick = function() {
            removeItem(i)
        }
        actionColuna.appendChild(btnAction)
    }
}