// propiedades estaticas del prototipo object 

const duvi = {
    name: "duvier",
    age: 31,
    approvedCourses: ["curso 1"],
    addCourse(newCourse) {
        console.log("This duv", this);
        console.log("this.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
}

//PROPIEDADES ESTATICAS 

console.log(Object.keys(duvi));
//.keys no lista la propiedad si enumerable es false

console.log(Object.getOwnPropertyNames(duvi));
//.getOwnPro... si lista la propiedad si enumerable es false

console.log(Object.entries(duvi));

// Tener cuidado con la siguiente propiedad VA EN PLURAL!!
console.log(Object.getOwnPropertyDescriptors(duvi));

//para definir los atributos de la propiedad
Object.defineProperty(duvi, "prueba", {
    value: "Persona",
    //enumerable permite o no que la propiedad sea listada en Object.keys
    enumerable: true,
    //writable permite o no editar el contenido de la propiedad, aunque si borrarla
    writable: true,
    //configurable permite o no borrar una propiedad de los objetos 
    configurable: true,

    //SI TODAS SON FALSE ENTONCES SE CUMPLEN TODAS LAS CONDICIONES ANTES DESCRITAS
})
// .seal hace que las propiedades del objeto tengan configurable en false
Object.seal();
// .freeze hace que las propiedades no se puedan borrar ni editar
// writable y configurable son false
Object.freeze();

