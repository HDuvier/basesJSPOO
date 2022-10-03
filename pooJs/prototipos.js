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

    if(!isArray(learningPaths)){
        console.error("learningPath is not array");
        return;
    };

    for(let learningPath of learningPaths){
        if(learningPath instanceof LearningPath) {
            this.learningPaths.push(learningPath);
        }
    };
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
    {
        name: "web",
        courses: [],
    }
]
})

Object.freeze(hector);
