/* The class Mezzo represents a vehicle with properties such as type, id, and state, and has a method
to assign the vehicle to a user. */
export class Mezzo {
    constructor(tipo, id, stato = "disponibile") {
        this.tipo = tipo;
        this.id = id;
        this.stato = stato;
    }
    assegnaUtente(utente) {
        console.log(`Il mezzo ${this.tipo} con id ${this.id} è stato assegnato all'utente ${utente.cognome} ${utente.nome}`);
        this.stato = "in uso";
    }
}
