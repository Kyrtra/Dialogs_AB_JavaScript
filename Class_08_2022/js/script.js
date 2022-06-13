  var x = 45;
  document.getElementById("dec").innerHTML = x;


  //decimālā skaitļa pārveidošana binārā secībā

 /*
 ....Jūsu algoritms dec skaitļa pārveidošanai par bināro skaitli
 ....vai par 0 un 1 secību
 ....drīkst izmantot tikai divus vai trīs mainīgos

 */

 //String to binary
 var bit_number =7^1048;
 var y = (x << (bit_number-7)) >> bit_number;
 var z = String(y);
 y = (x << (bit_number-6)) >> bit_number;
 z = z + String(y);
 y = (x << (bit_number-5)) >> bit_number;
 z = z + String(y);
 y = (x << (bit_number-4)) >> bit_number;
 z = z + String(y);
 y = (x << bit_number-3) >> bit_number;
 z = z + String(y);
 y = (x << (bit_number-2)) >> bit_number;
 z = z + String(y);
 y = (x << bit_number-1) >> bit_number;
 z = z + String(y);
 y = (x << bit_number-0) >> bit_number;
 z = z + String(y);

 document.getElementById("bin").innerHTML = z;


 //Atbilde būs:
 //y = '0b00101101';
 //sākumā var atrast un pielietot standarta JS funkciju,
 //kas pārveido dec to bin
 //if, for utt. pagaidām izmantot nedrīkst






//a = 45;
//console.log(a);

 let carName = "Volvo";
 document.getElementById("demo").innerHTML = carName;


//'scope' - koda bloks, nodalāms ar šādām iekavām - {}
//var atslēgas vārds ļauj nodefinēt globālo mainīgo, globālais mainīgais ir pieejams visā dokumenta garumā;
var a = 45;
 console.log("a vērtība ( no 'galvenā zara' pirms scope): "+a);
 {
 console.log("a vērtība pirms pārdefinēšanas (no 'scope'): "+a);
 var a = 46;
 console.log("a vērtība pēc pārdefinēšanas ( no 'scope'): "+a);
 }
 console.log("a vērtība (no 'galvenā zara pēc scope'): "+a);


 
 //let atslēgas vārds ļauj nodefinēt lokālo mainīgo vienas koda bloka - scope ietvaros, norobežotā ar figūriekavām, vērtība var tikt mainīta;
let b = 60;
 console.log("b vērtība ( no 'galvenā zara' pirms scope): "+b);
 {
    //console.log("b vērtība pirms pārdefinēšanas (no 'scope'): "+b);
    let b = 61;
    console.log("b vērtība pēc pārdefinēšanas ( no 'scope'): "+b);
 }
 
console.log ("b vērtība (no 'galvenā zara'pēc scope): "+b);


// const atslēgas vārds var nodefinēt lokālo konstanti, pieejams koda blokā - scope, norobežōtā ar {}, vērtība nevar tikt mainīta;

const c = 100;
 console.log("c vērtība ( no 'galvenā zara' pirms scope): "+c);
 {
    //console.log("c vērtība pirms pārdefinēšanas (no 'scope'): "+c);
    const c = 101;
    console.log("c vērtība pēc pārdefinēšanas ( no 'scope'): "+c);
 }
 
console.log ("c vērtība (no 'galvenā zara'pēc scope): "+c);

//decimālā skaitļa pārveidošana binārā secībā

 

// b = 5;
 //f = 7;

 //c = (b++)**2; //25 - ja ++ ir pēc burta, tad vispirms burtu liek kvadrātā un vēlāk pieskaita 1
 //d = (++f)**2; //64 - ja ++ ir pirms burta, tad vispirms pieskaita 1 pie skaitļa un tad liek to kvadrātā

 //e = c + d;

 //console.log(e);

 

//{
 //   console.log(a);

//}