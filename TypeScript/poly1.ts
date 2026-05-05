class person {
    name: string;
    age: number;
    colour: string;
    address: string;

    constructor( name:string,age:number,colour:string,address:string ){
        this.name = name ;
        this.age = age ;
        this.colour = colour ;
        this.address = address ;
    }

    getInfo(){
        console.log(`${this.name} is Good Person. Her age is ${this.age}`);
    }
    
    listenMusic(){
        console.log(`${this.name} listens music in Free time. ${this.name} likes many music`);
    }
    watchMovie(){
        console.log(`${this.name} watches movie and Action Moives like much more than any other movie`);

    }

}

const Joy = new person(" Mr. Joy", 23,"Red","Manikganj");
Joy.getInfo();
Joy.listenMusic();
Joy.watchMovie();

const Lily = new person(" Lily ",24,"Golden","India");
Lily.getInfo();
Lily.listenMusic();
Lily.watchMovie();

class normalPeople extends person{
    getInfo(): void {
        console.log(` they have on brain lower conciousness `);
        
    }
}

