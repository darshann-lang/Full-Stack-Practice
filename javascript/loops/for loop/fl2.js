const cars = ["Audi", "Ford", "BMW", "Mercedes"];
let len = cars.length;
let text = "";
let i = 2;

for (; i<len; i++){
	text += cars[i] + "<br>";
}

document.getElementById("for2").innerHTML = text;