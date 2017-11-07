var isValid;
var healthIsNumber;


// La fonction validation permet de récupérer les valeurs du formulaire de l'index

function validation() {

    // On récupère les valeurs et les assigne à des variables (on peut accéder à ces valeurs que dans cette fonction !)
    var name1 = document.getElementById('name1').value;
    var health1 = document.getElementById('health1').value;
    var strength1 = document.getElementById('strength1').value;
    var criticalChance1 = document.getElementById('criticalChance1').value;
    var esquive1 = document.getElementById('esquive1').value;

    var name2 = document.getElementById('name2').value;
    var health2 = document.getElementById('health2').value;
    var strength2 = document.getElementById('strength2').value;
    var criticalChance2 = document.getElementById('criticalChance2').value;
    var esquive2 = document.getElementById('esquive2').value;


    // isNaN est un booléen qui renvoie true si c'est pas un nombre (isNotANumber)
    // Donc on prend l'inverse pour savoir si health1 et health2 sont des nombres
    if ((!isNaN(health1)) && (!isNaN(health2))) {
        healthIsNumber = true;
    }
    // sinon, ça empêche le code de continuer avec return false (qui sert à stopper le code)
    else {
        console.log("Nombre obligatoire !")
        return false;
    }
    // On test si tous les champs sont pas vides ! 
    if ((name1 && health1 && strength1 && esquive1 && name2 && health2 && strength2 && esquive2) != "") {
        isValid = true;
    }
    else {
        document.getElementById("error").innerHTML = "Le formulaire est invalide !";
        return false;
    }


    // Si les champs sont pas vides, on créé deux variables, les fighters avec les attributs récupérés plus haut !
    if (isValid) {
        var fighter1 = {
            name: name1,
            health: health1,
            strength: strength1,
            criticalChance: criticalChance1,
            esquive: esquive1
        }
        var fighter2 = {
            name: name2,
            health: health2,
            strength: strength2,
            criticalChance: criticalChance2,
            esquive: esquive2
        }
        // goFight est la fct qui lance le combat
        goFight(fighter1, fighter2);
    }


        // dans index.html, on cache "formulaire" et on affiche "fight"
    function goFight(fighter1, fighter2) {
        document.getElementById("formulaire").style.display = 'none';
        document.getElementById("fight").style.display = 'block';
        document.getElementById("fighter1").innerHTML = name1;
        document.getElementById("fighter2").innerHTML = name2;

        var insert = document.getElementById("fight-table").getElementsByTagName('tbody')[0];
        // Ces variables servent juste à compter les critiques et les esquives
        var w = 0;
        var x = 0;
        var y = 0;
        var z = 0;

        var damagePlayer1;
        var damagePlayer2;
        // On fait une boucle pour simuler des rounds
        for (var i = 0; i < 100; i++) {

            // chance de CC aléatoire * 100
            chanceCC1 = Math.random();
            chanceCC2 = Math.random();

            chanceCC1 = chanceCC1 * 100;
            chanceCC2 = chanceCC2 * 100;

            // chance d'esquive esquive / 100
            esquiveP1 = Math.random();
            esquiveP2 = Math.random();

            esquiveP1 = esquiveP1 * 100;
            esquiveP2 = esquiveP2 * 100;

            if (esquiveP2 <= esquive2) {
                damagePlayer1 = 0;
                w++;
            }
            else {
                // si chance CC * 100 <= au nombre donné à la base --> Coup critique
                if (chanceCC1 <= criticalChance1) {
                    health2 = (health2 - (strength1 * 1.5));
                    damagePlayer1 = (strength1 * 1.5);
                    y++;
                }
                else {
                    health2 = (health2 - strength1);
                    damagePlayer1 = (strength1);

                }
            }
            if (esquiveP1 <= esquive1) {
                damagePlayer2 = 0;
                z++;
            }
            else {
                // si chance CC * 100 <= au nombre donné à la base --> Coup critique
                if (chanceCC2 <= criticalChance2) {
                    health1 = (health1 - (strength2 * 1.5));
                    x++;
                    damagePlayer2 = (strength2 * 1.5);
                }
                else {
                    health1 = (health1 - strength2);

                    damagePlayer2 = (strength2);

                }
            }

            // construction du tableau cellule par cellule (lance index.html dans ton navigateur tu verra le résultat ;)
            var row = insert.insertRow(i);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);

            cell2.innerHTML = damagePlayer2;
            cell3.innerHTML = damagePlayer1;
            cell4.innerHTML = health1;
            cell5.innerHTML = damagePlayer1;
            cell6.innerHTML = damagePlayer2;
            cell7.innerHTML = health2;

            damagePlayer1 = 0;
            damagePlayer2 = 0;

            if (health1 <= 0) {
                console.log("STOOOOOOOP");
                document.getElementById("winner").innerHTML = "WINNER : " + name2 + "<br>Il a esquivé " + w + " fois !" + "<br>Et il a fait " + x + " coups critiques !";
                return false;
            }
            if (health2 <= 0) {
                console.log("STOOOOOOOP");
                document.getElementById("winner").innerHTML = "WINNER : " + name1 + "<br>Il a esquivé " + z + " fois !" + "<br>Et il a fait " + y + " coups critiques !" ;
                return false;
            }
        }
    }
}