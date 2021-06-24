// ES6 JS Classes
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User';
    };

    //Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    //Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};

//Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class bannedUser extends User {
    userBan() {
        console.log(`${this.name}, you have been banned due to subletting your account.`)
    };
};

//my instance
let badGuy = new bannedUser('Michael Myers');
badGuy.userBan();