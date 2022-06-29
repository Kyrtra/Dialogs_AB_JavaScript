const datums = new Date(); 
console.log("Datums " +datums);

var šodiena = new Date();
var diena = šodiena.getDay();
var dienu_saraksts = ["Svētdiena","Pirmdiena","Otrdiena","Trešdiena","Ceturtdiena","Piektdiena","Sestdiena"];


const datuma_teksts = datums.toLocaleString('lv-LV', {timeZone: 'Europe/Riga'});
console.log ("Datuma teksts (ar lv-LV formātu): " + datuma_teksts);

const datuma_teksta_garums = datuma_teksts.length;
console.log("Datuma teksta garums: " + datuma_teksta_garums);



document.getElementById("CurrentDay").innerHTML = document.getElementById("CurrentDay").innerHTML 
                                                    + dienu_saraksts[diena];

document.getElementById("CurrentTime").innerHTML = document.getElementById("CurrentTime").innerHTML 
                                                    + datuma_teksts.slice(11,datuma_teksta_garums);

                                             /*x = Intl.supportedValuesOf('timeZone');
                                             console.log(""+x);*/
