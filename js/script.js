// # js-email-list
// Attraverso l’apposita API di Boolean  https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre) 


// mi ricavo i dati del Dom

const BoxEmail = document.getElementById('box-email')
// mi salvo l'endpoint
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'
// creo un ciclo di misura 10 

    // mi creo la chiamata ricavandomi il datoiesimo che mi interessa 
let emails = [];
    for(let i = 0; i < 10; i++){
        axios.get(endpoint)
            .then((element) => {
                // console.log(element);
                const data = element.data;
                // console.log(data);
                const email = data.response
                // console.log(email);

                // mi salvo i dati in un array esterno
                array.push(email)  
            })
            .catch((error) => {
                console.error(error)
            })

    }
console.log(array);


// lo stampo a schermo
// BoxEmail.innerHTML = `<li class="list-group-item">${email}</li>`