//Viens teksta lauks + poga ("Pievienot jaunu ievad lauku").
//Lauks ar nosaukumu
//Jautājums - kā to lauku sauc?

//https://toolsnull.com/code-solution/how-to-create-dynamic-form-fields-in-javascript
  
let btn = document.querySelector('#btn');

function display() {
    
    let inputboxname_ = prompt("Ievadiet Input Box nosaukumu");
    var input = document.createElement("input");
    input.name=inputboxname_;
    input.value = inputboxname_;
    input.type = 'text';
    menu.appendChild(input);
    let poga = document.createElement("button");
    poga.innerHTML='delete';
    menu.appendChild(poga);

 
}
btn.addEventListener('click',display);