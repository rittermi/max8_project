
// SETUP  ---------------------------------------------------------------------

// OUTLET SETUP
// Tell Max how many outlets
// Then set UI to tell which inlet/outlet does or shows what

inlets = 3;

//inlets

setinletassist(0,"I eat bangs");
setinletassist(1,"Get Tracking");
setinletassist(2,"Get Word");

// VARIABLES

var xgen = 0;
var ygen = 0;
var xtrack = 0;
var ytrack = 0;
var pauseBetweenMons = false;

// EXECUTE --------------------------------------------------------------------


// On bang, generate coordinates
// This would create a new monster, so the bang should only happen when prior monster defeated

function bang() {
	generateCoordinates();
	
	post("New Monster at: " + xgen + " , " + ygen + "\n");
	//post("Tracking coords are: " + xtrack + " , " + ytrack  + "\n");
}

// Access pack object and get integer values
function list() {
	xtrack = arguments[0];
	ytrack = arguments[1];
	
	collisionDetection();
}


// GENERATE COORDINATES
// get random number and export through respective outlet
function generateCoordinates() {
	var xmin = 80;
	var xmax = 580;
	var ymin = 60;
	var ymax = 350;
	
	xgen = Math.floor(Math.random() * (xmax - xmin) + xmin);
	ygen = Math.floor(Math.random() * (ymax - ymin) + ymin);
	/*
	xgen = Math.floor(Math.random() * 101);
	ygen = Math.floor(Math.random() * 101);
	*/
}

// COLLISION DETECTION
// If bounds of weapon & monster meet, destroy the universe I guess
function collisionDetection() {
	// Collision detection... in progress
	// Have to wait till interface is more established to do this
	
	/*
	var weapon = {x: xtrack, y: ytrack, width: 50, height: 50}
	var monster = {x: xgen, y: ygen, width: 10, height: 10}

	if (weapon.x < monster.x + monster.width &&
   	weapon.x + weapon.width > monster.x &&
   	weapon.y < monster.y + monster.height &&
   	weapon.y + weapon.height > monster.y) {
    	// collision is true
	}

	// filling in the values =>

	if (5 < 30 &&
    	55 > 20 &&
    	5 < 20 &&
    	55 > 10) 
	{
    	// collision is true
	}
	*/
	
	// Right now, if the coordinates are within each other by range of five
	// They are technically within collision parameters
	var range = 20;
	var xmatch = false;
	var ymatch = false;
	
	if (Math.abs(xgen - xtrack) <= range) {
		xmatch = true;
	}
	
	if (Math.abs(ygen - ytrack) <= range) {	
		ymatch = true;
	}
	
	if (xmatch == true && ymatch == true) {
		post("Monster was defeated!");
		outlet(0,"bang");
	} /*else {
		post("No collision detected");
	}*/
	
}