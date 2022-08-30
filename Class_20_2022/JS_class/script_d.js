https://www.w3schools.com/js/js_object_constructors.asp

//Constructor function for Person objects

function Person(first, last, age, eye){
    this.firstName=first;
    this.lastName - last;
    this.age = age;
    this.eyeColor = eye;
}

//Create two Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

//Display age

document.getElementById("demo").innerHTML = 
"My father is "+ myFather.age + ". My mother is " + myMother.age + ".";

console.log(myFather);

myFather.nationality = "English";
console.log(myFather);

myFather.name = function(){
    return this.firstName + " " + this.lastName;
}
console.log(myFather.name());

Object.defineProperty(myFather, "get_nationality",{
    get: function(){
        return this.nationality;
    }
});
console.log(myFather.get_nationality);

Object.defineProperty(myFather, "job", {
    value: "officer",
    writable: true,
    enumerable: false,
});

for (let current_property in myFather){
    console.log(current_property);
}



