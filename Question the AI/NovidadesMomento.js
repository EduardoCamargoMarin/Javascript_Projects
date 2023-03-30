//Criar uma Aplicação que traz as novidades do dia para o usuário de maneira aleatória.
//Porem dependendo o horário do seu computador vai trazer uma noticia diferente.


let randomNewsMorning = [
    'Morning noticia A',
    'Morning noticia B',
    'Morning noticia C',
    'Morning noticia D',
    'Morning noticia E',
    'Morning noticia F',
    'Morning noticia G',
    'Morning noticia H'
]
let randomNewsAfternoon = [
    'Afternoon noticia A',
    'Afternoon noticia B',
    'Afternoon noticia C',
    'Afternoon noticia D',
    'Afternoon noticia E',
    'Afternoon noticia F',
    'Afternoon noticia G',
    'Afternoon noticia H'
]
let randomNewsEvening = [
    'Evening noticia A',
    'Evening noticia B',
    'Evening noticia C',
    'Evening noticia D',
    'Evening noticia E',
    'Evening noticia F',
    'Evening noticia G',
    'Evening noticia H'
]

let toGoNews = new Date // Variavel do horário


    let question = 'Tell me the news' // pergunta padrão
 

    let answerMorning = Math.floor(Math.random() * randomNewsMorning.length) // randomiza  o index
    let answerAfternoon = Math.floor(Math.random() * randomNewsAfternoon.length) // randomiza  o index
    let answerEvening = Math.floor(Math.random() * randomNewsEvening.length)  // randomiza  o index
    
    if(question === 'Tell me the news' && toGoNews.getHours() <= 11 ) {
        console.log(`${randomNewsMorning[answerMorning]} ${toGoNews.getHours()}: ${toGoNews.getMinutes()}: ${toGoNews.getSeconds()}`) // puxa o dados do index manhã.
        
    }
    else if(question === 'Tell me the news' && toGoNews.getHours() <= 17) {
        console.log(`${randomNewsAfternoon[answerAfternoon]} ${toGoNews.getHours()}: ${toGoNews.getMinutes()}: ${toGoNews.getSeconds()}`) // puxa o dados do index para tarde.
        
    }
    else if(question === 'Tell me the news' && toGoNews.getHours() >= 18) {
        console.log(`${randomNewsEvening[answerEvening]} ${toGoNews.getHours()}: ${toGoNews.getMinutes()}: ${toGoNews.getSeconds()}`) // puxa o dados do index para noite.
        
    }
    else if(question === 'Tell me the news' && toGoNews.getHours() <= 4) {
        console.log(`${randomNewsEvening[answerEvening]} ${toGoNews.getHours()}: ${toGoNews.getMinutes()}: ${toGoNews.getSeconds()}`) // puxa o dados do index para madrugada.
        
    }
    else {
        console.error('Sorry, I did not understand the question') // Caso a aplicação não entenda o que foi comunicado.
    }
