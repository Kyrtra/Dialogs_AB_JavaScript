// attaching mousedown event on button
document.getElementById( "myText" ).onblur = function(){
    fireEvent();
    };
    // This function will be called whenever onblur event occurs
    function fireEvent( ) {
    document.getElementById( "myText" ).style.backgroundColor = '#81D4FA';
    document.getElementById( "result1" ).innerHTML = " Input field lost focus ";
    }

    //https://www.educba.com/javascript-event-listener/?source=leftnav