document.getElementById("demo_1").innerHTML = text;

document.querySelectorAll(' input[name], [id|=view], [class~=button] ');

/* input[name] Inputs elements with name property.

[id|=view] Elements with id that start with view-.

[class~=button] Elements with the button class*/

$(document).ready(function(){
    $("p[title|='Tomorrow']").css("background-color", "yellow");}); 