class Student {
    name:string;
    age:number;
    address:string

    constructor(name:string,age:number,address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numberOfHours: number){
        console.log(`${this.name} ${numberOfHours} Onek ghum ashi`); 
    }
}

const student1 = new Student( " mr. fakibaz",23,"Bangladesh");
student1.getSleep(15);
//console.log(student1);
