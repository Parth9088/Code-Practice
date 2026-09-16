// Create an object and print all its values.

function printObjectValues(obj) {
    for (let key in obj) {
        console.log(obj[key]);
    }
}       
const myObject = {
    name: "John",
    age: 30,
    city: "New York"
};  

printObjectValues(myObject);    
