console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";

/*
text += cars[0] + "<br>";
text = text +cars[0] +"<br>";
*/

document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";

let text = "";
//for ( sā -darbība(s)tiek izpildīta(s) 1 reizi ( ciklu uzsākot) ; n - nosacījums(i) cikla turpināšanai; s -"soļa(u) veikšana");
// sā -> n (nosacījums spēkā) -> {} -> so -> n (-"-) -> {" -> so -> n (nav spēkā)
// parējam pie nākamās darbības aiz cikla

/*for (let i = 2; i < 11; i +=2) {
  text = text + i + "<br>";
}
document.getElementById("automatic_count").innerHTML = text;*/

for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
      text = text + i + "  pāra skaitlis<br>";
    } else {
      text = text + i + "  nepāra skaitlis<br>";
    }
  } else {
    text = text + i + "  nepāra skaitlis<br>";
  }

  
  document.getElementById("pāra_nepāra").innerHTML = text;
  
  
  

