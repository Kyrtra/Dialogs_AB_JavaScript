/**
 * @name count_the_words
 * @description Counting words that have 5 or more letters in a sentence
 * @param {Number} N
 * @param {Number} html_el_id_nr
 * @returns {void} count_the_words
 */

function count_the_words(N, burtu_skaitiitaajs_vaardaa, simbolu_skaitiitaajs_teikumaa, deriigu_vaardu_skaits) {
var burtu_skaitiitaajs_vaardaa = 0;
var simbolu_skaitiitaajs_teikumaa = 0;
var deriigu_vaardu_skaits = 0;
let text = prompt("Cien.lietotāj, lūdzu, ievadi kādu teikumu:");
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
}
count_the_words(3);