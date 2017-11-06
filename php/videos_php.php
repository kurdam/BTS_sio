<!-- Vidéo 2 : les variables -->
<!-- Pour nommer une variable on utilise le signe $ -->
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title>PHP - séance 2</title>
</head>
<body>
	<h1>PHP - séance 2</h1>
<!-- Dans le nommage des variables il y a des conventions : 
	- pas d'accents
	- pas d'espaces remplacer par _
	- pas de tirret 
	- ne doit pas commencer par un chiffre 
	- pas de carractères spéciaux

	types de données de bases: 
	- entiers(int)
	- float 
	- char
	- string
	- booléen
	- aucun type (null) qu'il vaut mieux écrire en minuscule pour réduire la conso
-->
<?php
	$mon_prenom = "Thomas";
	$mon_age = 26;
	$pi = 3.14;
	$traitement_effectue = true;
	$mise_a_jour = null; 
/* pour afficher une variable comme en bash on met la commande echo suivie du nom de la variable */
	echo $pi;
/* Pour faire un affichage affichage avec du texte et une variable on utilise le point pour la concaténation
   Plutôt que d'abuser des echo*/
	echo "<p>valeur de PI : ".$pi."</p>";
/* Si on exrit le nom de la variable entre quotes on affiche le nom de la variable et pas sa valeur */
	echo 'mon_prenom';
?>

</body>
</html>

