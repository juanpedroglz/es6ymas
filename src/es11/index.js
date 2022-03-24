const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});

//BigInt: Permite trabajar con numeros mayores a 2 ^53

const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Promise All settled se puede confundir con promise all la diferencia radica en que
//promise all actua cuando todas las promesas fueron cumplidas y settled cuando todas hayan
//terminado

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve1"));

Promise.allSettled([promise1,promise2,promise3])
.then(response => console.log(response))

// [
//     { status: 'rejected', reason: 'reject' },
//     { status: 'fulfilled', value: 'resolve' },
//     { status: 'fulfilled', value: 'resolve1' }
//   ]
  

//Global this , 

// 🌎 Global This 

console.log(window);
console.log(globalThis);

// Nuevo operador logico llamado null pregunta si el valor es nulo y asigna lo del 
//lado derecho
const foo = null ?? 'Juan Pedro';
console.log(foo);

const foo1 = 'hola' ?? 'Juan Pedro';
console.log(foo1)

// Optional chaining
/*En el siguiente ejempo simulamos que recibimos datos de algo externo ejemplo un api
sin el optional chaining los signos ?, nuestra aplicacion habria crasheado
de esta manera si no los tiene los marcara como undefined  */

const user = {};

console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}