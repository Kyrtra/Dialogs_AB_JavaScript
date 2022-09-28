var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("content-banner");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 6 seconds
}
window.name = "original";
function OpenNewWindow(){
window.open(
  "http://127.0.0.1:5500/Project_bookshop/our_books/sign-up/sign-up.html",
  //"https://www.w3schools.com/js/js_object_prototypes.asp",
  "test",
  "height=500,width=500"
);
}

