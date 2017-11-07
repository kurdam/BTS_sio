"""
la date entrée doit etre correcte
càd que :
			- le jour doit être compris entre 1 et 31
			- le mois entre 1 et 12
			- l'année entre 0 et 2100
			- le mois de février doit être a 28 sauf si l'année est bisextille
			- les mois de janvier , mars, mai, juillet, aout, octobre et decembre doivent être à 31 jours
			- les mois de avril, juin, septembre et novembre doivent comporter 30 jours
"""

year = input("entrez votre année de naissance")
year = int(year)
if(year < 0 or year > 2100):
	print("ANNEE INVALIDE")

month_has31 = 0	

month = input("entrez votre mois de naissance")
month = int(month)
if(month < 1 or month > 12):
	print("MOIS INVALIDE")
if(month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12):
	month_has31 = True
else : 
	month_has31 = False

day = input("entrez votre jour de naissance")
day = int(day)
if(month_has31 and day >= 1 and day <= 31):
	print("la date est correcte")
elif(not(month_has31) and day >= 1 and day <= 30 and month != 2):
	print("la date est correcte")
elif(month == 2 and day >= 1 and day <= 28):
	print("la date est correcte")
else:
	print("la date est invalide")

#else le cas des années bisextilles !
