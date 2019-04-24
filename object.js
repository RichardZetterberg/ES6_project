let fName = 'Bill',
    sNume = 'Chill',
    email = 'bill_chill@email.com';

let person = {
    fName,
    sNume,
    email,
    sayHello(){
        console.log(`Say HI to ${this.fName} ${this.sNume}`);
    }
};

Object.defineProperty(person, 'fullName', {
    get: function(){
        return this.fName + ' ' + this.sNume;
    },
    set: function(value){
        this.fName = value;
    }
})

console.log(person);

//person.sayHello();

/*function createCar(property, value){
    var car = {};

    car[property] = value;
    return car;
}*/

/*function createCar(property, value){
    return {
        [property]:value,
        ['&&&'+property]: value,
        [property.toUpperCase()]:value,
        ['get_'+property](){
            return this[property];
        }
    }
}

console.log(createCar('vin', 123456));*/


