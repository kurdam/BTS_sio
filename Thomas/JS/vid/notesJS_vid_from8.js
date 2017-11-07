// video 8 : opérations entre les variables 
// rien d'intéréssant 

// video 9 : la concaténation en JS
var prenom = "Thomas" , espace = " " , nom = "Grezy";
var nom = prenom + espace + nom; 
var toi = "Victor" + espace + "Durand";

// si on additionne des int avec des str tout ce qui est après le str est considéré comme str
var x = 4 + 2 + "1"; // x = 61
var y = "1" + 2 + 4; // y = 124 //typeof(x and y and z)=string
var z = 2 + "un" + 4;// z = 2un4

// video 10 : Intro aux conditions 
/*
	- == teste la val 
	- === teste val et type
	- != different val
	- !== different val et type
	- < inf strict
	- > sup strict
	- <= inf ou egal
	- >= sup ou egal
*/

// video 11 : if, if ... else, if ... else if ... else
var heure = 15

if (heure <= 18) {
	alert ("Bonjour");
}

if (heure <= 18)
	alert ("Bonjour");
else
	alert ("Bonsoir");

//_____________________________


if (typeof(heure) == "number") {
	if (heure <= 12)
		alert ("c'est le matin");
	else if (12 < heure < 18)
		alert ("c'est l'apres midi");
	else 
		alert ("c'est le soir");
};
else {
	alert("Mauvais type de valeur !");
}
	

//_________________________________

