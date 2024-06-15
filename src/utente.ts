import { IMezzo } from "./mezzo.js";

export interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;
  prenotaMezzo(mezzo: IMezzo): void;
}

/* The class `Utente` in TypeScript represents a user with properties such as name, surname, email, and payment 
method, and includes a method to book a vehicle if it is available. */
export class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamento: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamento = metodoPagamento;
  }
  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.stato === "disponibile") {
      mezzo.assegnaUtente(this);
      console.log(`Mezzo ${mezzo.id} prenotato con successo!`);
    } else console.log(`Ci dispiace, ma il mezzo ${mezzo.id} è già in uso`);
  }
}
