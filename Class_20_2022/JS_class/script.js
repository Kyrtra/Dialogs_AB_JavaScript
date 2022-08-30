/*
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get_language: function(){
        return this.language;
    },
    get lang() {
      return this.language;
    }
  };
  
// Display data from the object using a getter:
  document.getElementById("demo").innerHTML = person.language;

// Display data from the object using a getter:
document.getElementById("demo1").innerHTML = person.get_language();

// Display data from the object using a getter:
document.getElementById("demo2").innerHTML = person.lang;
*/

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get_language: function(){
        return `${this.firstName} knows ${this.language}`;  
    },
    get lang() {
      return `${this.firstName} knows ${this.language}`;
    }
  };
  
  // Display data from the object using data property:
  document.getElementById("demo1").innerHTML = `${person.firstName} knows ${person.language}`;

  // Display data from the object using method:
  document.getElementById("demo2").innerHTML = person.get_language();

  // Display data from the object using a getter:
  document.getElementById("demo3").innerHTML = person.lang;

