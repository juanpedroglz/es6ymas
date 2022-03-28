//Con replaced remplazamos el primer elemento encontrado

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web"

const replacedString = string.replace("JavaScript","Python");
console.log(replacedString);
//Python es maravilloso, con JavaScript puedo crear el futuro de la web

//con replaced all puedo remplazar todo <-- este fue el que fue incluido en ES12

const replacedString2 = string.replaceAll("JavaScript","Python");
console.log(replacedString2);

//Python es maravilloso, con Python puedo crear el futuro de la web

//Metodos privados, dolo podemod acceder a ellos mediante la clase con gettes and setters
//que aun no vimos

class Message{
    #show(val){
        console.log(val);
    }


}

const message = new Message();
message.show('Hola');

//Promise any captura la primera que sea resuelta


const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

//en un arreglo paso mis promesas para que las evalue
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//weakreaf evita ser recogido por el manejador de la basura, no le entendi muy bien

class AnyClass{
    constructor(element){
        this.ref = new WeakRef(element);
    }
    {...}
}


//Nuevos operadores logicos 🧠

let isTrue = true;
let isFalse = false;

//AND logico
console.log(isTrue &&= isFalse);

//Or logico
console.log(isTrue ||= isFalse);
//Anluacion logica
console.log(isTrue ??= isFalse);