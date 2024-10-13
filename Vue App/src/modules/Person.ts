export default class Person {
    private _firstname: string;
    private _lastname: string;
    private _birthday: string;

    constructor(firstname: string, lastname: string, birthday: string) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._birthday = birthday;
    }

    public get firstname(): string {
        return this._firstname;
    }

    public set firstname(firstname: string) {
        this._firstname = firstname;
    }

    public get lastname(): string {
        return this._lastname;
    }

    public set lastname(lastname: string) {
        this._lastname = lastname;
    }

    public get birthday(): string {
        return this._birthday;
    }

    public set birthday(birthday: string) {
        this._birthday = birthday;
    }

    public get date(): Date {
        
        return new Date(
            parseInt(this._birthday.substr(0, 4)),
            parseInt(this._birthday.substr(4, 2)) - 1, // Month is zero-based
            parseInt(this._birthday.substr(6, 2))
        );
    }

    public set date(date: Date) {
        
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const day = date.getDate().toString().padStart(2, '0');
        this._birthday = `${year}${month}${day}`;
    }

    public get dateStr(): string {
        
        return this.date.toLocaleDateString();
    }
}
