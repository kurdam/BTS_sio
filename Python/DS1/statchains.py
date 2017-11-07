chaine = input("entrez la chaine à analyser :\n")
maxi = len(chaine)
car_count = 0
voy_count = 0
voy_range = "aeiouy"
cons_count = 0
cons_range = "zrtpqsdfghjklmwxcvbn"
ponc_count = 0
for i in range (0, maxi, 1):
	if (chaine[i] in (voy_range)):
		voy_count += 1
		car_count += 1
	elif (chaine[i] in (cons_range)):
		cons_count += 1
		car_count += 1
	else :
		ponc_count += 1
		car_count += 1
print (" La phrase analysée comporte {} caractères, parmis lesquels {} voyelles, {} consonnes et {} signes de ponctuation.".format(car_count, voy_count, cons_count, ponc_count))

