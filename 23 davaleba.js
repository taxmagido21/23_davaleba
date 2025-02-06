//1

// let user = {
//     name: "Mikheil",
//     age: 25,
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
// user.greet();

//2

// let now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());

//3

let person = {
    name: "Mikheil",
    age: 23,
    sayHi: function() {
        console.log("Hi, I am " + this.name);
    },
    myAge: function() {
        console.log("i am " + this.age, "years old");
    }
};
person.sayHi();
person.myAge();