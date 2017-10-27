// commentaire monoligne

/*
commentaire multiligne
*/

//________________________________________________________________________________________________________________


alert ("sortie texte");
// on peut faire des calculs directement dans la sortie ex: alert(3+2)

typeof(x) // dans une sortie comme alert() retourne le type d'une variable 

//_________________________________________________________________________________________________________________

// on peut eregistrer des données dans une variable en utilisant la commande prompt 

var x = prompt("saisissez un nombre :");

//_______________________________________________________________________________________________________________

//test booléens
var x = 4;
var y = 8;
var z = x == y;

// les opérateurs ternaires marchent aussi 
var hello = "";
var heure = 12;
var hello = heure < 17 ? "bonjour" : "bonsoir"

//________________________________________________________________________________________________________________

// exemple de switch 

var x = 14;
switch(x){
	case 12 : alert("x = 12"); 
		break;
	case 14 : alert("x = 14");
		break;
	default: alert ("default");
}

//__________________________________________________________________________________________________________________

// une variable non définie prends la valeur unidentified et non la valeur NULL

//___________________________________________________________________________________________________________________
// Les boucles 

var x = 0;
while (x<10){
	alert ("x vaut " + x);
	x++;
}

//___________________________________________________________________________________________________________________

//fonctions natives

alert();
prompt();

//fonctions pour random
random();
var x = Math.random();

round();
//objet pour arrondi
var x = Math.random()*1000; //arrondi au supperieur
var y = Math.round();

floor();
var y = Math.floor(); // entier inferieur

ceil();

//___________________________________________________________________________________________________________________

//les objets

var moi = {
	prenom : "thomas",
	nom : "grezy",
	age : 26,
	identite : function(){
		return"prenom :" + this.prenom +
			  "\nnom :" + this.nom +
			  "\nage :" + this.age;
	}
}

var id = alert(moi.identite());

//_____________________________________________________________________________________________________________________

// l'objet Date est natif du JS
var d = Date.now();
alert (d); 
*/


var d = new Date();
var dy = d.getFullYear();
var dmo = d.getMonth();
var ddy = d.getDate();
var dh = d.getHours();
var dm = d.getMinutes();
var ds = d.getSeconds();
alert("nous sommes le "+ ddy + "/" + dmo + "/" + dy + " à " + dh+ ":" + dm + ":" + ds);


var d = new Date();
var dy2 = d.setFullYear(2015,10,25);
var dmo = d.setMonth();
var ddy = d.setDate();
var dh2 = d.setHours(12);
var dm2 = d.setMinutes(30);
var ds = d.setSeconds();
alert("nous sommes le "+ dd2 + "/" + dmo + "/" + ddy + " à " + dh2+ ":" + dm2 + ":" + ds);

//______________________________________________________________________________________________________________________

// fonctions anonymes 
// fonction avec un return 

//_____________________________________________________________________________________________________________________

// Document Object Model (DOM)
// noeuds = nodes
// le dom est généré par le navigateur 

/*
Quelques éléments du DOM :
	- getElementById();
*/
	var para = document.getElementById("para");
	
	function clickbtn(){
		document.getElementById("para").innerHTML="bye";
	}
	
	var title = document.getElementById("para");
	
	var mPara = document.createElement("p");
	
	mPara.innerHTML = "Je suis créé en JS";

//______________________________________________________________________________________________________________________

	var para = document.getElementById("para");
	
	function clickbtn(){
		document.getElementById("para").innerHTML="bye";
	}
	
	var title = document.getElementById("para");
	
	var mPara = document.createElement("p");
	
	mPara.innerHTML = "Je suis créé en JS";
	//__________________________________________________
	title.appendChild(mPara);

	function clickBtn(){
		if(title.innerHTML == "Hello"){
			document.getElementById("para").innerHTML = "bye"
			document.querySelector("a").href = "http://google.fr"
		}
		else{
		document.getElementById("para").innerHTML = "Hello";
		document.querySelector("a").href = "http://yahoo.fr"
		}
	}

	mPara.addEventListener("click",clickP);
	function clickP(){
		alert("click !");
	}
	alert(screen.height + "\n" + navigator.language + "\n" + location.host + "\n"
	+ navigator.useragent);

/*
	- getElementByTagName();
*/

/*
	- getElementByClassName();
*/

/*
	- querySelector();
*/

/*
La BOM - Browser Object Model
*/
