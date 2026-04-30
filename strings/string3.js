let text1 =
  "The rain in SPAIN stays mainly in the plain. Please locate where 'locate' occurs";
let index1 = text1.indexOf("locate");
let index2 = text1.lastIndexOf("locate");
let index3 = text1.search(/locate/);
let match1 = text1.match(/ain/gi);
let match2 = text1.match(/ain/g);
let match3 = text1.match("ain");
let matchall = text1.matchAll("ain");

document.getElementById("string").innerHTML =
  "<b>indexOf(): </b>" +
  index1 +
  "<br><b>lastIndexOf(): </b>" +
  index2 +
  "<br><b>search(): </b>" +
  index3 +
  "<br><b>match(/ain/gi): </b>" +
  match1.length +
  " " +
  match1 +
  "<br><b>match(/ain/g): </b>" +
  match2.length +
  " " +
  match2 +
  "<br><b>match('ain'): </b>" +
  match3.length +
  " " +
  match3 +
  "<br><b>matchAll('ain'): </b>" +
  Array.from(matchall);
