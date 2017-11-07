// video 5
// après chaques instructions JS on la termine par un point virgule
// quand on met une variable entre "" elle est concidérée comme un string
// ne pas laisser d'infos sensibles en commentaires car ils sont visibles par le client

//video 6
// pour déclerer une variable en JS on utilise le mot clé var
var number = 1;
var prénom = "thomas", nom = "grezy", dpt = 13;
var ville = "";
ville = "cassis";
var homme = true;

//video 7
// on peut tester le type d'une variable avec la fonction typeof()
typeof(number); // retourne int 
// vu que certains caractères sont réservés ont doit utiliser un \ 
var txt = ('je m\'appelle thomas');
var txt = ("je m'appelle thomas");
// on peut jouer avec les " et les ' pour eviter d'avoir à utiliser \
var n = null; //typeof = objet
var u = undefined; //typeof = undefined
var nn = NaN; //typeof = number
