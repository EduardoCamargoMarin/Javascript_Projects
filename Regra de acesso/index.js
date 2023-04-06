//Criar uma regra de acesso para uma API, onde a entrada de dados deve ser fornecida através de um IP publico.

//Criação de um armazenamento de dados para os projetos que desejam ter acesso ao API.
class cityPermission{
    constructor(city, ip_external_access) {
        this.city = city;
        this.ip_external_access = ip_external_access;
    }
}


//Entrada do dado do IP publico na regra
 
    const BRAGANCAPAULISTA = new cityPermission('BRAGANCA PAULISTA', '187.58.22.49')
    const ITATIBA = new cityPermission('ITATIBA', '147.48.66.154')
    const MORUNGABA = new cityPermission('MORUNGABA', '155.64.33.222')
    const CAMPINAS = new cityPermission('CAMPINAS', '145.65.31.201') // Única cidade não autorizada
    const JUNDIAI = new cityPermission('JUNDIAI', '166.44.23.112')


//Teste de conexão com a API.
let testAccess = [CAMPINAS]

//Adicionar os IPs na regra de acesso
let cityAccess = [BRAGANCAPAULISTA, ITATIBA, MORUNGABA, JUNDIAI]

//Condição de acesso
if(cityAccess.includes(testAccess[0])) {
    console.log('Access granted')
}
else {
    console.error('Invalid Access')
}








 