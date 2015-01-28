// Programmed by Collin Mullis con ayuda de Jared Smith
// Bean Counting Application
// Counts what ever character you give the program
// program worked on over weekend.
// cat = "Character At"
 var countBs = function(bstring,countChar)  {
	var bcounter = 0;
	var scounter = bstring.length;
	for (var cat = 0; cat <= scounter; cat++)
		if (bstring.charAt(cat) == countChar)
			bcounter = bcounter + 1;
	return bcounter;
}
console.log(countBs("Ben plays Basketball in Boise with his friends", "e"))
