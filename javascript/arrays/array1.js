const cars = ["Saab", "Volvo", "BMW"];

const emptyArray = [];
emptyArray[0] = "Linux";
emptyArray[1] = "Windows";
emptyArray[2] = "MacOS";
document.getElementById("array").innerHTML =
  cars + "<br>" + emptyArray + "<br />" + emptyArray[2];
