//GLOBLE SCOPE
//question 1
var hi = "Hello";

//question 2
let name = "zunii";

//question 3
const birthYear = 2006;

//question 4
console.log(hi);
console.log(name);
console.log(birthYear);

//question 5
//All three variables can be accessed globally because they are declared outside any function or block. But var works with function scope, while let and const follow block scope.



//FUNCTION SCOPE
//question 1
function country() {
    var a = "turkiye";
}

//question 2
function age() {
    let b = 19;
}

//question 3
function city() {
    const c = "istanbul";
}

// //question 4
// console.log(a); 
// console.log(b); 
// console.log(c); 

//question 5
// The variables are not accessible outside the function because they are declared inside the function. The console shows an error.



//BLOCK SCOPE
//question 1
if (true) {
    var a = "cat";
}

//question 2
if (true) {
    let b = "dog";
}

//question 3
if (true) {
    const c = "bird";
}

//question 4   
console.log(a);
console.log(b);
console.log(c);

//question 5
// the variable declared with let inside the block is only available inside that block.



//HOISTING WITH VAR
//question 1
console.log(a);
var a = 15;

//question 1
// The output will be undefined because of hoisting. 



//HOISTING WITH LET AND CONST
//question 1
console.log(b);
let b = 10;

//question 2
console.log(c);
const c = 5;

//question 3
//ReferenceError Cannot access b before initialization



//REDECLARATION
//question 1
var country = "turkiye";
var country = "italy";

//question 2
let city = "istanbul";
let city = "rome";

//question 3
const continent = "europe";
const continent = "asia";

//question 4
//var allows redeclaration, while let and const do not and give an error.



//REASSIGNMENT
//question 1
var city = "Karachi";
city = "istanbul";

//question 2
let country = "Pakistan";
country = "Turkey";

//question 3
const continent = "Asia";
continent = "Europe";

//question 4
// The variable declared with const cannot be reassigned a new value. It will give an error 



// Temporal Dead Zone (TDZ): 
//question 1
{
    console.log(a);
    let a = 10;
}

//question 2
{
    console.log(b);
    const b = 20;
}

//question 3
// Both will give a ReferenceError because of the temporal dead zone. The variables are not accessible before they are declared and initialized.     



//When to use var, let, and const:
//question 1
function pet() {
    var name = "cat";
    console.log(name);
}
pet(); 

//question 2 
function favoriteColor() {
    let color = "blue";
    console.log(color);
}
favoriteColor();

//question 3
const studentName = "zunaira";
const className = "bs english 1";
console.log("Student Name:", studentName);
console.log("Class:", className);



//String Interpolation: 
//question 1
let firstName = "John";
let lastName = "Doe";

//question 2
const firstName = "zunaira";
const lastName = "asif";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);



//Multi-line Strings: 
//question 1
const jewellery = `earrings
necklace
ring
bracelet`;
console.log(jewellery);



//Simple Expressions: 
//question 1
let num1 =88;
let num2 = 65;

//question 2
let ans = `The sum is ${num1 + num2}`;

//question 3
console.log(ans);



//Function Calls: 
//question 1
function add(a, b) {
    return a + b;
}

//question 2
let result = `The sum is ${add(4, 5)}`;
console.log(result);



//Creating a Tagged Template: 
//question 1
function pet(cat) {
    console.log(cat);
}

//question 2
pet`My cat is cute`;



////Formatting: 
//question 1
function upper(text) {
    console.log(text[0].toUpperCase());
}

//question 2
upper`hello world`;



//Conditional Logic: 
//question 1
let hour = 5;

//question 2
if (hour < 12) {
    console.log(`Good Morning`);
} else {
    console.log(`Good Afternoon`);
}



//Loops within Template Literals: 
//question 1
const items = ["Milk", "Bread", "Eggs"];

//question 2
const list = `<ul>
<li>${items[0]}</li>
<li>${items[1]}</li>
<li>${items[2]}</li>
</ul>`;
console.log(list);



//Escaping Backticks: 
//question 1
const text = `She said, \`i want to meet you\``;

//question 2
console.log(text);



//  Nested Template Literals:
//question 1
let name = "Guriya";
let message = `Hello ${`Welcome ${name}`}`;

//question 2
console.log(message);



//simple conditions
//question 1
let age = 20;

//question 2
let canVote = age >= 18 ? "Yes" : "No";

//question 3
console.log(canVote);



//Even or Odd: 
//question 1
let number = 8;

//question 2
let evenOrOdd = number % 2 == 0 ? "Even" : "Odd";

//question 3
console.log(evenOrOdd);



//Grade Evaluation: 
//question 1
let score = 85;
let grade =
  score >= 90 ? "A" :
  score >= 80 ? "B" :
  score >= 70 ? "C" :
  score >= 60 ? "D" :
  score >= 50 ? "F" :
console.log(grade);



//login status 
//question 1
let isLoggedIn = true;

//question 2
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

//question 3
console.log(statusMessage);



//Discount Eligibility: 
//question 1
let isMember = true;
let purchaseAmount = 150;

//question 2
let discount = isMember && purchaseAmount > 100 ? 10 : 0;

//question 3
console.log(discount);



//Determine Max Value: 
//question 1
function maxValue(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

//question 2
console.log(maxValue(22, 15));



//Greeting Message: 
//question 1
function greet(name) {
    if (name) {
        return "Hello, " + name + "!";
    }
    return "Hello, guest!";
}

//question 2
console.log(greet("zunii"));
console.log(greet(""));



//Mapping Values: 
//question 1
let numbers = [1, 2, 3, 4];

//question 2
let result = numbers.map(num =>
    num % 2 == 0 ? num * 2 : num * 3
);

//question 3
console.log(result);



//filtering Values:
//question 1
let words = ["hi", "cat", "apple", "sun", "banana"];

//question 2
let result = words.filter(word => word.length > 3);

//question 3
console.log(result);



//coping an array
//question 1
let originalArray = [1, 2, 3];

//question 2
let copiedArray = [...originalArray];

//question 3
console.log(originalArray);
console.log(copiedArray);



//Merging Array
//question 1
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

//question 2
let mergedArray = [...array1, ...array2];

//question 3
console.log(mergedArray);



//Adding Elements to an Array:
//question 1
let numbers = [2, 3, 4];

//question 2
let updatedArray = [1, ...numbers, 5];

//question 3
console.log(updatedArray);



//Copying an Object: 
//question 1
const originalObject = {
    name: "zunaira",
    age: 19
};

//question 2
const copiedObject = { ...originalObject };

//question 3
console.log(originalObject);
console.log(copiedObject);



//Merging Objects:
//question 1
const object1 = {
    name: "zunaira",
    age: 19
};

const object2 = {
    age: 19,
    city: "Karachi"
};

//question 2
const mergedObject = { ...object1, ...object2 };

//question 3
console.log(mergedObject);



//Updating Object Properties: 
//question 1
const user = {
    name: "zunaira",
    age: 19,
    email: "zunaira1106@gmail.com"
};

//question 2
let updatedUser = {
    ...user,
    email: "petaljewels@gmail.com",
    address: "Karachi"
};

//question 3
console.log(updatedUser);



//Passing Array Elements as Arguments:
//question 1
function sum(a, b, c) {
    return a + b + c;
}

//question 2
let numbers = [1, 2, 3];

//question 3
console.log(sum(...numbers));



//Combining Multiple Arrays: 
//question 1
function combineArrays(...arrays) {
    return [...arrays[0], ...arrays[1], ...arrays[2]];
}

//question 2
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

//question 3
console.log(combineArrays(arr1, arr2, arr3));



//Rest Parameter with Spread Operator: 
//question 1
function multiply(num, ...others) {
    let result = [];

//question 2
    for (let i = 0; i < others.length; i++) {
        result[i] = num * others[i];
    }

//question 3
    return result;
}

//question 4
console.log(multiply(2, 1, 2, 3, 4));



//Spread Operator with Nested Structures: 
//question 1
let nestedArray = [[1, 2], [3, 4]];

//question 2
let copy = [...nestedArray];
copy[0][0] = 100;

//question 3
console.log(nestedArray);
console.log(copy);



//Sum function
//question 1
function sum(...numbers) {
    let total = 0;

//question 2
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

//question 3
console.log(sum(1, 2, 3, 4));



//Average function
//question 1
function average(...numbers) {
    let sum = 0;

//question 2
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
}

//question 3
console.log(average(29, 14));
console.log(average(13, 92, 33));



//first and rest 
//question 1
let numbers = [1, 2, 3, 4, 5];

//question 2
let [first, ...rest] = numbers;

//question 3
console.log(first);
console.log(rest);



//skip and rest 
//question 1
let colors = ["Red", "Blue", "Green", "Black", "Pink"];

//question 2
let [a, b, ...remainingColors] = colors;

//question 3
console.log(remainingColors);



//basic destructuring 
//question 1
const person = {
    name: "zunera",
    age: 19,
    email: "zunairaasif1106@gmail.com",
    address: "Karachi"
};

//question 2
const { name, email, ...rest } = person;

//question 3
console.log(name);
console.log(email);
console.log(rest);



//nested destructuring
//question 1
const student = {
    id: 1,
    name: "yildiz",
    grades: "B",
    info: {
        age: 21,
        major: "Social science"
    }
};

//question 2
const { id, name, info: { major }, ...rest } = student;

//question 3
console.log(id);
console.log(name);
console.log(major);
console.log(rest);



//Filter even number
//question 1
function filterEvenNumbers(...numbers) {
    return numbers.filter(num => num % 2 === 0);
}

//question 2
console.log(filterEvenNumbers(10, 23, 53, 26));



//Combine and Sort Arrays:
//question 1
function combineAndSort(...arrays) 

//question 2
{
    let combined = [].concat(...arrays);
    return combined.sort();
}

//question 3
console.log(combineAndSort([32, 31], [42, 45], [45, 62]));



//Basic destructing
//question 1
let fruits = ["strawberry", "banana", "dragonfruit"];

//question 2
let [firstFruit, secondFruit, thirdFruit] = fruits;

//question 3
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);



//Skiping elements 
//question 1
let colors = ["marchanta", "beige", "purple", "yellow"];

//question 2
let [primaryColor, , tertiaryColor] = colors;

//question 3
console.log(primaryColor);
console.log(tertiaryColor);



//Rest operator
//question 1
let numbers = [1, 2, 3, 4, 5];

//question 2
let [firstNumber, ...remainingNumbers] = numbers;

//question 3
console.log(firstNumber);
console.log(remainingNumbers);



//Basic destructing
//question 1
let person = {
    name: "huzaifa",
    age: 25,
    city: "Karachi"
};

//question 2
let { name, age, city } = person;

//question 3
console.log(name);
console.log(age);
console.log(city);



//Renaming Variables
//question 1
let car = {
    make: "lamborghini",
    model: "Aventador",
    year: 2025
};

//question 2
let { make: carMake, model: carModel, year: carYear } = car;

//question 3
console.log(carMake);
console.log(carModel);
console.log(carYear);



//Default values
//question 1
let settings = {
    theme: "dark"
};

//question 2
let theme = settings.theme;
let language = settings.language;
if (!language) {
    language = "English";
}

//question 3
console.log(theme);
console.log(language);



//Array of Arrays
//question 1
const nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];

//question 2
const [[a], [b], [c]] = nestedArray;

//question 3
console.log(a);
console.log(b);
console.log(c);



//object within an Object 
//question 1
const profile = {
    username: "baris",
    details: {
        email: "baris@gmail.com",
        address: "istanbul"
    }
};

//question 2
const { username, details: { email, address } } = profile;

//question 3
console.log(username);
console.log(email);
console.log(address);



//Mix of Arrays and Objects
//question 1
let data = {
    id: 1,
    info: [
        { name: "Alice" },
        { age: 25 }
    ]
};

//question 2
let { id, info: [{ name }, { age }] } = data;

//question 3
console.log(id);
console.log(name);
console.log(age);



//Array Parameters
//question 1
function printCoordinates([x, y]) {

//question 2
    console.log(x);
    console.log(y);
}

//question 3
printCoordinates([10, 20]);
printCoordinates([5, 15]);



//Object Parameters
//question 1
function displayUser({ name, age }) {

//question 2
    console.log(name);
    console.log(age);
}

//question 3
displayUser({ name: "hurrem", age: 29 });
displayUser({ name: "zuniii", age: 22 });



//List Property Names
//question 1
let book = {
    title: "Haunting Adeline",
    author: "H. D. Carlton",
    year: 2021
};

//question 2
let keys = Object.keys(book);

//question 3
console.log(keys);



//Count Properties
//question 1
let student = {
    name: "zunaira",
    age: 20,
    grade: "A",
    school: "Jinnah University"
};

//question 2
let keys = Object.keys(student);

//question 3
console.log(keys.length);



//Iterate over keys
//question 1
let product = {
    name: "corset",
    price: 5000,
    category: "fashion"
};

//question 2
let keys = Object.keys(product);

//question 3
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i], product[keys[i]]);
}



//List Property Values
//question 1
let movie = {
    title: "Aşk Tesadüfleri Sever",
    director: "Ömer Faruk Sorak",
    year: 2011,
    genre: "Romantic Drama"
};

//question 2
let values = Object.values(movie);

//question 3
console.log(values);



//Sum Values
//question 1
const scores = {
    math: 80,
    science: 90,
    english: 85
};

//question 2
const values = Object.values(scores);
const sum = values[0] + values[1] + values[2];

//question 3
console.log(sum);



//Iterate Over values 
//question 1
const user = {
    username: "yildiz",
    email: "yildiz@gmail.com",
    location: "turkey"
};

//question 2
const values = Object.values(user);
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}



//List Entries
//question 1
let car = {
    make: "BMW",
    model: "iX 2026",
    year: 2026
};

//question 2
let entries = Object.entries(car);

//question 3
console.log(entries);



//Convert Object to Array
//question 1
const person = {
    firstName: "zunaira",
    lastName: "asif",
    age: 19
};

//question 2
const arr = Object.entries(person);

//question 3
console.log(arr);



//Iterate Over Entries
//question 1
const settings = {
    theme: "dark",
    notifications: "on",
    privacy: "high"
};

//question 2
const entries = Object.entries(settings);
console.log(entries[0]);
console.log(entries[1]);
console.log(entries[2]);



//Filters keys 
//question 1
let inventory = {
    apples: 56,
    bananas: 25,
    oranges: 20,
    grapes: 34
};

//question 2
let keys = Object.keys(inventory);
let result = keys.filter(key => inventory[key] > 10);

//question 3
console.log(result);



//Swapping Keys and Values
//question 1
let roles = {
    admin: "ayesha",
    editor: "feriha",
    viewer: "asma"
};

//question 2
let swapped = Object.fromEntries(
    Object.entries(roles).map(item => [item[1], item[0]])
);

//question 3
console.log(swapped);



//Filter and Map
//question 1
let numbers = [1,2,3,4,5,6,7,8,9,10];

//question 2
const result = [];

//question 3
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        result.push(numbers[i] * numbers[i]);
    }
}

//question 4
console.log(result);



//Sort and Reduce
//question 1
let words = ["apple", "banana", "cherry", "date"];

//question 2
function sortAndReduce(arr) {
    let sorted = arr.sort();

//question 3
    let result = sorted.reduce((a, b) => a + b);
    return result;
}

//question 4
console.log(sortAndReduce(words));



//Simple Callback
//question 1
function greet(name, callback) {

//question 2
    callback("hellow " + name);
}

//question 3
function printGreeting(message) {
    console.log(message);
}

//question 4
greet("guest", printGreeting);



//Asynchronous Callback
//question 1
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched successfully!";
        callback(data);
    }
    , 2000);
}

//question 2
function displayData(data) {
    console.log(data);
}



//Simple Arrow Function:
//question 1
let add = (a, b) => a + b;

//question 2
console.log(add(3, 5));



//Arrow Function with array methods
//question 1
let numbers = [1, 2, 3, 4, 5];

//question 2
let result = numbers.map(num => num * num);

//question 3
console.log(result);



//Variable Scope
//question 1
function outer() {
    let x = 34;

//question 2
    function inner() {
        console.log(x);
    }

//question 3
    inner();
}

//question 4
outer();



//Closure
//question 1
function createCounter() {
    let count = 0;

//question 2
    return function () {
        count++;
        console.log(count);
    };
}

//question 3
let counter1 = createCounter();
let counter2 = createCounter();

//question 4
counter1();
counter1();
counter2();
counter2();



//Simple Default Parameters:
//question 1
function greet(name, message = "Hello") {

//question 2
    console.log(message, name);
}

//question 3
greet("ayesha");
greet("hurrem", "Hi");



//Default Parameters with Other Arguments
//question 1    
function calculateArea(width = 10, height = 5) {

//question 2
    return width * height;
}

//question 3
console.log(calculateArea());
console.log(calculateArea(4, 6));



//Square Numbers
//question 1
let numbers = [1, 2, 3, 4, 5];

//question 2
let result = numbers.map(num => num * num);

//question 3
console.log(result);



//Convert to Uppercase
//question 1
let words = ["apple", "banana", "cherry"];

//question 2
let result = words.map(word => word.toUpperCase());

//question 3
console.log(result);



//Filter even numbers
//question 1
const numbers = [1,2,3,4,5,6,7,8,9,10];

//question 2
const result = numbers.filter(num => num % 2 === 0);

//question 3
console.log(result);



//Filter long words
//question 1
let words = ["apple", "banana", "cherry", "date"];

//question 2
let result = words.filter(word => word.length > 6);

//question 3
console.log(result);



//Log Numbers
//question 1
let numbers = [1, 2, 3, 4, 5];

//question 2
numbers.forEach(num => {
    console.log(num);
});



//Log Word Lengths
//question 1
let words = ["apple", "banana", "cherry"];

//question 2
words.forEach(word => {
    console.log(word.length);
});



//Sum of Numbers
//question 1
let numbers = [1, 2, 3, 4, 5];

//question 2
let sum = numbers.reduce((total, num) => total + num);

//question 3
console.log(sum);



//Concatenate Strings
//question 1
let words = ["Hello", "world", "this", "is", "JavaScript"];

//question 2
let line = words.reduce((total, word) => total + " " + word);

//question 3
console.log(line);



//Check for Even Number
//question 1
let numbers = [1, 3, 5, 7, 8];
let result = false;

//question 2
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        result = true;
    }
}

//question 3
console.log(result);



// Check for Long Word
//question 1
let words = ["apple", "banana", "cherry", "date"];

//question 2
let result = words.some(word => word.length > 5);

//question 3
console.log(result);



//Check All Even Numbers
//question 1
let numbers = [2, 4, 6, 8, 10];

//question 2
let result = numbers.every(num => num % 2 === 0);

//question 3
console.log(result);



//Check All Long Words
//question 1
let words = ["elephant", "giraffe", "hippopotamus"];

//question 2
let result = words.every(word => word.length > 5);

//question 3
console.log(result);



//Find First Even Number
//question 1
let numbers = [1, 3, 5, 7, 8];

//question 2
let result = numbers.find(num => num % 2 === 0);

//question 3
console.log(result);



//Find Long Word
//question 1
let words = ["apple", "banana", "cherry", "date"];

//question 2
let result = words.find(word => word.length > 5);

//question 3
console.log(result);



//Find Index of First Even Number
//question 1
let numbers = [1, 3, 5, 7, 8];

//question 2
let result = numbers.findIndex(num => num % 2 === 0);

//question 3
console.log(result);



// Find Index of Long Word:
//question 1
let words = ["apple", "banana", "cherry", "date"];

//question 2
let result = words.findIndex(word => word.length > 5);

//question 3
console.log(result);



//Simple Promise:
//question 1
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//question 2
delay(2000).then(() => {
    console.log("Hello, world!");
});



//Promise Chain
//question 1
function fetchData() {
    return new Promise((resolve) => {
        resolve({
             name: "zunaira", 
             age: 19
     });
    });
}

//question 2
fetchData().then(data => {
    console.log(data);
});



//Error handling
//question 1
function fetchUserData() {
    return new Promise((resolve, reject) => {

        let user = { name: "Ali" }; 

        if (user.age) {
            resolve(user);
        } else {
            reject("Age missing");
        }

    });
}

//question 2
fetchUserData()
.then(data => {
    console.log(data);
})

//question 3
.catch(err => {
    console.log(err);
});