/*
let a = 5*2;

switch (a) {
  case 8:
    console.log( "Not enough. The value is not 8" );
    break;
  case 9:
    console.log( 'Almost there!' );
    break;
  case 10:
    console.log( 'Nice! It is correct! The value is 10' );
    break;
  default:
    console.log( "I have no recollection of these values" );

    }
document.getElementById("demo").innerHTML = ("a vērtība ir ") + a;
*/

/*
let b = 5*3;
switch (b) {
  case 8:
    console.log( "Not enough. The value is not 8" );
  case 9:
    console.log( 'Almost there!' );
  case 15:
    console.log( 'Nice! It is correct! The value is 10' );
  default:
    console.log( "I have no recollection of these values" );

    }
document.getElementById("demo").innerHTML = ("b vērtība ir ") + b;
*/
/////////////////////////////////////////////////////////////////////

// Sekojošo ar switch pārrakstīt uz ar "if".

//Switch

/*
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

//If

//let browser = 'Opera';

/*
let browser =  prompt("Enter browser name");
if (browser == 'Edge'){
    console.log("You've got the Edge!");
 }  else if (browser == 'Chrome' || browser == 'Firefox'|| browser == 'Safari'|| browser == 'Opera'){
    alert("Okay we support these browsers too");
 }  else {
    alert("We hope that this page looks ok!");
 }
 */

 ///////////////////////////////////////////////////////////////

// If pārveidot par switch

//If
 /*
 let a = +prompt('a?', '');

 if (a == 0) {
   alert( 0 );
 }
 if (a == 1) {
   alert( 1 );
 }
 
 if (a == 2 || a == 3) {
   alert( '2,3' );
 }
*/


//Switch

/*
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert( 0 );
        break;

    case 1:
        alert( 1 );
        break;

    case 2:
    case 3:
        alert( '2,3' );
        break;
}*/

////////////////////////////////////////////////////////////////

//

