
//Armazenamento de dados dos nomes dos produtos
// Setor A é destinado aos produtos de classificação "ELETRONICO"
class sectorA {
  constructor(product_name,ID, incomeQt,updateDate, outcomeQt, totalQt ) {
        this.product = product_name;
        this.ID = ID;
        this.date = updateDate;
        this.income_Quantity = incomeQt;
        this.outcome_Quantity = outcomeQt;
        this.total_Quantity = totalQt;

        this.total_Quantity = this.income_Quantity - this.outcome_Quantity
    }
}
// Setor B é destinado aos produtos de classificação "ADMINISTRATIVO"
class sectorB {
    constructor(product_name,ID, incomeQt,updateDate, outcomeQt, totalQt ) {
        this.product = product_name;
        this.ID = ID;
        this.date = updateDate;
        this.income_Quantity = incomeQt;
        this.outcome_Quantity = outcomeQt;
        this.total_Quantity = totalQt;

        this.total_Quantity = this.income_Quantity - this.outcome_Quantity
    }
}

//====================================================
//       >>Criação dos itens de cada setor<<
//====================================================


//====================================================
//             >> Itens do setor A <<
//====================================================



const A_001 = new sectorA ('MAQUINA CARTAO CLASSY', '02234-90', 30, '15/04/2023', 10)
const A_002 = new sectorA ('IMPRESSORA EPSON JATO', '03322-01',22,'10/04/2023',3)
const A_003 = new sectorA ('CAMERA VIDEO SERVER IP', '11103-45', 30, '15/04/2023', 6)

let sectorA_products = [A_001, A_002, A_003] // para visualização

//====================================================
//             >> Itens do setor B <<
//====================================================

const B_001 = new sectorB ('BLOCO DE NOTAS 5X5', '12534-94',22,'10/04/2023',12)
const B_002 = new sectorB ('CAIXA CANETA BIC AZUL 100X', '59862-01', 30, '15/04/2023', 1)
const B_003 = new sectorB ('GRAMPEADOR XEIN BLACK', '32010-05',22,'10/04/2023',0)
const B_004 = new sectorB ('GRAMPO XINGU 250X', '32690-05', 30, '15/04/2023', 22)

let sectorB_products = [B_001, B_002, B_003, B_004] // para visualização

console.table(sectorA_products.concat(sectorB_products)) // concat se quiser juntar todas



//==========================================================================================
//Filtrar apenas os itens que foram adicionados no dia 15/04/2023

    let date15Product = [A_001, A_003, B_002, B_004]

    console.table(date15Product)

    