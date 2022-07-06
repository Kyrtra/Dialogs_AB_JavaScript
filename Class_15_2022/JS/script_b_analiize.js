/*
Palūgt lietotājam ierakstīt kādu tekstu (ar prompt) un saskaitīt cik tajā 
tekstā ir vārdi, kuru garums > 5.
*/

/* 1.teksta rindas iegūšana:
let text = "dffff";*/
let text = prompt("Cien.lietotāj, lūdzu, ievadi kādu teikumu:");
/*2. skaitīt burtus vārdā, katra atsevišķā vārdā vienmēr sākot skaitīt no 1
 */
/*text = "a abc abcd abcde abcdef abcdefg"; //atstarpe beigās, lai ņem vērā arī pēdējo rindu
//text = text + " ";*/

//ievietot šīs dienas algoritmu funkcijas konstrukcijā, lai to var atkārtoti pielietot

var burtu_skaitiitaajs_vaardaa = 0;
var simbolu_skaitiitaajs_teikumaa = 0;
var deriigu_vaardu_skaits = 0;
N = 5;
for (let x of text) {
  simbolu_skaitiitaajs_teikumaa++;
  if (x == " ") {
    if (burtu_skaitiitaajs_vaardaa >= N) {
      deriigu_vaardu_skaits++;
    }
    burtu_skaitiitaajs_vaardaa = 0;
  } else {
    burtu_skaitiitaajs_vaardaa++;

    if (simbolu_skaitiitaajs_teikumaa == text.length) {
      console.log(
        "Iepriekšējā vārdā bija " + burtu_skaitiitaajs_vaardaa + " burti"
      );
      if (burtu_skaitiitaajs_vaardaa >= N) {
        deriigu_vaardu_skaits++;
      }
      burtu_skaitiitaajs_vaardaa = 0;
    }
  }
}
document.getElementById("teksta_analize").innerHTML =
  "Šajā teikumā:<br><b>" +
  text +
  "</b><br>ir " +
  deriigu_vaardu_skaits +
  " vārdi, kuru" +
  " garums ir >= " +
  N;
