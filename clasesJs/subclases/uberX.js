class UberX extends Car {
    constructor (licence, driver, brand, model){
    super(licence,driver)
    this.brand = brand;
    this.model = model;
}
printDataCar(){
    console.log(this.licence);
    console.log(this.brand);
    console.log(this.driver.name);
    console.log(this.driver.document);
}
}