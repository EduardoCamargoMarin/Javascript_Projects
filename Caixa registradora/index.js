
//Armazenamento de dados - frutas
class productFruit {
    constructor(productName, productStock, productPrice) {
        this.fruitName = productName;
        this.fruitStock = productStock;
        this.fruitPrice = productPrice;
    }
}
//Armazenamento de dados - Produtos de limpeza
class productCleaning {
    constructor(productName, productStock, productPrice) {
        this.cleaningName = productName;
        this.cleaningStock = productStock;
        this.cleaningPrice = productPrice;
    }
}
//Armazenamento de dados - Açogue
class productMeat {
    constructor(productName, productStock, productPrice) {
        this.meatName = productName;
        this.meatStock = productStock;
        this.meatPrice = productPrice;
    }
}
//Armazenamento de dados - Gerais (biscoitos, frios, laticionios, enlatados)
class productGeneralStore {
    constructor(productName, productStock, productPrice) {
        this.genaralStoreName = productName;
        this.genaralStoreStock = productStock;
        this.genaralStorePrice = productPrice;
    }
}

//Entrada dos dados - frutas
let productApple = new productFruit('Apple', 146, 0.45)
let productPear = new productFruit('Pear', 122, 0.44)
let productMelon = new productFruit('Melon', 99, 2.33)
let productLemon = new productFruit('Lemon', 210, 0.76)

//Entrada dos dados - Produtos de limpeza
let productYpe = new productCleaning('Ype', 146, 0.45)
let productOmo = new productCleaning('Omo', 122, 0.44)
let productBrush = new productCleaning('Brush', 99, 2.33)
let productVeja = new productCleaning('Veja', 210, 0.76)

//Entrada dos dados - Açogue
let productSausage = new productMeat('Sausage', 146, 0.45)
let productPicanha = new productMeat('Picanha', 122, 10.21)
let productAlcatra = new productMeat('Alcatra', 99, 11.11)
let productChicken = new productMeat('Chicken', 210, 5.43)

//Entrada dos dados - Gerais (biscoitos, frios, laticionios, enlatados)
let productCookie = new productGeneralStore('Cookie', 146, 3.23)
let productCheese = new productGeneralStore('Cheese', 122, 1.11)
let productHam = new productGeneralStore('Ham', 99, 2.33)
let productCheddar = new productGeneralStore('Cheddar', 210, 3.21)

//saida dos dados
console.table(productAlcatra)
console.table(productApple)
console.table(productChicken)
console.table(productCookie)
