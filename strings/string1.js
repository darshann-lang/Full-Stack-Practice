let ans1 = "Its alright";
let ans2 = "He is called 'Jimmy'";

let x = "Jerry"; // x is string here
let y = new String("Tom"); // y is object here

str1 = ans1 + "<br>" + ans2;
str2 = typeof x + "<br>" + typeof y;

document.getElementById("string").innerHTML =
  str1 + "<br>" + "<h4>Type of x and y:</h4>" + str2;
