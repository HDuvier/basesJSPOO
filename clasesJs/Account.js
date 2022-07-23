/*
function Account() {
    this.id;
    this.name;
    this.document;
    this.email;
    this.password;
}*/
// con ES6
class Account {
    constructor (name, document){
        this.id;
        this.name = name;
        this.document = document;
        this.email;
        this.password;
    }

    printDataUser(){
        console.log(this.name);
        console.log(this.document);
    }
}