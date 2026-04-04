let text = "abcdefghijklmnopqrstuvwxyz";
num = "1234567890";

document.getElementById("string").innerHTML =
  "<h2>String - 2:</h2> <br>" +
  "<b>length: </b>" +
  text.length +
  "<br><b>charAt: </b>" +
  text.charAt(3) +
  "<br> <b>codePointAt: </b>" +
  text.codePointAt(4) +
  "<br> <b>concat(): </b>" +
  text.concat(num) +
  "<br> <b>slice(): </b>" +
  text.slice(3, 14) +
  "<br> <b>replace(): </b>" +
  text.replace("abc", "dar");
