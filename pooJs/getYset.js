function requiredParam(param){
    throw new Error(param + "es obligatorio");
};

function isArray(subject){
    return Array.isArray(subject);
};

function createLearningPath({
    name = requiredParam("name"),
    courses = [],
}){
    const private = {
        "_name": name,
        "_courses": courses,
    };

    const public = {
        get name(){
            return private._name;
        },
        set name(newName){
            if (newName.length != 0) {
                private._name = newName;
            }else{
                console.warn("el nombre debe tener 1 caracter al menos")
            }
        },
        get courses(){
            return private._courses;
        },
    };

    return public;
}

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
        "_learningPaths": learningPaths,
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
        

    get name(){
        return private._name;
    },
    set name(newName){
        if (newName.length != 0) {
            private._name = newName;
        }else{
            console.warn("el nombre debe tener 1 caracter al menos")
        }
    },
    get learningPaths(){
        return private._learningPaths;
    },
    set learningPaths(newLearningPaths){
        if (!newLearningPaths.name) {
            console.warn("tu learningPath no tiene nombre");
            return;          
        }else if (!newLearningPaths.courses){
            console.warn("tu learningpath no tiene courses");
            return;
        }else if (!isArray(newLearningPaths.courses)){
            console.warn("tu learningpath no tiene listado");
            return;
        }else{
            private._learningPaths.push(newLearningPaths);
        }
    },
    }

    return public;
}

const hector = createStudent({
    name: "Hector",
    age: 31,
    email:"hdca@algo.com",
    instagram: "mikefallen",

})


