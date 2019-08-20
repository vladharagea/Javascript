//Object Methods
//A method is a function stored as a property in object.

var person = {
    firstName : 'John',
    lastName : 'Doe',
    id : 5566,
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
};

console.log(person.fullName());

console.log('--------------------------------------');

const personOne = {
    name: 'John',
    dateOfBirth: 2000,
    age(dateOfBirth){
        const today = new Date();
        console.log(today)
        const year = today.getFullYear();
        console.log(year)
        const age = year - this.dateOfBirth;
        return age;
    }
};
console.log(personOne.age());

console.log('-------------------------------------');

const personTwo = {
    isHooman : false,
    obj : {
        name : 'Val'
    },
    name : 'test',
    test : 'oldObject',
    displayIntro : function(){
        console.log(`My name is ${this.name}, Am I hooman? - ${this.isHooman}`);
        console.log(`My name is ${this.obj.name}, Am I hooman? - ${this.isHooman}`);
    }
};

personTwo.displayIntro();

//Object.create method

const me = Object.create(personTwo);
me.name = 'John';
me.isHooman = 'true';
me.displayIntro();

