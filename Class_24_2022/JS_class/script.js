// Nodarbības laikā un pēc tās ir jāiepzistās ar:
// screen objektu (logs, tā īpašības un iespējamas darbības) - https://www.javascripttutorial.net/javascript-bom/javascript-screen/
// NB! https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript
// history objektu un ta metodēm - https://www.javascripttutorial.net/javascript-bom/javascript-history/

// Aktuālākā informācija par Screen īpašībām un metodēm - https://developer.mozilla.org/en-US/docs/Web/API/Window/screen
// Aktuālākā informācija par History īpašībām un metodēm - https://developer.mozilla.org/en-US/docs/Web/API/Window/history



/*pajautāt lietotājam (confirm()) - vai viņš grib pāriet uz kādu citu lapu.
ja jā - tad uz kādu (prompt())
un ja jā - tad kā pariet (prompt) - jaunais logs, jaunais tabs, ši taba satura nomaiņa
un tad ar setInterval() skaitīt sekundes līdz pārejai - 5 ... 4 ... 3 ... 2 ... 1... pārēja*/

/* Uzdevumi treniņiem mājās:
1. linka analīze (adreses struktūra)
2. "galamērķa" esamība
3. ricība tikai pēc derīgās (piedāvātās) atbildes*/


/*var result = confirm('Vai Jūs gribat pāriet uz kādu citu lapu?');
if (confirm){
 var person = (prompt('Ievadiet, lūdzu, saiti uz kuru vēlaties doties',location.href = "https://www.w3schools.com"))
 //is it href?
//does it exist?
  //case 1., 2., 3.
  
}
 
//https://developer.mozilla.org/en-US/docs/Web/API/Screen */

//Artūra piemērs

var 
  links = "https://iauto.lv",
  logatips = 1,
  i = 3;
function isUrl(s) {
  var regexp =
    /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return regexp.test(s);
}

let text = confirm("Pāriet uz citu lapu?");
if (text == true) {
  links = prompt("Uz kādu interneta adresi?", links);
  do {
      if (links === null) {break;}
      if (isUrl(links) == false) {links = prompt("Nekorekta interneta adrese (atlikuši " + i + "  mēģinājumi)",links);}
      i -= 1;
      if (i == 0) {break;}
  } while (isUrl(links) == false);

  if (isUrl(links) == true){
      logatips = prompt("Adresi " + links + " atvērt: \r\n1-jaunā TAB \r\n2-šajā logā \r\n3-atvērt jaunā logā \r\n4-šajā logā saglabājot history(assign)\r\n5-šajā logā(nesaglabājot history(replace)) \r\n6-exit", logatips);
      logatips = Number(logatips);
  } else {logatips=7}

if (logatips < 6 && logatips > 0 && logatips == Math.round(logatips)) {
   var count = 6;
   var el = document.getElementById("demo3");
   function timer() {
    count -= 1;
    el.innerText = "Līdz ielādei palika " + count + " sekundes.";
    if (count == 0) {
      clearInterval(cancel);
      switch (logatips){
      case 1:
      //1 atvērt jaunā tab
        window.open(links, "_blank");
        break;
      case 2:
      //2 atvērt šajā logā
        window.open(links, "_self");
        break;
      case 3:
      //3 atvērt jaunā logā
        window.open(links, "", "width=1024,height=768");
        break;
      case 4:
      //4 atvērt šajā logā(saglabājot history(assign))
        window.location.assign(links);
        break;
      case 5:
      //5 šajā logā(nesaglabājot history)
       window.location.replace(links);
      }
    }
  }
} else {document.getElementById("demo3").innerHTML = "Netika izvēlēti visi parametri lapas atvēršanai"}
  var cancel = setInterval(timer, 1000);
}

  

