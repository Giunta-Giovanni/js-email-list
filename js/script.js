// # js-email-list
// Attraverso l’apposita API di Boolean  https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre) 


// mi ricavo i dati del Dom

const boxEmail = document.getElementById('box-email')
// mi salvo l'endpoint
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
/*
// mi salvo un array vuoto che contiene 
let emails = [];
// creo un ciclo di misura 10 
for(let i = 0; i < 10; i++){

    // mi creo la chiamata ricavandomi il datoiesimo che mi interessa 
        axios.get(endpoint)
            .then((element) => {
                // mi salvo data dove all'interno ci sara l'informazione che mi serve
                const data = element.data;

                // mi ricavo l'informazione
                const result = data.response
                // console.log(emails);

                
                // mi salvo i dati in un array esterno
                emails.push(result);

                // mi salvo l'elemento che conterra la stringa html inizialmente vuota
                let items = ``;

                // se le email sono 10 allora puoi entrare
                if (emails.length === 10){
                    // per ogni email
                    emails.forEach((email, index) => {
                        // console.log(index, email);

                        // generami una stringa
                        let item = `<li class="list-group-item">${email}</li>`;

                        // aggiungila al resto 
                        items += item;
                    })

                    // lo stampo a schermo
                    boxEmail.innerHTML = items
                }
            })
            .catch((error) => {
                // codice da eseguire in caso di errore
                console.error(error)
            })
    }
*/

// metodo senza array esterno
// mi salvo l'elemento che conterra la stringa html inizialmente vuota

let items = ``;
// creo un ciclo di misura 10 
for(let i = 0; i < 10; i++){

    // mi creo la chiamata ricavandomi il datoiesimo che mi interessa 
        axios.get(endpoint)
            .then((element) => {
                // mi salvo data dove all'interno ci sara l'informazione che mi serve
                const data = element.data;

                // mi ricavo l'informazione
                const email = data.response

                // generami una stringa
                let item = `<li class="list-group-item">${email}</li>`;

                // aggiungila al resto 
                items += item;

                // lo stampo a schermo
                boxEmail.innerHTML = items
                })

            .catch((error) => {
                // codice da eseguire in caso di errore
                console.error(error)
            })
    }