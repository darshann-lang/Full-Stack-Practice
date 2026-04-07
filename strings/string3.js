let text1 =
  "The rain in SPAIN stays mainly in the plain. Please locate where 'locate' occurs";
let index1 = text1.indexOf("locate");
let index2 = text1.lastIndexOf("locate");
let index3 = text1.search(/locate/);

document.getElementById("string").innerHTML =
  "<b>indexOf(): </b>" + //indexOf()
  index1 +
  "<br><b>lastIndexOf(): </b>" +
  index2 +
  "<br><b>search(): </b>" + // search() and indexof() works similarly
  index3 +
  "<br><b>search(): </b>";
