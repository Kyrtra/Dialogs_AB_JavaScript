//hoisted

//funkcijas definēšana ar
//apgalvojuma palīdzību

function square_statement (number){
    return number * number;
}
const x = square_statement (4);
console.log (x);

//funkcijas definēšana ar 
//izteiksmes palīdzību
// "anonīmas" funkcijas piemērs

const square_expression = function (number) {
    return number * number;
  }
  const y = square_expression(4);
  console.log(y);

 // rekursīvas funkcijas piemērs
 // ne "anonīmas" funkcijas piemērs

 const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  }
  
  //console.log(fac((4)); // būs kļūda, funkcija "fact" uz āru nav zināma, var griezties tikai pie "factorial"
  console.log(factorial(3));
  
//piemērs ar funkciju, kuras arguments (viens no)
//arī ir funkcija

  function map(f, a) { //kompakti, iekšēji sauc par f
    const result = [];
    //i = 0;
    for (const v of a) {
     // result[i] = f(v); vērtības ievietošana pie konkrēta indeksa
      //i++;
      result.push(f(v));
    }
    return result;
  }
  
  const function_for_array_each_element = function (x) {
    return x * x * x;
  }
  
  const numbers = [0, 1, 2, 5, 10];
  const cube = map(function_for_array_each_element, numbers);
  console.log(cube);

  //mana funkcija

  function greeting() {
   console.log("Hello, how are you?");
  }
  greeting();

  function divide(a,b){
   console.log(a/b);
  }
  divide(20,5);
  divide(5,10);

//Farenheit to Celsius

function conversion_c(N,x) {
  x = (N - 32) / 1.8;

  resultCelsius = x.toFixed(2);

  document.getElementById("converter").innerHTML =
    N +
    " grādi pēc Fārenheita skalas ir <br> " +
    resultCelsius +
    " grādi pēc Celsija skalas";
  
}
  conversion_c(80);
  conversion_c(90);

  //Celsius to Farenheit

  function conversion_f(M,y) {
    y = (M * 1.8) + 32;
  
    resultFarenheit = y.toFixed(2);
  
    document.getElementById("converter_2").innerHTML =
      M +
      " grādi pēc Celsija skalas ir <br> " +
      resultFarenheit +
      " grādi pēc Fārenheita skalas";
  }
  conversion_f(32.22);


  

  