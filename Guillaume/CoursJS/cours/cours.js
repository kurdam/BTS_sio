var para = document.getElementById("para");
alert(para);

var title = document.getElementById("para");

var mPara = document.createElement("p");
mPara.innerHTML = "Je suis créé en JavaScript";

title.appendChild(mPara);

function clickbtn() {
    if (title.innerHTML == "Hello") {
        document.getElementById("para").innerHTML = "Bye bye";
        document.querySelector("a").href = "http://yahoo.fr/";
    }
    else {
        document.getElementById("para").innerHTML = "Hello";
        document.querySelector("a").href = "http://google.com/";
    }

}
mPara.addEventListener("click", clickP);
function clickP() {
    alert("click !");
}

alert(screen.height + "\n" + navigator.language + "\n" + screen.width + "\n" + navigator.userAgent);




//alert(history.length); donne le nbr de cookies







/*function hoverBtn(){
    title.style.fontSize="50px";
}
function ouiBtn(){
    title.style.fontSize="15px";
}
*/



//La fct

/*var x = 5;
var y = 3;

function multiplication(x, y)
{
return x*y;
}
var result = multiplication(x, y);
alert(result);*/



//L'objet

/*var moi = 
{
    prenom : "Guillaume",
    nom : "Cerdan",
    age : "19",
    identite : function()
    {
        return "Prenom : " + this.prenom +
               "\nNom : " + this.nom +
               "\nAge : " + this.age;
    }
}

var id =moi.identite();
alert(id);*/



//    Les tableaux

/*var arr = [1, 2, 5, 9];
var x = arr[0];
var len = arr.length;

arr.push(10);*/



// Méthodes d'array

/*var prenoms = ["Pierre", "Lucile", "Julia", "Claire"], p = "";
var taille = prenoms.splice(1, 0,"Serge", "Laura");
for(var i = 0; i < prenoms.length; i++)
{
    p+="\nPrenom n°" + (i+1) + " : " + prenoms[i];
}
alert(p + "\nOn a : " + taille + " éléments");
*/
// push ajoute
// .pop() supprime le dernier élément d'un tableau
// splice en supprime 0 à l'index 1 et rajoute Serge et Laura dans ce cas
// sort les classe avec ASCII
// reverse les classe à l'envers
// join les concatène




/*var d = Date.now();
var d1 = Date();
alert("Date littérale : " + d1 + "\n Date ms : " + d);
*/



/*var d = new Date();
var dy = d.getFullYear();
var dmo = d.getMonth();
var ddy = d.getDate();
var dh = d.getHours();
var dm = d.getMinutes();
var ds = d.getSeconds();


var ddy2 = d.setFullYear(2015, 10, 25);
var dh2 = d.setHours(12);
var dm2 = d.setMinutes(30);


alert("Nous sommes le : " + ddy + " " + (dmo+1) + " " + dy + "\nIl est : " + dh + "h " + dm);*/


// Le foreach

/*
var numbers = [1, 4, 8];
numbers.forEach(function(numb) {
    alert(numb);
});
*/

// Méthodes math

/*var x = Math.random() * 1000;
var inf = Math.floor(x);
var sup = Math.ceil(x);
alert(x);
alert(inf);
alert(sup);
*/

// .floor arrondi à l'entier inférieur
// .ceil arrondi à l'entier supérieur 
// .round arrondi au plus proche

/*var min = Math.min(-10, 4, 18, 200);
var max = Math.max(-10, 4, 18, 200);

alert(min);
alert(max);
*/

/*var util1 =
    {
        name: "Guillaume",
        lastname: "Cerdan",
        notes: [17, 5, 14, 9, 13],
        naissance: 1998,
        taille: 180,
        poids: 75,
    }


var util2 =
    {
        name: "Jeanne",
        lastname: "Marchiol",
        notes: [8, 9, 19, 5, 18],
        naissance: 1997,
        taille: 156,
        poids: 52,
    }

//var moy =
//si moy > 10 admis true ou false
//var majeur
// var IMC
var moy1 = 0;
for (var i = 0; i < util1.notes.length; i++) {
    moy1 = moy1 + util1.notes[i];
}
moy1 = moy1 / util1.notes.length;





if (moy1 > 10) {
    alert("La moyenne de " + util1.name + " est : " + moy1 + " et il est admis");
}
else {
    alert("La moyenne de " + util1.name + " est : " + moy1 + " et il n'est pas admis");
}
var moy2 = 0;
for (var i = 0; i < util2.notes.length; i++) {
    moy2 = moy2 + util2.notes[i];
}
moy2 = moy2 / util2.notes.length;
if (moy2 > 10) {
    alert("La moyenne de " + util2.name + " est : " + moy2 + " et elle est admise");
}
else {
    alert("La moyenne de " + util2.name + " est : " + moy2 + " et elle n'est pas admise");
}

var age1 = 2017 - util1.naissance;

if (age1 >= 18) {
    alert(util1.name + " est majeur");
}
else {
    alert(util1.name + " n'est pas majeur");
}


var age2 = 2017 - util2.naissance;
if (age2 >= 18) {
    alert(util2.name + " est majeure");
}
else {
    alert(util2.name + " n'est pas majeure");
}



var imc1 = 0;
var imc2 = 0;
util1.taille = util1.taille / 100;
imc1 = util1.poids / (Math.pow(util1.taille, 2));
alert("L'imc de " + util1.name + " est : " + imc1);

util2.taille = util2.taille / 100;
imc2 = util2.poids / (Math.pow(util2.taille, 2));
alert("L'imc de " + util2.name + " est : " + imc2);

//for (var i = 0; i < util1.naissance.length; i++)
//{

//}

alert(util1.naissance.length);
console.log(JSON.stringify(util1));*/





// Fonction anonyme
/*
var x = function(y){
    alert(y*2);
}
x(4);
*/

//    Fonction qui s'appelle toute seule
/*
(function(x){
    alert(x*2);
})(2);
*/

// try {
//     throw("prenom vide");
// }
// catch {

// }                  Comme en php

// En utilisant : use strict au début du fichier, on voit des erreurs plus détaillées, c'est un bon gros debug des familles !

