/* The class `Utente` in TypeScript represents a user with properties such as name, surname, email, and payment
method, and includes a method to book a vehicle if it is available. */
export class Utente {
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    prenotaMezzo(mezzo) {
        if (mezzo.stato === "disponibile") {
            mezzo.assegnaUtente(this);
            console.log(`Mezzo ${mezzo.id} prenotato con successo!`);
        }
        else
            console.log(`Ci dispiace, ma il mezzo ${mezzo.id} è già in uso`);
    }
}
