// my JS

// function to get the current year.
function currentYear(){
	var date = new Date();
	var year = date.getFullYear();
	
	document.getElementById("year").innerHTML = year;
}