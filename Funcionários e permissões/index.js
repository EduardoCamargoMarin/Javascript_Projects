
    let employeeName = [] //armazena os dados dos nomes dos funcionários
    let employeeID = [] //armazena os dados dos IDs dos funcionários
    let employeeRole =[] //armazena os dados das funções dos funcionários
    
    let employeeAccess = { // objeto com as funções disponíveis na empresa
        admin: 'ADMINISTRADOR',
        devLv01: 'OPERADOR NIVEL 1',
        opLv02: 'OPERADOR ENCARREGADO',
        rhLv01: 'ASSISTENTE DE RH',
        rhLv02: 'GESTOR DE RH',
        contabilLv01: 'ASSISTENTE FINANCEIRO',
        contabilLv02: 'SUPERVISOR FINANCEIRO',
    }
    // Nome dos funcionarios
    employeeName.push('Edward Carby Clusterfield')
    employeeName.push('Mycra Lusterman')
    employeeName.push('Angela Milestone')
    employeeName.push('Favary Mustler')
    employeeName.push('Milica Mier')
    employeeName.push('Jane Makarov')
    employeeName.push('John Fisterman')
    employeeName.push('Kyle Mikas')
    
    //ID dos funcionários
    employeeID.push('5235-98')
    employeeID.push('4574-99')
    employeeID.push('1245-65')
    employeeID.push('9985-88')
    employeeID.push('1200-01')
    employeeID.push('2254-37')
    employeeID.push('5889-74')
    employeeID.push('6952-69')
    
    //função dos funcionários
    employeeRole.push(employeeAccess.opLv02)
    employeeRole.push(employeeAccess.admin)
    employeeRole.push(employeeAccess.contabilLv01)
    employeeRole.push(employeeAccess.admin)
    employeeRole.push(employeeAccess.rhLv02)
    employeeRole.push(employeeAccess.rhLv01)
    employeeRole.push(employeeAccess.devLv01)
    employeeRole.push(employeeAccess.contabilLv02)


    //Resultado da pesquisa
    console.log(employeeName[0],employeeID[0],employeeRole[0])
    

