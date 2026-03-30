let test = "";
let i = 0;

while (i <= 10) {
  test += "Number:" + i + "<br>";
  i++;
}

document.getElementById("while").innerHTML = test;
