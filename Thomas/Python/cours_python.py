#import this
#permet d'inclure une librairie 
print('hello world')

a=12
print(a)

b='hello'
print(b)

c=15.7
print(c+a)

print(a/c)

print(a//c) #partie entiere 

print(a**2) #puissance

d=1
d += 1   #le d++ n'existe pas en python
d *=3	 #marche aussi pour la multiplication

e=f=27 #déclare des variables à la volée 

a,b = -4,137
print(a,b)

a,b = b,a #inverse les valeurs

a=True

#!a = not a
# c  python

a == 12
b = (a == 12)  #b=True

print("entrez la temperature")
temperature = int (input())
temperatureF = temperature*1.8+32
print("temperature = {} °C = {} °F".format(temperature,temperatureF))
if temperature >= 38 and temperature <39:
	print('vous avez de la fievre')
	febrile = True
elif temperature >= 39:
	print("vous avez une forte fievre")
	febrile = True
else :
	print('vous n\'avez pas de fievre')
	febrile = False
print('à bientot')

# elif = elseif
# python  c

#if (temperature>38 && temperature<39) C
#if 38<temperature<39 python

# savoir si nombre est pair ou impair 

print("entrez un nombre\n")
nb = int (input())
if nb%2 == 1:
	print("le nombre est impair")
else :
	print("le nombre est pair")
if nb>0 :
	print("le nombre est positif")
else:
	print("le nombre est négatif")

# valeur absolue 

print("entrez un nombre\n")
nb = int (input())
if nb < 0:
  print("la val abs de {} est {}".format(nb, -nb))
else :
  print("la val abs de {} est {}".format(nb, nb))

#__________________________________________________________________________________________________________________________
 # faire un arrondi 

a =12.5
print (round(a))

#__________________________________________________________________________________________________________________________

#les boucles 

i = 1

while i < 11:
	print("hello world")
	i += 1

i = 1

while i < 10 :
  print (i, i**2)
  i+=2

for i in range(10):
	print("hello world")

for i in range(1,11):
	print("hello world")

for i in range(1,11,2):
	print(i, i**2)

ma_phrase = "python est un language informatique plein de surprises"

for lettre in ma_phrase:
	print (lettre)

#____________________________________________________________________________________

age = input ("entrez votre age")
age = int(age)
# il faut caster la val age en int pour faire des calculs avec
message = "votre age est " + str(age)

len(ma_phrase) #retourne la longeur d'une chaine de caracteres 

print(ma_phrase(5)) #retourne n

#______________________________________________________________________________________


#exercice 

maphrase = "hello world"
max = len(maphrase)
for i in range (0,max,1):
	print(maphrase(i))

for element in ma_phrase:
	print (element)

#________________________________________________________________________________________
# cours 14/11/17

# break et continue 

for i in range (1, 11):
	if i == 7:
		continue
	print (i)

for i in range (1, 11):
	if i == 7:
		break
	print (i)

for i in range (1, 11):
	if i == 7:
		continue
	else:
		print("on a fait le tour")

chaine = "hello_world"

print(chaine)

print(len(chaine))

print(chaine[0:5]) #print hello


for i in range(0,len(chaine),5): #-> mieux si on veux bosser sur certains indices 
	print(chaine[i]) 

# est égal à 

for lettre in chaine: #-> mieux si on veux parcourir toute la chaine
	print(lettre)

# slicing [debut : fin : pas]

print(chaine[::2]) # affiche 1 caractère sur 2 (indices pairs)

print(chaine[1::2]) # affiche 1 caractère sur 2 (indices impairs)

print(chaine.capitalize()) #mets une maj. au début de chaine

print(chaine.title()) # mets une maj. à chaque mots 

print(chaine.upper()) # mets tout le texte en maj.

print(chaine.lower()) # mets tout le texte en min.

print('AN APPLE A DAY'.lower()) # mets tout le texte en min.

print ('12345'.isdigit()) #retourne true

print ('1234A'.isdigit()) #retourne false 

chaine_1 = "bonjour et au revoir"

for i in range (0,len(chaine_1),2):
	print(chaine_1[i])
	print(chaine_1[i+1])






