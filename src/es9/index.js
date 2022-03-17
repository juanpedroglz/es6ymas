const obj = {
    name: 'Juan',
    age: 28,
    country: 'MX'
}

let {name, ...all} = obj;
console.log(name);

//Propagacion

const obj = {
    name: 'Teff',
    age: 28
}

const obj1 ={
    ...obj,
    country: 'Col'
}

console.log(obj1);

//Se agregaron a las promesas los finally

const helloWorld = () => {
    return new Promise((resolve, reject) =>{
    (true)
    ? setTimeout(()=> resolve('Hello World') , 5000)
    : reject(new Error('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log('Funcion finalizada'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('1994-01-27');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day)

