//Criar uma  Aplicação que traz as novidades do dia para o usuário de maneira aleatória.

let randomNews = [
    'Noticia A',
    'Noticia B',
    'Noticia C',
    'Noticia D',
    'Noticia E',
    'Noticia F',
    'Noticia G',
    'Noticia H'
]

    let question = 'Tell me the news'
 

    let answer = Math.floor(Math.random() * randomNews.length) // randomiza  o index
    
    if(question === 'Tell me the news') {
        console.log(randomNews[answer]) // puxa o dados do index.
    }
    else {
        console.error('Sorry, I did not understand the question')
    }

