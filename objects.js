class User {
    constructor(email, name){ //what we are expecting when the user creates a new user
        this.email = email;
        this.name = name;
        this.score = 0; //initial score
    }
    login(){ 
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){ 
        console.log(this.email, 'just logged out'); 
        return this;
    }
    updateScore() { 
        this.score++; 
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User { 
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userOne = new User('sohil@email.com', 'sohil');
var userTwo = new User('sparkphotos@gmail.com','spark');
var admin = new Admin('sean@email.com', 'sean');

// the 'new' keyword
// creates a new empty object
// set the value of 'this' to be the new empty object
// calls the contructor method

var users = [userOne, userTwo, admin];
admin.deleteUser(userOne);


console.log(users);
