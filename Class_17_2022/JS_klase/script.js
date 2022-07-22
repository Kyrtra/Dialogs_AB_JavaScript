//objekta definēšana ar literāļa palīdzību
const car = {type:"Fiat", model:"500", color:"white"};
//literālis var būt arī tukšs -{} un tad īpašības (un metodes) var pievienot pēc nepieciesāmības
car.price = 1000;

//objekta definēšana ar atslēgas vārda new palīdzību
const airplane = new Object();
// un tad īpašības (un metodes) var pievienot pēc nepieciešamības
airplane.price = 100000;

//objekta īpašības ( property) izgūšana

//console.log(car.type);
//console.log(car["type"]);

//objekts ar metodi

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName: function()
    {
      return this.firstName + " " + this.lastName;
    }
  }

//+ savs piemērs

const adrese = {
  iela: "Pļavas",
  nummurs: 9,
  pilseta: "Liepāja",
  pilnaAdrese: function () {
    return this.iela + " iela " + this.nummurs + ", " + this.pilseta + ".";
  },
}
document.getElementById("demo").innerHTML = adrese.pilnaAdrese();







