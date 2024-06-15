import { IUtente } from "./utente.js";

type tipoMezzo = "bici" | "scooter" | "monopattino";
type statoMezzo = "disponibile" | "in uso";
/* These interfaces in TypeScript are defining the structure of different types of objects in the code: */
export interface IMezzo {
  readonly id: number;
  stato: statoMezzo;
  assegnaUtente(utente: IUtente): void;
}

/* The class Mezzo represents a vehicle with properties such as type, id, and state, and has a method 
to assign the vehicle to a user. */
export class Mezzo implements IMezzo {
  tipo: tipoMezzo;
  readonly id: number;
  stato: statoMezzo;

  constructor(tipo: tipoMezzo, id: number, stato: statoMezzo = "disponibile") {
    this.tipo = tipo;
    this.id = id;
    this.stato = stato;
  }

  assegnaUtente(utente: IUtente): void {
    console.log(
      `Il mezzo ${this.tipo} con id ${this.id} è stato assegnato all'utente ${utente.cognome} ${utente.nome}`
    );
    this.stato = "in uso";
  }
}
