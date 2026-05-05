class shape {
    getArea():number{
        return 0;
    }
}

class circle extends shape{
    radius:number;

    constructor(radius:number){
        super()
        this.radius=radius;
    }
    getArea(): number {
        return Math.PI*this.radius*this.radius;
    }
}

class Retangle extends shape{
    a:number;
    b:number;

    constructor(a:number,b:number){
        super()
        this.a = a;
        this.b = b;
    }
    getArea(): number {
        return this.a*this.b
    }
}

const circle1 = new circle(2);

console.log(circle1.getArea());

