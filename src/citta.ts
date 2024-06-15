import { IMezzo } from "./mezzo.js";

interface ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];
  aggiungiMezzo(mezzo: IMezzo): void;
}

/* The class Citta represents a city with a name and available transportation options. */
export class Citta implements ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];
  constructor(nome: string, mezziDisponibili: IMezzo[]) {
    this.nome = nome;
    this.mezziDisponibili = mezziDisponibili;
  }
  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezziDisponibili.push(mezzo);
  }
}
