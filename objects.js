class User {
    constructor(email, name){ //what we are expecting when the user creates a new user
        this.email = email;
        this.name = name;
    }
}

var userOne = new User('sohil@email.com', 'sohil');
var userTwo = new User('sparkphotos@gmail.com','spark');

console.log(userOne); 
console.log(userTwo); 

// the 'new' keyword
// creates a new empty object
// set the value of 'this' to be the new empty object
// calls the contructor method

