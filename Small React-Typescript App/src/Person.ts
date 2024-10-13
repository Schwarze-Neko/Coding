class Person {
    private _firstname: string;
    private _lastname: string;
    private _birthday: string;
  
    constructor(firstname: string, lastname: string, birthday: string) {
      this._firstname = firstname;
      this._lastname = lastname;
      this._birthday = birthday;
    }
  
    get firstname(): string {
      return this._firstname;
    }
  
    set firstname(firstname: string) {
      this._firstname = firstname;
    }
  
    get lastname(): string {
      return this._lastname;
    }
  
    set lastname(lastname: string) {
      this._lastname = lastname;
    }
  
    get birthday(): string {
      return this._birthday;
    }
  
    set birthday(birthday: string) {
      this._birthday = birthday;
    }
  
    get date(): Date {
      return new Date(
        parseInt(this._birthday.substr(0, 4)),
        parseInt(this._birthday.substr(4, 2)) - 1, 
        parseInt(this._birthday.substr(6, 2))
      );
    }
  
    set date(date: Date) {
      const year = date.getFullYear().toString();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
      const day = date.getDate().toString().padStart(2, '0');
      this._birthday = `${year}${month}${day}`;
    }
  
    get dateStr(): string {
      return this.date.toLocaleDateString();
    }
  }
  
  export default Person;
  