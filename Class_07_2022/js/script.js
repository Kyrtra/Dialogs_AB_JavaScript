// +, -, *, /
// ||, &&, !
// |, &, ~, ^
// >, >=, <, <=, ==, !=

456||0;

console.log(456||0);
document.getElementById("demo").innerHTML = 456||0;

/* 2---0000 001(0)
   4---0000 010(0)

   3---0000 001(1)
   11- 0000 101(1)
   
   x & 0 -> 0000 0000
   x & 1 -> 0000 000(x) loģiskais & pa bitiem ar vieninieku, tas noanulēs visus neinteresējošos bitus

   (x % 2) == 1 
   
   */ 


/*function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }*/

  