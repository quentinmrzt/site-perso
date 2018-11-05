alert("Hello! I am an alert box!!");

var test = document.getElementById("photocouverture");

var date = new Date();

var heure = date.getHours();

if (heure>=5 && heure<13) {
	test.setAttribute("src", "images/1.png");
} else if (heure>=13 && heure<21) {
	test.setAttribute("src", "images/2.png");
} else if (heure>=21 || heure<5) {
	test.setAttribute("src", "images/3.png");
}
