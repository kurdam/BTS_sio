temperature = 40

if temperature <= 38 : 
  print("Not fièvre")

if (temperature >= 38) and (temperature <= 39) : 
  print("Fièvre")
  
if temperature > 39 :
  print("forte fièvre")
  
temperatureKel = temperature + 273,15  
sortieTempKel = temperature + " °C équivaut à "  + temperatureKel + " °K"
  
print(sortieTempKel)
