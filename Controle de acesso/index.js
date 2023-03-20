
let adminLogin = 'admin'
let supportLogin = 'support'
let operatorLogin = 'operator'

let adminPassword = '123'
let supportPassword = '456'
let operatorPassword = '789'


function acessar() {
    let userLogin = document.getElementById('login').value
    let userPassword = document.getElementById('password').value

    if(userLogin === adminLogin && userPassword === adminPassword) {
        alert('Your are the admin')
    }
    else if(userLogin === supportLogin && userPassword === supportPassword) {
        alert('Your are the support')
    }
    else if(userLogin === operatorLogin && userPassword === operatorPassword) {
        alert('Your are the operator')
    }
    else {
        alert('error')
    }

    
}