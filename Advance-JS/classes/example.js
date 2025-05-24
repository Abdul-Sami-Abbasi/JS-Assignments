//classes in js
class Person{
    constructor(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.getInfo = () => {
            return `Name : ${this.fName} ${this.lName} & Age : ${this.age}`
        };
    }
    Salam(){
        return `Assalam-o-Aliakum ${this.fName} ${this.lName}`
    }
}

class Programmer extends Person{
    
    constructor(fName, lName, age, pl, experience){
        super(fName, lName, age);
        this.pl = pl;
        this.experience = experience;
        this.getInfo = () => {
            return `Name : ${this.fName} ${this.lName} & Age : ${this.age}, pl : ${this.pl}, Experience : ${this.experience}`
        }
    }
}

const user2 = new Programmer("Abdul", "Sami", 22, "JS", 2);
console.log(user2.getInfo());

const user1 = new Person("Abdul Sami", "Abbasi", 18);
console.log(user1.Salam());