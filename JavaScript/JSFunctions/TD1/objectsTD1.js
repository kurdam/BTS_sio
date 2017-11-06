var util1 =
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
        lastname: "Molière",
        notes: [8, 9, 19, 5, 18],
        naissance: 1997,
        taille: 156,
        poids: 52,
    }

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

alert(util1.naissance.length);
console.log(JSON.stringify(util1));