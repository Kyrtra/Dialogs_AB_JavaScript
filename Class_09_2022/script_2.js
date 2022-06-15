//Decimāls skaitlis uz bināru

var x = 60;
document.getElementById("dec").innerHTML = x;
/*
x >> 0 -> 60(dec) atbilst 0011 1100(bin)*/

var bit_sequence = "";
var zero_th_bit = (x >> 0) & 1;
console.log("0. bita attēlošana (pēc nobīdes pa 0 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. bits: " + bit_sequence);

zero_th_bit = (x >> 1) & 1;
console.log("1. bita attēlošana (pēc nobīdes pa 1 bitu pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. bits: " + bit_sequence);

zero_th_bit = ( x>> 2) & 1;
console.log("2. bita attēlošana (pēc nobīdes pa 1 bitu pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. un 2. bits: " + bit_sequence);

zero_th_bit = ( x >> 3) & 1;
console.log(""+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("" + bit_sequence);

zero_th_bit = ( x >> 4) & 1;
console.log(""+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("" + bit_sequence);

zero_th_bit = ( x >> 5) & 1;
console.log(""+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("" + bit_sequence);

zero_th_bit = ( x >> 6) & 1;
console.log(""+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("" + bit_sequence);

zero_th_bit = ( x >> 7) & 1;
console.log(""+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("" + bit_sequence);

document.getElementById("bin").innerHTML = bit_sequence;

//Ekvatora garuma aprēķins

var r = 6371;
p = 3.14;
g = 2*p*r;

num = g;
roundedString = num.toFixed(2);
rounded = Number(roundedString);

document.getElementById("ekvatora_garums").innerHTML = ("Ja pieņem, ka zemes radius ir: ") +r + (" km,") + (" tad ekvatora aptuvenais garums ir: ") +rounded + (" km.");
console.log(""+g);


//Bankas aprēķini

var string = 'Anita Priedīte';
var e = 1000; //sākuma summa
var z = 0.01; //1 gada procentu likmes vērtība

/*var i = 3; //gadi
var s;
s = ((z*e)/100)*i;
console.log(""+s); */



var i;   //1 gada gala summa
var j;
var k;
var l;
var m;



i = ((z*e))/100*1;
j = ((z*e)/100)*2;
k = ((z*e)/100)*3;
l = ((z*e)/100)*4;
m = ((z*e)/100)*5;

myNumber = k;
roundedString = myNumber.toFixed(2);
rounded_number =  Number(roundedString);

console.log(""+k);

document.getElementById("vārds").innerHTML = ("Cien.,") + string + ("!");
document.getElementById("sākuma_summa").innerHTML = ("Mēs, banka, pieņemot, ka Jums kontā ir ")+e + (" EUR.");

document.getElementById("viens_gads").innerHTML =("Uz 1 gadu procentos Jūs saņemsiet ")+ i + ( " EUR.");
document.getElementById("divi_gadi").innerHTML =("Uz 2 gadiem procentos Jūs saņemsiet ")+ j + ( " EUR.");
document.getElementById("trīs_gadi").innerHTML =("Uz 3 gadiem procentos Jūs saņemsiet ")+ rounded_number + ( " EUR.");
document.getElementById("četri_gadi").innerHTML =("Uz 4 gadiem procentos Jūs saņemsiet ") + l + ( " EUR.");
document.getElementById("pieci_gadi").innerHTML =("Uz 5 gadiem procentos Jūs saņemsiet ")+ m + ( " EUR.");



