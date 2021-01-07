export class Customer{
    public firstName: string;
    public lastName: string;
    public address: any;
    public gender: string;
    public city: string;
    public state: string;
    public orderTotal: number;
    constructor(firstName: string,lastName: string,address: any,gender: string,city: string,state: string,orderTotal: number)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.gender=gender;
        this.city=city;
        this.state=state;
        this.orderTotal=orderTotal;
    }
}
