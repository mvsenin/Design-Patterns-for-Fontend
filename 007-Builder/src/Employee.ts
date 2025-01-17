/*
    `Employee` class implements Builder pattern - there are several setter
    methods which allow setting object attributes and return the instance
    itself, also there is the `build()` method that peforms necessary checks
*/

export default class Employee {
    public name: string;
    public birthdate: Date|null;
    public city: string|null;
    public company: string|null;
    public position: string|null;

    constructor(name: string) {
        this.name = name;
        this.birthdate = null;
        this.city = null;
        this.company = null;
        this.position = null;
    }

    setBirthdate(date: Date) {
        this.birthdate = date;
        return this;
    }
    setCity(city: string) {
        this.city = city;
        return this;
    }
    setCompany(company: string) {
        this.company = company;
        return this;
    }
    setPosition(position: string) {
        this.position = position;
        return this;
    }
    build() {
        if (!this.name) {
            throw Error('Name is obligatory');
        }
        return this;
    }

    // Returns object as HTML string
    stringify(): string {
        var res: string;
        res = (this.name ? `Name: ${this.name}` : ``);
        res += (this.birthdate ? `<br>Birthdate: ${this.birthdate.toISOString().split('T')[0]}` : ``);
        res += (this.city ? `<br>City: ${this.city}` : ``);
        res += (this.company ? `<br>Company: ${this.company}` : ``);
        res += (this.position ? `<br>Position: ${this.position}` : ``);
        return res;
    }
}