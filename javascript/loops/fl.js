const cars = ["BMW", "Audi", "Saab", "Ford"]
let len = cars.length;
let text = "";
for (let i =0; i < len; i++) {
	text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;