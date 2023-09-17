class User {
    constructor(email, name){ //what we are expecting when the user creates a new user
        this.email = email;
        this.name = name;
    }
    login(){ 
        console.log(this.email, 'just logged in');
    }
    logout(){ 
        console.log(this.email, 'just logged out'); 
    }
}

var userOne = new User('sohil@email.com', 'sohil');
var userTwo = new User('sparkphotos@gmail.com','spark');
userOne.login();
userTwo.logout();

// the 'new' keyword
// creates a new empty object
// set the value of 'this' to be the new empty object
// calls the contructor method

