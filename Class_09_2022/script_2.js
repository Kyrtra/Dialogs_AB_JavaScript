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
var nauda = 15000; //sākuma summa
var likme = 0.01; //1 gada procentu likmes vērtība
var procenti_1 = (likme*nauda);                 
var procenti_2 = (procenti_1 + nauda)*likme*2;
var procenti_3 =(procenti_2 + nauda)*likme*3;
var procenti_4 = (procenti_3 + nauda)*likme*4;
var procenti_5 = (procenti_4 + nauda)*likme*5;


document.getElementById("vārds").innerHTML = ("Cien.,") + string + ("!");
document.getElementById("sākuma_summa").innerHTML = ("Ar prieku paziņojam, ka Jums kontā ir izveidojies uzkrājums - ")+nauda + (" EUR.");
document.getElementById("viens_gads").innerHTML =("Pēc 1 gada Jūs  procentos saņemsiet ")+ procenti_1.toFixed(2) + ( " EUR, ")+(" procentu likme ")+("1 %.");
document.getElementById("divi_gadi").innerHTML =("Pēc 2 gadiem Jūs procentos saņemsiet ")+ procenti_2.toFixed(2) + ( " EUR, ")+("procentu likme ") + ("2 %.");
document.getElementById("trīs_gadi").innerHTML =("Pēc 3 gadiem Jūs procentos saņemsiet ")+ procenti_3.toFixed(2) + ( " EUR, ") +("procentu likme ") +("3 %.");
document.getElementById("četri_gadi").innerHTML =("Pēc 4 gadiem Jūs procentos saņemsiet ")+ procenti_4.toFixed(2) + ( " EUR, ")+("procentu likme ") +("4 %.");
document.getElementById("pieci_gadi").innerHTML =("Pēc 5 gadiem Jūs procentos saņemsiet ")+ procenti_5.toFixed(2) + ( " EUR, ")+("procentu likme ") +("5 %.");



//Tatjanas P. risinājums - piemērs ar masīvu ( array) bez cikla (loop)

/*var name = "Jolanta Jekabsone";
var money = 15000;
const rates = ["0.0001", "0.0002", "0.0003", "0.0004", "0.0005"];

var profitFirst = money * rates[0];
var profitSecond = (money + profitFirst) * rates[1];
var profitThird = (money + profitSecond) * rates[2];
var profitFourth = (money + profitThird) * rates[3];
var profitFifth = (money + profitFourth) * rates[4];

document.getElementById("client").innerHTML = name;
document.getElementById("money").innerHTML = money;
document.getElementById("procenti_1").innerHTML = profitFirst.toFixed(2);
document.getElementById("procenti_2").innerHTML = profitSecond.toFixed(2);
document.getElementById("procenti_3").innerHTML = profitThird.toFixed(2);
document.getElementById("procenti_4").innerHTML = profitFourth.toFixed(2);
document.getElementById("procenti_5").innerHTML = profitFifth.toFixed(2);*/

//Sigitas L. risinājums - ar ciklu

/*function rekina(){
    
    
     
    var procenti;
    var rezultats;
    var klients=document.getElementById('klientsInput').value; 
    var summa=document.getElementById('summaInput').value; 
    var pazinojums='Nav ievadīti visi dati';
  
    document.getElementById('rezultatsOut').innerHTML='Cien. '+klients+'<br>Mēs, banka, redzam, ka Jums kontā ir '+summa+' Eur<br>'; 
            
    for (let i = 1; i < 6; i++) {
procenti=i/100; 
rezultats=(summa*procenti)/100;

document.getElementById('rezultatsOut').innerHTML=document.getElementById('rezultatsOut').innerHTML+'Ja jūs iegulīsiest to mūsu bankā uz '+i+' gadu, tad pec gada Jūs saņemsiet '+rezultats+' EUR.<br>';
}


    }*/
    
