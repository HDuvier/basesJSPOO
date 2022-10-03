/*al hacer una copia de un objeto este apunta a la memoria del que copio, es decir se modifican simultaneamente
-para evitar esto se hace lo siguiente siempre y cuando no hayan objetos
*/
/*quitar comentario
const obj1 ={
    a: "a",
    b: "b",
    c: {
        d:"d",
        e:"e",
    },
    editA() {
        this.a ="aaaa";
    }
};

const obj2 ={};


//esto funciona si no hay objetos dentro de mi objeto original
for(prop in obj1){
    obj2[prop]= obj1[prop];
}

// este es un metodo que nos permite hacer lo mismo que con el for peoro mas simple

const obj3= Object.assign(pend, obj1);

// con este metodo creamos un nuevo objeto a partir de otro y sus propiedades se mantienen en proto
// entonces podemos tomar los valores y crear nuevas instancias independientes del original
// pero nuevamente falla con los objetos dentro de objetos

const obj4 = Object.create({}, obj1);

//Ahora se usaran JSON.parse y JSON.stringify

JSON.stringify permite convertir objetos en string
JSON.parse convierte string en objetos

const stringifiedComplexObj = JSON.stringify(obj1);
const obj5 = JSON.parse(stringifiedComplexObj);

quitar comentario*/

//este funciona porque no copia una posicion de memoria sino que pasa entre los tipos de memoria 
// no se editan los objetos entre si en ninguna direccion 

// ESTAS FUNCIONES NO TRABAJAN CON FUNCIONES O METODOS 


//copiado usando una funcion recursiva RECURSIVIDAD

//primero definimos las funciones que nos diran si es objeto o array

function isObject(subject){
    return typeof subject == "object";
};

function isArray(subject){
    return Array.isArray(subject);
};

// entramos a definir la funcion recursiva

function deepCopy(subject){
    let copySubject;
//llamamos a las funciones

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    //verificamos el tipo de elemento
 // si es array inicializamos un array vacio
    if (subjectIsArray){
        copySubject = [];
    } else if (subjectIsObject) {
        //si es objeto inicializamos un objeto vacio
        copySubject ={};
    } else {
        // si no es array ni objeto devolvemos el elemento original
        return subject
    }
// con un ciclo for entramos a evaluar cada elemento del array u objeto a copiar
    for (key in subject) {
        //primero definimos si es un objeto
        const keyIsObject = isObject(subject[key]);

        //si es un objeto entramos a la recursividad y evaluamos nuevamente cada elemento
        if(keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        
        } else {
            //si es un array copiamos el elemento dentro del array individualmente y se evalua el siguiente
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                //si no es objeto ni array copiamos el elemento original
                copySubject[key] = subject[key];
            }
        }
    }
    //al terminar de evaluar se retorna una copia del elemento original e independiente
    return copySubject


};

//definimos el molde base o clase padre para usarlo o "heredarlo" 
//no usamos clases 

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPAths: undefined,
    socialMedia:{
        tweeter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};

//aca hacemos la "herencia" usando la RECURSIVIDAD

const duvier = deepCopy(studentBase);
Object.seal(duvier);
//con la siguiente podemos verificar si el objeto esta protegido y no se puede borrar
Object.isSealed(duvier);

