'use strict';

// des listes pour des tests
const numbers = [2, 3, 5, 4, 10, 6];
const persons = [ {name : 'timoleon', age : 12 }, {name : 'bilbo', age : 111 }, {name : 'frodo', age : 33 }, {name : 'sam', age : 26 }];

/********** EXERCICE 1 ***********************/
console.log(` *** EXERCICE 1 *** `);

// exemple de manière de répondre aux questions d'un exercice

// Q1
/* computes the double of its parameter
 * @param x (number) a number
 * @return (number) the double of *x*
*/
const example = x => x * 2;

//Q2
// tests d'exécution de la fonction example
console.log(`Q2 - example(10) : ${example(10)}`);
console.log(`Q2 - example(21) : ${example(21)}`);

// Q3
/* filter and keep the elements of *list* smaller than *max*
 * @param list (Array) list of elements
 * @param max (Any) upper bound filter value
 * @return (Array) list of elements of *list* smaller than *max*
*/
const example2 = (list, max) => list.filter( elt => elt < max );

// Q4
// tests d'exécution de la fonction example2
console.log(`Q4 - example2(numbers, 5) : ${example2(numbers, 5)}`);

/*********************************************/



/********** EXERCICE 2 ***********************/
console.log(` *** EXERCICE 2 *** `);

//Q1
const noms=persons.map(nom =>nom.name);
console.log(`Q1 nom ${noms}`);
console.log(noms);
//Q2
const premiers=persons.map(nom => nom.name[0].toUpperCase());
console.log(`Q2 en majuscules : ${premiers}`);
//Q3
const niemelettre=persons.map((person,index) => person.name[index]);
console.log(`Q3 n ieme nom n ieme lettre : ${niemelettre}`);
//Q4
//Q4.1
const Capitalize = nom => nom ? nom[0].toUpperCase() + nom.slice(1) : "";
console.log(`Q4.1 mettre en majus : ${Capitalize("timoleon")}`);
//Q4.2
const premierMaj=persons.map(nom => Capitalize(nom));
console.log(`Q4.2 en majuscule  : ${premierMaj}`);
//Q5
//Q5.1
function myMap(liste,callback){
    let result=[];
    for(let i in liste){
        result.push(callback(liste[i],i,liste));
    }
    return result
}
//Q5.2
const premierMa=persons.myMap(nom => Capitalize(nom));
console.log(`Q5.2 en majuscule  : ${premierMa}`);

/*********************************************/


/********** EXERCICE 3 ***********************/
console.log(` *** EXERCICE 3 *** `);
console.log(` *** EXERCICE 3 *** `);

const ages = persons.map( person => person.age );
const maxAge = Math.max(...ages);
const timoStr = 'timoleon';
const timoArray = [...timoStr];
const newTimoStr = timoArray.join('-');
console.log(`MaxAge :${maxAge}`);
console.log(`timoArray :${timoArray}`);
console.log(`newTimoStr :${newTimoStr}`);
const shiftCodePoint=str=>9398+(str.codePointAt(0)-97);

console.log(`shiftCodePoint :${shiftCodePoint('c')}`);

const shiftCodePointList=chaine =>Array.from(chaine).map(elt => shiftCodePoint(elt));

console.log(`shiftCodePoint :[${shiftCodePointList('timoleon')}]`);
console.log(`shiftCodePoint :[${persons.map(elt => String.fromCodePoint(...shiftCodePointList(elt.name)))}]`);

/*********************************************/


/********** EXERCICE 4 ***********************/
console.log(` *** EXERCICE 4 *** `);
//Q1
console.log(`numbersMultiplierPar10 :${numbers.map(elt=>elt*elt)}`);
//Q2
const multiples=(n,l)=>l.map(elt=>elt*n);
console.log(`fonctionMultiples :${multiples(10,numbers)}`);
//Q3
const multiples5=lis=>{return lis.map(elt=>elt*5);}

console.log(`fonctionMultiples5:${multiples5(numbers)}`);

const multiplesFactory=(factor)=>l=>multiples(factor,l);
const multiples100 = multiplesFactory(100);
console.log(`fonctionMultiples100:${multiples100(numbers)}`);

/*********************************************/

/********** EXERCICE 5 ***********************/
console.log(` *** EXERCICE 5 *** `);
numbers.forEach((elt)=>console.log(`${elt}`));

persons.forEach((elt,i,array)=>console.log(`${elt.name} a ${elt.age} ans`));

const myForEach=(liste,fonction)=>{
    let res=[];
    for(let l in liste)
        res.push(fonction(liste[l]));
}
myForEach(numbers,(elt)=>console.log(`${elt}`));
myForEach(persons,(elt)=>console.log(`${elt.name} a ${elt.age} ans`));

/*********************************************/

/********** EXERCICE 6 ***********************/
console.log(` *** EXERCICE 6 *** `);
console.log(`filter:${numbers.filter(elt=>elt<5)}`);
const creatAcronym=phrase=>{
    let tab1=phrase.split(" ");
    let tab=tab1.filter(elt=>elt.length>3);
    return tab.map(elt=>capitalize(elt)[0]).join("");
}
console.log(`Acronym:'${creatAcronym('formations en informatique de lille')}'`);
console.log(`Acronym:'${creatAcronym('société nationale des chemins de fer français')}'`);

/*********************************************/


/********** EXERCICE 7 ***********************/
console.log(` *** EXERCICE 7 *** `);
const nbLetters=phrase=>{
    let tab=phrase.split(" ");
    let tabLength=tab.map(elt=>elt.length);
    return tabLength.reduce((previous,element)=>previous+element,0);
}
console.log(`nbLetters:'${nbLetters('formations en informatique de lille')}'`);
const max=(x,y)=>x>y?x:y;
const maxNumber=list=>list.reduce((previous,element)=>max(previous,element));
console.log(`maxNumber:'${maxNumber(numbers)}'`);
const maxNumber2=list=>Math.max(...list);
console.log(`maxNumber2:'${maxNumber2(numbers)}'`);
const sum=(...others)=>others.length==0?0:others.reduce((previous,element)=>previous+element,0);
console.log(`sum:'${sum(...numbers)}'`);

const myReduce=(list,func,initialValue)=>{
    let accumulateur=initialValue;
    for(let i in list){
        accumulateur=func(accumulateur,list[i]);
    }
    return accumulateur;   
}
const sum2 = (...others) =>
    others.length == 0? 0: myReduce(others, (previous, element) => previous + element, 0);
console.log(`sum2:'${sum2(...numbers)}'`);

/*********************************************/


/********** EXERCICE 8 ***********************/
console.log(` *** EXERCICE 8 *** `);

const lesInvites = ['Tim Oleon', 'Timo Leon', 'Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin']
const lesReponses = [
                  {nom : 'Sam', present : 'oui'},
                  {nom : 'Tim Oleon', present : 'non'},
                  {nom : 'Bilbo', present : 'oui'},
                  {nom : 'Frodo', present : 'oui'},
                  {nom : 'Timo Leon', present : 'non'},
                 ];
const participant=(lesInvites,lesReponses)=>{
    let listNon=lesReponses.filter(elt=>elt.present=='non').map(elt=>elt.nom);
    return lesInvites.filter(elt=>!listNon.includes(elt));
}
console.log(`les Participants:'${participant(lesInvites,lesReponses)}'`);

/*********************************************/

/********** EXERCICE 9 ***********************/
console.log(` *** EXERCICE 9 *** `);



/*********************************************/

/********** EXERCICE 10 ***********************/
console.log(` *** EXERCICE 10 *** `);



/*********************************************/
