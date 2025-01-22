// # js-email-list
// Attraverso l’apposita API di Boolean  https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre) 


// Ricavo i dati del Dom
const boxEmail = document.getElementById('box-email')
// Salvo l'endpoint
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

// METODO SENZA ARRAY ESTERNO
// Salvo la stringa che conterra le liste inzialmente vuota
let items = ``;

// creo un ciclo che mi genera 10 email
for(let i = 0; i < 10; i++){
    // creo la chiamata api per trovare l'oggetto contente l'email 
    axios.get(endpoint)
        .then(element => {
            // Salvo email ricavandomela dal suo percorso 
            const email = element.data.response;
            console.log(`Ho generato: ${email}`);
            
            // Genero una lista
            let item =
            `
            <li class="list-group-item">${email}</li>
            `;
            console.log(`La mia lista: ${item}`);

            // La aggiungo alle altre liste
            items += item;
            // La inserisco nel DOM
            boxEmail.innerHTML = items;

        })
        // codice da eseguire in caso di errore
        .catch(error => console.error(error))
 }

/*
// METODO CON ARRAY ESTERNO
// Salvo un array emails inzialmente vuoto
let emails = [];
// ciclo che mi genera 10 emails
for(let i = 0; i < 10; i++){

    // Chiamata api per trovare l'oggetto contente l'email 
    axios.get(endpoint)
        .then(element => {

            // Salvo data dove all'interno ci sara l'informazione che mi serve
            const data = element.data;
            // Ricavo l'informazione
            const result = data.response
            
            // Salvo i dati ricevuti nell'array emails
            emails.push(result);
            // console.log(`Ho generato: ${result}`);
            

            // Salvo l'elemento che conterra la stringa html inizialmente vuota
            let items = ``;

            // se le email sono 10 allora puoi entrare
            if (emails.length === 10){

                // per ogni email
                emails.forEach((email, index) => {
                    console.log(`Email numero ${index+1}: ${email}`);
                    

                    // Genero una lista
                    let item = 
                    `
                    <li class="list-group-item">${email}</li>
                    `;
                    // La aggiungo alle altre liste
                    items += item;
                })
                // La inserisco nel DOM
                boxEmail.innerHTML = items;
                console.log(`le mie liste: ${items}`);
            }

        })
         // codice da eseguire in caso di errore
    .catch(error => console.error(error))
}
*/
