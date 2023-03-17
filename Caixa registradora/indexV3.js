// Nessa aplicação o objetivo é ao inserir o codigo do produto, trazer todas as informações no console

const productCode = 32144 //Codigo do produto a ser inserido
const productRootCode = [321444, 102333, 103532, 104543, 323111, 233455] //Codigo de todos os produtos
const productName = ['Apple', 'Pear', 'Melon', 'Watermelon', 'Lemon', 'Orange'] //Nome de todos os produtos do departamento especifico
const productPrice = [0.43, 0.56, 1.67, 3.59, 0.23, 1.11] //Valor de todos os produtos do departamento especifico

let allItems = {
    item: [
        productName[0],
        productName[1],
        productName[2],
        productName[3],
        productName[4],
        productName[5],
    ],
    code: [
        productRootCode[0],
        productRootCode[1],
        productRootCode[2],
        productRootCode[3],
        productRootCode[4],
        productRootCode[5]
    ]
}


if(productCode === productRootCode[0]) {
    let productItem = {
        fruit: [productName[0]],
        price: [productPrice[0]]
    }
    console.table(productItem)
}
else if(productCode === productRootCode[1]) {
    let productItem = {
        fruit: [productName[1]],
        price: [productPrice[1]]
    }
    console.table(productItem)
}
else if(productCode === productRootCode[2]) {
    let productItem = {
        fruit: [productName[2]],
        price: [productPrice[2]]
    }
    console.table(productItem)
}
else if(productCode === productRootCode[3]) {
    let productItem = {
        fruit: [productName[3]],
        price: [productPrice[3]]
    }
    console.table(productItem)
}
else if(productCode === productRootCode[4]) {
    let productItem = {
        fruit: [productName[4]],
        price: [productPrice[4]]
    }
    console.table(productItem)
}
else if(productCode === productRootCode[5]) {
    let productItem = {
        fruit: [productName[5]],
        price: [productPrice[5]]
    }
    console.table(productItem)
}
else {
    console.error(`Product code >> ${productCode} << invalid - Product does not exist\nThese are the confirmed products`)

    console.table(allItems)
}
