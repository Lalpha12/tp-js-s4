const numberFormatter = new Intl.NumberFormat();

dataPays.forEach( pays => pays.toString = function() { return `${this.nom} : ${this.population} hab., ${this.superficie}km², ${this.PIB} milliardsUS$` } );

dataPays.slice(0,5).forEach( pays => console.log(pays.toString ()));

/****  QUESTION 2 *****/
console.log(' *** QUESTION 2 ***');

const populationTotale = dataPays.reduce((acc,pays)=>acc+pays.population,0);;

console.log(`population totale : ${numberFormatter.format(populationTotale)}`);
/***********************/


/****  QUESTION 3 *****/
console.log(' *** QUESTION 3 ***');
const findData=name=>dataPays.find(elt=>elt.nom===name);
console.log(findData('France').toString());
/***********************/


/****  QUESTION 4 *****/
console.log(' *** QUESTION 4 ***');
const dixpluspeuples = [...dataPays].sort((a,b)=>b.population-a.population).slice(0,10).map(pays=>pays.nom);

console.log(`10 plus peuplés : ${dixpluspeuples}`);
/***********************/


/****  QUESTION 5 *****/
console.log(' *** QUESTION 5 ***');
dataPays.map(pays =>({nom :pays.nom, densite: pays.population/pays.superficie}))
.filter(pays => pays.densite>1000).sort((a,b)=>b.densite - a.densite).map(pays =>`${pays.nom}:${pays.densite}hab/km2`).forEach(elt=>console.log(elt));

/***********************/


/****  QUESTION 6 *****/
console.log(' *** QUESTION 6 ***');
const pib = dataPays
    .filter(pays => (pays.PIB * 1_000_000_000) / pays.population < 10000)
    .reduce((acc, pays) => acc + pays.population, 0);

console.log(pib);

/***********************/
