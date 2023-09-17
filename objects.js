var userOne = {
    email: 'sohil@email.com',
    name: 'Sohil',
    login(){
        console.log(this.email, 'has logged in') //this is for this objects
    },
    logout(){ 
        console.log(this.email, 'has logged out');
    }
}; 

userOne.name = 'Spark'; 
