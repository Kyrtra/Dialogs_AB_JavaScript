window.name = "original";


let jsWindow = window.open(
  "http://127.0.0.1:5500/Class_20_2022/expense_tracker/Expense_tracker/expense_tracker.html",
  "about",
  "height=600,width=800"
);

//jsWindow.window.console(jsWindow.opener);

setTimeout(() => {
  window.open("http://127.0.0.1:5500/Class_20_2022/JS_class/index_b.html", "test");
  //window.open("http://127.0.0.1:5500/Class_20_2022/JS_class/index_b.html", "about");
}, 3000);

setTimeout(() => {
  jsWindow.resizeTo(600, 300);//Will not work for third party resources because of CORS
  jsWindow.resizeBy(-100, -100); // -"-(?)
 // jsWindow.moveTo(deltaX,deltaY); .. -"- (?)
 jsWindow.moveBy(50,50); // -"-(?)
}, 6000);

setTimeout(() => {
  window.open("http://127.0.0.1:5500/Class_16_2022/JS_class/index.html", "_blank");
}, 12000);

setTimeout(() => {
    jsWindow.close();
  }, 9000);