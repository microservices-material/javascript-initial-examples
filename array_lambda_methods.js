cityNames = ["Buenos Aires", "Mendoza", "Cordoba", "Pergamino", "Rosario", "Tucuman", "Salta", "Mar del Plata"]
cityPopulations = [15000, 600, 2300, 80, 2500, 1200, 900, 800]

/*
 Recall https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 Try the following expressions
 - cityNames.map(name => name.length)
 - cityNames.map(name => "Ciudad de ".concat(name))
 - cityNames.filter(name => name[1] == "e")
 - cityNames.filter(name => name[1] == "e").length
 - cityPopulations.every(n => n < 3000)
 - cityPopulations.some(n => n < 3000)
 - cityNames.find(name => name.length == 7)
 
 
 more about arrays, try this
 - cityNames.join("-")
 
 Challenges
 - obtain the list of the city names having less than 7 characters
 - obtain the first city name that ends with an "o"
 - obtain the list of the double of each city populations
*/