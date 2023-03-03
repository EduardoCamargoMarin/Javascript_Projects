
// Cria um array para armazenar os dados
let dados = [];

// Cria uma função que adiciona os dados inseridos no formulário ao array e atualiza a tabela na página
function adicionarDados() {
  // Obtém os valores dos campos de entrada do formulário
  let conta = document.getElementById("conta").value;
  let valor = document.getElementById("valor").value;
  
  // Adiciona um objeto com as informações do novo dado ao array
  dados.push({conta: conta, valor: valor});
  
  // Limpa os campos do formulário
  document.getElementById("conta").value = "";
  document.getElementById("valor").value = "";
  
  // Atualiza a tabela na página
  let tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
  let novaLinha = tabela.insertRow(tabela.length);
  let celula1 = novaLinha.insertCell(0);
  let celula2 = novaLinha.insertCell(1);
  
  celula1.innerHTML = conta;
  celula2.innerHTML = `R$`+ valor;
}
