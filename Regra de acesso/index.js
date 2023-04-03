//Criar uma regra de acesso para uma API, onde a entrada de dados deve ser fornecida através de um IP publico.

//Criação de um armazenamento de dados para os projetos que desejam ter acesso ao API.
class cityPermission{
    constructor(city, projectCode, id_permission, ip_external_access) {
        this.city = city;
        this.projectCode = projectCode;
        this.id_permission = id_permission;
        this.ip_external_access = ip_external_access;
    }
}

//teste de acesso a API;
let externalAccess = []

//regra para o acesso liberar IP permitido e bloquear os que estão  fora da regra.

while(externalAccess in cityPermission) {
    console.log('Access granted')
}

//Entrada do dado do IP publico na regra
let external_IP = new cityPermission('BRAGANÇA PAULISTA', 254159, )