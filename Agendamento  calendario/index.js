//Criar uma aplicação que o usuário selecione a data marcada para o proprietário checar os agendamentos, porém não atende dois clientes ao mesmo tempo.
//Utilizar um sistema de calendário com TRY CATCH

//======================================================
//Criar o calendário.
let calendar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
let time = [8,9,10,11,13,14,15,16,17]

//constructor do cliente 01
class appoitmentClient01 {
    constructor (month, week, days, time) {
        this.month = month;
        this.week = week;
        this.days = days;
        this.time = time;
    }}

//constructor do cliente 02
class appoitmentClient02 {
    constructor (month, week, days, time) {
        this.month = month;
        this.week = week;
        this.days = days;
        this.time = time;
    }}

let clientAgenda01 = new appoitmentClient01()
let clientAgenda02 = new appoitmentClient02()






//validar se  as datas não condiz com 2 clientes (try catch)

