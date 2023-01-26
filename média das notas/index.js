//média dos alunos com validação de aprovação ou reprovação, a nota não pode passar de 10 e não pode ser negativo

const nota01 = 9 // 0 - 09
const nota02 = 8 // 0 - 08
const atividadeExtra = 3
const mediaParcial = (nota01 + nota02)/2
const mediaFinal = (nota01 + nota02 + atividadeExtra) / 2

//validação da nota

if (nota01 > 9 || nota02 > 8) {
    console.log(`nota inserida incorretamente! - Nota acima do determinado`)
    
}
else if( nota01 < 0 || nota02 < 0){
    console.log(`nota inserida incorretamente! - Numeros negativos`)
}
else if(atividadeExtra > 3) {
    console.log(`nota inserida incorretamente! - Nota da atividade está acima de 3`)
}
else if(atividadeExtra < 0) {
    console.log(`nota inserida incorretamente! - Numeros negativos em atividade extra`)
}
else if(mediaFinal < 6) {
    console.log(`N1: ${nota01}\nN2: ${nota02}\nAtividade Extra: ${atividadeExtra}\nNota Parcial: ${mediaParcial}`)
    console.error(`Nota Final: ${mediaFinal} o aluno(a) está de recuperação`)
}
else {
    console.log(`N1: ${nota01}\nN2: ${nota02}\nAtividade Extra: ${atividadeExtra}\nNota Parcial: ${mediaParcial}`)
    console.log(`Nota Final: ${mediaFinal} o aluno(a) foi aprovado`)

}



