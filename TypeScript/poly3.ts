abstract class Payment {
    abstract pay(): void;
}

class CreditCardPayment extends Payment {
    constructor(public amount: number) {
        super();
    }
    pay(): void {
        console.log(`Paid ${this.amount} using Credit Card`);
    }
}

class BkashPayment extends Payment {
    constructor(public amount: number) {
        super();
    }
    pay(): void {
        console.log(`Paid ${this.amount} using bKash`);
    }
}

class CryptoPayment extends Payment {
    constructor(public amount: number) {
        super();
    }
    pay(): void {
        console.log(`Paid ${this.amount} using Crypto`);
    }
}