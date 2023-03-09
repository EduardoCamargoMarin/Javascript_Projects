function pacientsRecords() {
   //Dados dos nomes dos pacientes
    let pacients = { 
        name: document.getElementById('pacient').value  
    } 
    //Dados dos D/H das consultas
    let appointment = {
        date: document.getElementById('date').value,

        time: document.getElementById('time').value
    }
    //Dados do histórico da consulta do paciente.
    let description = {
        record: document.getElementById('description').value
    }

    const outputResult  = document.getElementById('outputResult')

    outputResult.innerText = `${pacients.name} | ${appointment.date} | ${description.record}`

    console.table(`${pacients.name} ${appointment.date} ${description.record}`)
}

