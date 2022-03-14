

//Antes de ES6

function nuevaFuncion(nombre,age,country){

    var nombre= nombre || 'juan';
    var age= age || 28;
    var country = country || 'MX';

    console.log(nombre, age, country);

}

//es6

function nuevaFuncion2(nombre = 'Juan', age= 28, country = 'MX'){
    console.log(nombre,age,country);
}

nuevaFuncion2();

//Teniendo un array cualquiera obtangamos sus datos
let person = ['Juan','Mexico'];

//Antes de ECMAScript 6
console.log(person[0],person[1]);

//ES6
let [nombre, pais] = person;
console.log(nombre);

//Teniendo un objeto cualquiera obtengamos sus datos
let person1 = {
	'nombre' : 'Juanin',
	'apellido' : 'gonzalez',
	'edad' : 28
}

//antes de ECMAScript 6
console.log(person1.nombre,person1.apellido,person1.edad)

//ES6
let{apellido,edad} = person;
console.log(edad,apellido);


//Operador de propagacion
const array =[1,2,3];
const result = [...array,4,5,6];

console.log(result);

let team1 = ['Juan','Guadalupe','Monce','Pedro']
let team2 = ['Pedro','Maria'];

let proteam = ['JJ',...team1,...team2];
console.log(proteam);



let nombre1 = 'Juan Pedro';
let edad1 = 28;

var objeto1 = {nombre: nombre1, age:edad1};

var objeto2= {nombre1,edad1};

console.log(objeto2.edad1);

const saludar = nombredelapersona => console.log(`Saludar a ${nombredelapersona}`);

const saludar2 = () => 1+1;

let resultadosuma = 5 + saludar2();

console.log(resultadosuma);


class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

/**
 * Generators
 */
 function* helloWorld() {
    if (true) {
      yield 'Hello, ';
    }
  
    if (true) {
      yield 'World!';
    }
  }
  const generatorHello = helloWorld();
  console.log('generatorHello first call -> ', generatorHello.next().value);
  console.log('generatorHello second call -> ', generatorHello.next().value);
  console.log('generatorHello third call -> ', generatorHello.next().value);

  
// index.js
import myFunction from './module.js';