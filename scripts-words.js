
// SETUP  ---------------------------------------------------------------------

// OUTLET SETUP
// Tell Max how many outlets
// Then set UI to tell which inlet/outlet does or shows what

inlets = 1;
outlets = 1;

//inlets

setinletassist(0,"Get Wordbank");

//outlets
setoutletassist(0,"current word");

// EXECUTE --------------------------------------------------------------------

// ANYTHING FUNCTION
// For reasons I'm not sure, you need this to get strings from messages
// Custom function names won't work : - )
function anything() {
	// get words from max8 message
	// then send to GetWord function to sort
	var wordbank = arrayfromargs(messagename, arguments);
	getWord(wordbank);
}

// POPULATE WORDBANK
function getWord(wordbank) {
	// get whole number between 0 and 10
	// then output to third outlet
	var grabWord = Math.floor(Math.random() * 3);
	outlet(0,wordbank[grabWord]);
}