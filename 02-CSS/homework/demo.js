// let, const

let x = 4;

/* let x = 7; */
const y = 6;

//arrow functions

var arrow = function (x) {return x + 3};

var arrow = x =>  x + 3 ;

var bob = {
    _name: "Bob",
    _friends: ['Kaleth'],
    printFriends() {
        var that = this;
      that._friends.forEach(f =>
        console.log(that._name + " knows " + f));
    }
  }

  console.log(bob.printFriends());

  //class

  class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre,
        this.apellido = apellido;
    }
}

//object literals

var nombre = ' Oscar';

var obj = {
    saludo: 'hola',
    saludar(){ console.log("buen día"), nombre},
    ["holadinamica" + saludo] : 34
}

//destructuring

var [a, b, c] = [1, 2, 3];

var [a, ,d] = [1, 2, 3];

var obj = {
    nombre : "Kaleth",
    edad: 25,
    usuario: {
        username: "hola123"
    }
}

var {nombre, usuario:{username}} = obj;

nombre = "Kaleth",
username = "hola123"

//default

function suma (x, y = 12){
    return x + y
}

var [a, b, c = 5] = [3, 8]

// rest, spread operator

var arr = [1,2,3];

function f(x,y,z){
    return x + y + z 
}

f(...arr); //6