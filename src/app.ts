import { Citta } from "./citta.js";
import { Mezzo } from "./mezzo.js";
import { Utente } from "./utente.js";

/* These lines are creating instances of the `Mezzo` class representing different types of vehicles
with specific properties. Each instance is initialized with a type (e.g., "bici", "scooter",
"monopattino"), an id, and a state (either "disponibile" for available or "in uso" for in use).
Here's a breakdown of each instance created: */
const bici1: Mezzo = new Mezzo("bici", 672265, "disponibile");
const bici2: Mezzo = new Mezzo("bici", 647821, "disponibile");
const scooter1: Mezzo = new Mezzo("scooter", 490210, "disponibile");
const monopattino1: Mezzo = new Mezzo("monopattino", 925543, "disponibile");
const monopattino2: Mezzo = new Mezzo("monopattino", 997433, "disponibile");
const monopattino3: Mezzo = new Mezzo("monopattino", 947937, "disponibile");

/* These lines of code are creating instances of the `Citta` class, which represents a city with
available transportation options. */
const Roma: Citta = new Citta("Roma", [scooter1]);
const Milano: Citta = new Citta("Milano", [bici1, monopattino2]);

/* The code snippet you provided is creating instances of the `Utente` class, which represents users in
the system. */
const utente1: Utente = new Utente(
  "Francesco",
  "Rossi",
  "francescorossi@gmail.com",
  "bancomat"
);

const utente2: Utente = new Utente(
  "Giulia",
  "Bianchi",
  "giuliabianchi@hotmail.it",
  "paypal"
);

/* The lines `Roma.aggiungiMezzo(bici2);`, `Roma.aggiungiMezzo(monopattino1);`, and
`Milano.aggiungiMezzo(monopattino3);` are adding instances of the `Mezzo` class to the list of
available vehicles in the respective cities. */
Roma.aggiungiMezzo(bici2);
Roma.aggiungiMezzo(monopattino1);
Milano.aggiungiMezzo(monopattino3);

console.log(Roma.mezziDisponibili);
console.log(Milano.mezziDisponibili);

/* The lines `utente1.prenotaMezzo(bici1);`, `utente2.prenotaMezzo(monopattino3);`, and
`utente1.prenotaMezzo(monopattino3);` are simulating the process of a user (Utente) reserving a
vehicle (Mezzo) in a city. Here's what each line is doing: */
utente1.prenotaMezzo(bici1);
utente2.prenotaMezzo(monopattino3);
utente1.prenotaMezzo(monopattino3);
