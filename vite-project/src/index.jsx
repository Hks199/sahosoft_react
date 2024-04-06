export class Student {
    constructor(roll_Number, name, age) {        //constructor is use to create and initialize an object
        this.roll_Number = roll_Number,
            this.name = name,
            this.age = age
    }

    display_Data() {
        return console.log(this.roll_Number, this.name, this.age);
    }
}

export class Teacher {
    constructor(roll_Number, name, age) {        //constructor is use to create and initialize an object
        this.roll_Number = roll_Number,
            this.name = name,
            this.age = age
    }

    display_Data() {
        return console.log(this.roll_Number, this.name, this.age);
    }
}
export class Clerk {
    constructor(roll_Number, name, age) {        //constructor is use to create and initialize an object
        this.roll_Number = roll_Number,
            this.name = name,
            this.age = age
    }

    display_Data() {
        return console.log(this.roll_Number, this.name, this.age);
    }
}