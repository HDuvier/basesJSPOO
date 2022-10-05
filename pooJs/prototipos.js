function requiredParam(param){
    throw new Error(param + "es obligatorio");
};

function isArray(subject){
    return Array.isArray(subject);
};

function LearningPath({
    name = requiredParam("name"),
    courses = [],
}){
    this.name = name;
    this.courses = courses;
    
}

function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twiter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.learningPaths = [];
    this.socialMedia = {
        twiter,
        instagram,
        facebook,
    };

    const private = {
        "_learningPaths":[],
    };

    Object.defineProperty(this, "learningPaths",{
        get(){
            return private._learningPaths;
        },
        set(newLp){
            if(newLp instanceof LearningPath) {
                private._learningPaths.push(newLp);
            }else{
                console.warn("uno de las LPs no es unstancia de LearningPath");
            }
        },
    })

    for(LPs in learningPaths){
        this.learningPaths = learningPaths[LPs]
    }
}


const escuelaWeb = new LearningPath({name:"web", courses:[],});
const escuelaData = new LearningPath({name: "data", courses:[]});
const hector = new Student({
    name: "Hector",
    age: 31,
    email:"hdca@algo.com",
    instagram: "mikefallen",
    learningPaths:[
        escuelaWeb,
        escuelaData,
   
]
})
