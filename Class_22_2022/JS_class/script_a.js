// Nodarbības laikā un pēc tās ir jāiepzistās ar:
// window objektu (pārluka logs, tā īpašības un iespējamas darbības) - https://www.javascripttutorial.net/javascript-bom/javascript-window/
// paziņojumu/dialogu metodēm:
//   brīdinājums - alert() - https://www.javascripttutorial.net/javascript-bom/javascript-alert/
//   apstiprinājums - confirm() - https://www.javascripttutorial.net/javascript-bom/javascript-confirm/
//   uzvedne - prompt() - https://www.javascripttutorial.net/javascript-bom/javascript-prompt/
// "Note that the alert/confirm/prompt dialog is synchronous and modal.
//  It means that the code execution stops when a dialog is displayed and resumes after it has been dismissed."
// darbību palaišanas laiku - taimeru - uzdošanas metodēm un kontroli:
//   taimeris - setTimeout() - https://www.javascripttutorial.net/javascript-bom/javascript-settimeout/
//   cikliskais taimeris - setInterval() - https://www.javascripttutorial.net/javascript-bom/javascript-setinterval/

// Aktuālākā informācija par Window īpašībām un metodēm - https://developer.mozilla.org/en-US/docs/Web/API/Window

// Jāpielāgo savam

window.name = "original";

let jsWindow = window.open(
  "http://127.0.0.1:5500/Class_20_2022/expense_tracker/Expense_tracker/expense_tracker.html",
  //"https://www.w3schools.com/js/js_object_prototypes.asp",
  "test",
  "height=600,width=800"
);

//jsWindow.window.console(jsWindow.opener);

setTimeout(() => {
  window.open("http://127.0.0.1:5500/Class_17_2022/JS_klase/index.html", "test");
  //window.open("https://www.w3schools.com/js/js_this.asp", "test");
}, 3000);

setTimeout(() => {
  //jsWindow.resizeTo(600, 300); // Will not work for third part resources because of CORS
  jsWindow.resizeBy(-100, -100); // -"- (?)
  //jsWindow.moveTo(deltaX,deltaY); // -"- (?)
  jsWindow.moveBy(50, 50); // -"- (?)
}, 6000);

/*
setTimeout(() => {
  jsWindow.close();
}, 9000);
*/
/*
setTimeout(() => {
  window.open("http://127.0.0.1:5500/Dialogs_AB/Class_18/", "_blank");
}, 12000);
*/

setTimeout(() => {
  //window.alert("Hello World!");
  jsWindow.alert("Hello World!");
}, 7000);

setTimeout(() => {
  jsWindow.close();
}, 9000);


// Class_22 nodarbībai
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
    console.log(`${key}:${value}`);
}

keys_ = [];
for (const key of urlParams.keys()) {
  console.log(key);
  keys_.push(key);
}
console.log(keys_);

values_ = [];
for (const value of urlParams.values()) {
  console.log(value);
  values_.push(value);
}
console.log(values_);

entries_ = [];
for (const entry of urlParams.entries()) {
  console.log(entry);
  entries_.push(entry);
}
console.log(entries_);

console.log(urlParams.has('q1'));
console.log(urlParams.has('q3'));