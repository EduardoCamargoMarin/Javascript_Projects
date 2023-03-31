// Criar uma aplicação que funcione igual a regra de portas bloqueadas em jogos.
let hashCodeNewApply = Math.ceil(Math.random()*8475634) 
let infoHashUnlock = 'key_'

let hashCodeUnlock = `${infoHashUnlock }${hashCodeNewApply}` // toda vez que iniciar uma aplicação vai gerar esse codigo

let doorCloseMainHall = `${infoHashUnlock }${hashCodeNewApply}`
console.log(`Main hall door ${doorCloseMainHall}`)
console.log(`Main hall Item ${hashCodeUnlock}`)

if(hashCodeUnlock === doorCloseMainHall) {
    console.log("Door unlock")
}
else{
    console.error(`This key does not belong here`)
}

//A regra de itens que abrem portas nos jogos se baseiam em itens que possuem o mesmo codigo para a confirmação.
//Para não gerar o mesmo hash e criar um erro, é necessário criar uma associação das hashs em variaveis diferentes.

