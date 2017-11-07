text = input("Entrez le texte que vous voullez inverser")
maxi = len(text)
inverse = ""
for i in range (maxi-1, -1, -1):
	inverse += str(text[i])
print(inverse)
