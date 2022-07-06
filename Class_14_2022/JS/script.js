let text = "for classic ar 'break': <br> ";
for (let i = 1; i < 5; i++) {
  text = text + i + "<br>";
  if (i == 3) {
    break;
  }
}

document.getElementById("for_automatic_count_classic").innerHTML = text;

text = "for non-classic: <br>";
var i = 1;
for (; i < 5; ) {
  text = text + i + "<br>";
  i++;
}
document.getElementById("for_automatic_count").innerHTML = text;

text = "while: <br>";
var i = 1;
while (i < 5) {
  text = text + i + "<br>";
  i++;
}

document.getElementById("while_automatic_count").innerHTML = text;

text = " do-while: <br>";
var i = 1;
do {
  text = text + i + "<br>";
  i++;
} while (i < 5 && i == 2);

document.getElementById("do_while_automatic_count").innerHTML = text;

/* while (i < 5 && i == 2);
Jautājums: Ja šeit 2 nomaina ar piem. 4, kas notiktu? vai viss izdotos un ja nē, tad kāpēc tieši 2?

Atbilde: Būtu rezultāts 1, jo 4 ir mazāks par 5 (true), bet nav vienāds ar 2 (pirmais cikls jebkurā gadījumā aiziet) uz otro ciklu neaizietu...

*/


