/*function Car (){
    this.id;
    this.licence;
    this.driver;
    this.passenger;
}*/
//con ES6
class Car {
    constructor(licence, driver){
        this.id;
        this.licence = licence;
        this.driver = driver;
        this.passenger;
    }

    printDataCar(){
        console.log(this.licence);
        console.log(this.driver);
        console.log(this.driver.name);
        console.log(this.driver.document);
    }
}