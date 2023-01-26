//dividir a conta que a vista tem 5% de desconto ou 3 vezes sem juros, 
//mas se fizer em mais parcelas tem acrescimo de 15%


const bill = 140
const billPaid = bill * 0.95
const billTimes = 4
const billToPay = bill / billTimes
const billIncreased = bill * 1.15

    if (billTimes == 1) {
        console.log(`Your bill is $${bill} and it has a discount of 5%. Your total is $${billPaid}`)
        
    } 
    else if(billTimes == 2){
        console.log(`Your bill is $${bill} and it has been divided by ${billTimes}. You will pay ${billTimes} times of ${billToPay.toFixed(2)}`)
    }
    else if(billTimes == 3){
        console.log(`Your bill is $${bill} and it has been divided by ${billTimes}. You will pay ${billTimes} times of ${billToPay.toFixed(2)}`)
    }
    else {
        console.log(`Your bill is $${bill} and it has been divided by ${billTimes}. \nYou will have an increase of 15% . You will pay ${billTimes} times of ${billIncreased.toFixed(2)}`)
    }


