
/*//location
console.log(window.location);
console.log(document.location);
console.log(location);

//URL ("pilnā" adrese)
console.log(location.href);

//protokols (http un https - datu plūsmai caur tīklu, bet varbūt arī lokālo aplikāciju darbināšanai)
console.log(location.protocol);

//host (IP vai 'vārdiskā" IP adrese)
//!!!~mājas darbs - palasīt par DNS
console.log(location.host);

//port
//!!!~mājas darbs - palasīt par portu diapazoniem
console.log(location.host);

//web-servisa "ceļš"
//"/"aiz host'a - web servisa "ceļu sakne"
console.log(location.pathname);

//meklēšanas kritēriji
//aiz "?" zīmes, tie varbūt vairāki - savā starpā atdalīti ar "&"
console.log(location.search);


//HTML dokumenta apakšsadaļas nosaukums, pārvietojas viena html dokumenta ietvaros (#)
console.log(location.hash);/*


//document.getElementById("demo3").innerHTML = person.lang;


window.name = "original";

let jsWindow = window.open(
  "http://127.0.0.1:5500/Dialogs_AB/Class_20/",
  //"https://www.w3schools.com/js/js_object_prototypes.asp",
  "test",
  "height=600,width=800"
);

//jsWindow.window.console(jsWindow.opener);

setTimeout(() => {
  window.open("http://127.0.0.1:5500/Dialogs_AB/Class_19/", "test");
  //window.open("https://www.w3schools.com/js/js_this.asp", "test");
}, 3000);

setTimeout(() => {
  //jsWindow.resizeTo(600, 300); // Will not work for third part resources because of CORS
  jsWindow.resizeBy(-100, -100); // -"- (?)
  //jsWindow.moveTo(deltaX,deltaY); // -"- (?)
  jsWindow.moveBy(50, 50); // -"- (?)
}, 6000);

/*
setTimeout(() => {
  jsWindow.close();
}, 9000);
*/
/*
setTimeout(() => {
  window.open("http://127.0.0.1:5500/Dialogs_AB/Class_18/", "_blank");
}, 12000);
*/
// Jāpielāgo savam
