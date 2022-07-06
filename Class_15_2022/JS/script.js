/**
 * @name summator
 * @description Sums a and b.
 * @param {Number} a
 * @param {Number} b
 *
 * @returns {Number} summator
 */
 function summator(a, b) {
    c = a + b;
    return c;
  }
  
  function dialogs() {
    var a = Number(prompt("Ievadiet a vērtību:"));
    b = Number(prompt("Ievadiet b vērtību:"));
    document.getElementById("summator_1").innerHTML =
      a + " un " + b + " summa ir " + summator(a, b);
  }
  dialogs();
document.getElementById("count").innerHTML = text;
////////////////////////////////////////////////////////

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars){
    text += x +"<br>";
}
document.getElementById("demo").innerHTML = text;

text = "";
for ( i =0; i < cars.length ; i++){
    text += cars [i] + "<br>";
}

document.getElementById("demo_old").innerHTML = text;