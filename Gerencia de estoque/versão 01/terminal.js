
//Armazenamento de dados dos nomes dos produtos
// Setor A é destinado aos produtos de classificação "ELETRONICO"
class sectorA {
  constructor(product_name,ID, ) {
        this.product = product_name;
        this.ID = ID;
    }
}
// Setor B é destinado aos produtos de classificação "ADMINISTRATIVO"
class sectorB {
    constructor(product_name,ID, ) {
        this.product = product_name;
        this.ID = ID;
    }
}

//====================================================
//       >>Criação dos itens de cada setor<<
//====================================================


//====================================================
//             >> Itens do setor A <<
//====================================================

const A_001 = new sectorA ('MAQUINA CARTAO CLASSY', '02234-90')
const A_002 = new sectorA ('IMPRESSORA EPSON JATO', '03322-01')
const A_003 = new sectorA ('CAMERA VIDEO SERVER IP', '11103-45')

let sectorA_products = [A_001, A_002, A_003] // para visualização

console.table(sectorA_products)

//====================================================
//             >> Itens do setor B <<
//====================================================

const B_001 = new sectorB ('BLOCO DE NOTAS 5X5', '12534-94')
const B_002 = new sectorB ('CAIXA CANETA BIC AZUL 100X', '59862-01')
const B_003 = new sectorB ('GRAMPEADOR XEIN BLACK', '32010-05')
const B_004 = new sectorB ('GRAMPO XINGU 250X', '32690-05')

let sectorB_products = [B_001, B_002, B_003, B_004] // para visualização

console.table(sectorA_products.concat(sectorB_products)) // concat se quiser juntar todas




