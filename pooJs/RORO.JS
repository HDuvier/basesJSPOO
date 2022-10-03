
function requiredParam(param){
    throw new Error(param + "es obligatorio");
};


function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twiter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {

    const private = {
        "_name": name,
    };

    const public = {
        email,
        age,
        socialMedia: {
            twiter,
            instagram,
            facebook,
        },
        approvedCourses,
        learningPaths,

        readName(){
            return private._name;
        },

        changeName(newName){
            private._name = newName;
        },
    }
//si hacemos la siguiente configuracion de las propiedades no podriamos
//trabajar con polimorfismo
    Object.defineProperty(public, "readName",{
        configurable: false,
        writable: false,
    })

    Object.defineProperty(public, "changeNAme",{
        configurable: false,
        writable: false,
    })
    return public;
}

const hector = createStudent({
    name: "Hector",
    age: 31,
    email:"hdca@algo.com",
    instagram: "mikefallen",

})
//podemos crear los elementos creados a partir de los metodos
//y a la fabrica de elementos usando Object.freeze(funcionCreadora)
Object.freeze(createStudent);

// de la anterior manera estoy protegiendo a la estancia hector y a la funcion que la creo

