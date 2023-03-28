//Criar uma aplicação que o usuário selecione a data marcada para o proprietário checar os agendamentos, porém não atende dois clientes ao mesmo tempo.

//======================================================
//Criar o calendário.
let calendar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
let date = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
let time = [8,9,10,11,13,14,15,16,17]

//constructor do cliente 01
class appoitmentClient01 {
    constructor (month, week, date, time) {
        this.month = month;
        this.week = week;
        this.date = date;
        this.time = time;
    }}

//constructor do cliente 02
class appoitmentClient02 {
    constructor (month, week, date, time) {
        this.month = month;
        this.week = week;
        this.date = date;
        this.time = time;
    }}

let clientAgenda01 = new appoitmentClient01(calendar[1], week[2], date[30], time[7] + 'h')
let clientAgenda02 = new appoitmentClient02(calendar[1], week[2], date[30], time[7] + 'h')



if(clientAgenda01.month === calendar[1] && clientAgenda01.date === date[30]) {
        console.error('Error')
}
if(clientAgenda01.month === clientAgenda02.month && clientAgenda01.week === clientAgenda02.week && clientAgenda01.date === clientAgenda02.date && clientAgenda01.time === clientAgenda02.time){
    console.error('Horário já possui agendamento')
}







