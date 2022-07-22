let grades = [91, 66, 77, 84, 66];
let search = 66;

/*function searchGrade (grades, search){
  for( var i = 0; i < grades.length; i++){
    if (grades[i] == search){
      console.log(`The grade ${search} exists`);
      break;
    }
  }
}
searchGrade (grades, search);*/

function searchGrade(grades, search) {
  for (currentGrade of grades) {
    if (currentGrade == search) {
      console.log(`The grade ${search} exists`);
      break;
    }
  }
}
//searchGrade(grades, search);

const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

console.log(person1.fullName.call(person2)); //


//document.getElementById("demo").innerHTML = adrese.pilnaAdrese();


//www.programiz.com

//////////////////////////////piemērs ar 'call' 

//function definition 
function Animal(name, age) {
  this.name = name;
  this.age = age;
}

//function definition 
function Horse(name, age) {
  Animal.call(this, name, age);
  this.sound = "Neigh";
}

//function definition 
function Snake(name, age) {
  Animal.call(this, name, age);
  this.sound = "Hiss";
}

const snake1 = new Snake("Harry", 5);
console.log(snake1.name, snake1.age, snake1.sound);

const horse1 = new Horse("Arnold", 8);
console.log(horse1.name, horse1.age, horse1.sound);


/////////////////////////piemērs ar 'bind' 

// object definition
const student1 = {
  name: "Jack",
  grade: "5",
  introduction: function () {
    console.log(this.name + "studies in grade" + this.grade + ".");
  },
};

// object definition
const student2 = {
  name: "Jimmy ",
  grade: " 6",
};

// the object student2 is borrowing introduction method from student1
let result= student1.introduction.bind(student2);

// invoking introduction() function
result();

// Output:
// Jimmy studies in grade 6.


//////////////////////////techonthenet.com

//piemērs ar for''in'

var totn_colors = [ 'blue', 'gray', 'white' ];

for (var color in totn_colors) {
   console.log(totn_colors[color]);
}
