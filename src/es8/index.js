
const data = {
    frontend: 'Juan',
    backend: 'Pedro',
    design: 'Teffcode'
}

const entries= Object.entries(data);
console.log(entries);

console.log(entries.length);

const data2 = {
    frontend: 'Juan',
    backend: 'Pedro',
    design: 'Teffcode'
}

const values = Object.values(data);

console.log(values);

//padStart agrega elementos al inicio y establece un limite de longitud
const nombre = 'Juan';
console.log(nombre.padStart(9,'Pedro'));
console.log(nombre.padEnd(9,'Pedro'));