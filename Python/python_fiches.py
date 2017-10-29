#coding:utf-8

# video n°3 les variables 
#______________________________________________________________________________________________________________________
# en C quand on veut print on ectit :
# printf("texteblabla : %d blabla %d",var_1, var_2);
# en python on peut faire de plusieurs manieres :

age_perso = 26
nom_perso = "Thomas"
perso_possible = True 


print ("le nom du perso est",nom_perso)
print ("son age est", age_perso)
print ("son statut est",perso_possible)
print("\n")
#ou 

text = "le nom du perso est {}\n son age est {}\n son statut est {}\n"
print (text.format(nom_perso, age_perso, perso_possible))

#ou 

print ("le nom du perso est {}\n son age est {}\n son statut est {}\n".format(nom_perso,age_perso,perso_possible))

#ou
nb1 = 6
nb2 = 25

print("le nombre à deviner est entre " + str(nb1) + " et " + str(nb2))

#_______________________________________________________________________________________________________________________

# équivalent du scanf 

nom_joueur = "thomas"
print("Bienvenue",nom_joueur)

print("entrez nom du joueur :")
nom_joueur = input()
print("bienvenue" ,nom_joueur)

#_________________________________________________________________________________________________________________________

	#fonctions utiles : print()	-> afficher à l'écran
	#				   input()	-> lire au clavier
	#				   type()	-> retourne la classe d'une donnée
	#				   str.format() -> formate une chaine 
	#				   int(), bool(), float(), str() -> caster une donnée

#_________________________________________________________________________________________________________________________

#exemple de cast 

prixHT = input("Entrez un prix HT: ") # si on rentre un prix il va etre pris en compte en tant que str et pas float
prixHT = float(prixHT) # du coup on est obligé de caster 

prixTTC = prixHT + (prixHT * 20 / 100)

print("prixTTC = ", prixTTC)

#__________________________________________________________________________________________________________________________

#condititons de if
temperature = 37

if(temperature > 38 and temperature < 39):	#en c on utilise && mais en python on utilise and
	print("blabla")
else :
	print("bloblo")

if 37<temperature<39: #on peut aussi encadrer la condition pas comme en c 
	print("blabla")
#__________________________________________________________________________________________________________________________
 # faire un arrondi 

a =12.5
print round(a)

#__________________________________________________________________________________________________________________________
# video 6
# les boucles en python 

# boucle while :

compteur = 0

while (compteur < 10):
	print ("tu as appuyé sur mon ventre et j'ai des gaz !")
	compteur += 1

#_______________________________________________________
 # menu de jeu avec une coucle while :

jeu_lance = True
print("")

while jeu_lance:
	choixMenu = input ("> ")

	if choixMenu == "again":
		continue
	elif choixMenu == "quit":
		jeu_lance = False
	elif choixMenu == "hello":
		print("Bonjour :-)")
	else:
		print("commande introuvable")

print("A bientot...")
#_________________________________________________________

 # boucles for : 

sentence = "bonjour tout le monde :)"

for letter in sentence:
	print(letter)

print("à bientot ...")

#___________________________________________________________

# video 7: les fonctions 
"""
fonctions vues : print()
				 input()
				 type()
				 float()
				 str()
				 bool()
				 format() // methode de la classe str
"""
age = input("quel âge as-tu ?")
age = int(age)

print("tu as {} ans.".format(age))

#___________________________________________________
def dire_bonjour():
	print("bonjour tout le monde :)")

dire_bonjour()
#____________________________________________________

def dire(nom_personne="eric", message_personne="Salut"):
	print("{} : {}".format(nom_personne, message_personne))

dire("Thomas" , "Bonjour à toi")
dire("Tom", "Salut")

dire("lolo") 
# va retourner "lolo salut" car dans la def de dire()
# eric et salut sont les valeurs basiques donc si il manque un para 
# il sera remplacé par les val de bases qui sont "eric" et "salut"


#______________________________________________________
# quand on definit une fonction avec des arguments 
# on peut preciser quel argument on utilise

dire ("Salut !", "Thomas") # est different de 
dire (message_personne="Salut !", nom_personne="Thomas")
# car en renseignant les champs avec le nom des argument 
# la fonction à bien remis d'abord le nom puis le message
#________________________________________________________


def show_inventory(*list_items):
	for item in list_items:
		print(item)

show_inventory("épée")
show_inventory("épée", "arc", "potion de mana", "cape rouge")

# l'étoile dans le def permet de rendre le nombre de para illimité

#________________________________________________________________

# création d'une fonction qui retourne une valeur 
def calculer_somme(nombre_1, nombre_2):
	return nombre_1 + nombre_2

print(calculer_somme(5, 16)) 

#________________________________________________________________

