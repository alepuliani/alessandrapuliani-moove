/* The class Citta represents a city with a name and available transportation options. */
export class Citta {
    constructor(nome, mezziDisponibili) {
        this.nome = nome;
        this.mezziDisponibili = mezziDisponibili;
    }
    aggiungiMezzo(mezzo) {
        this.mezziDisponibili.push(mezzo);
    }
}
