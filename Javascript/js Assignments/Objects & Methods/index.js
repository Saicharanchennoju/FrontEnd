//How do you create an object car with properties like brand, model, and year and access them to print their values?
let car = {
    brand: "Toyota",
    model : "Corolla",
    year : 2020
  };
  
  console.log(car.brand);
  console.log(car.model);
  console.log(car.year);

  //How can you add properties to an empty object person and then delete a specific property?

  let person = {}
person.firstName = "Saicharan";
person.lastName = "Chennoju";
person.age = 23;

delete person.age;

console.log(person);
console.log(person.lastName);

//What approach would you use to check if a specific property exists in an object like book

let book = {
    title : "Js",
    author : "Ankit Sir"
  }
  
  function hasProperty (obj , prop){
    return prop in obj;
  }
  
  console.log(hasProperty(book,"title"));
  console.log(hasProperty(book, "year"));

  //How can you iterate through all properties of an object student and print their key-value pairs?

  let student = {
    name : "puneeth",
    age : 21,
    grade : "A"
  };
  
  for(let key in student) {
    // console.log(student);
    console.log(key, student[key]);
  }

  //How do you write a function that counts the number of properties in an object?

  function countProperties(obj) {
    let count = 0;
    for (let key in obj){
      count++;
    }
    return count;
  }
  
  let user = {
    name :"Sai",
    age : 21,
    IsAdmin : true
  };
  
  console.log(countProperties(user));

//How can you add methods like add and subtract to an object calculator that use its properties to perform calculations?

let calculator = {
    num1 :10,
    num2 :5,
    add(){
      return this.num1 + this.num2;
    },
    subtract(){
      return this.num1 - this.num2;
    }
  };
  
  console.log(calculator.add());
  console.log(calculator.subtract());

  // What steps are involved in cloning an object user into a new object?
  
  let User = {
    name: "Sai",
    age: 21
  };
  
  function cloneObject(obj) {
    let clone = {};
    for (let key in obj) {
      clone[key] = obj[key];
    }
    return clone;
  }
  
  let userClone = cloneObject(User);
  console.log(userClone); 

  // Write a function createUser that creates a user object with properties name, age, and a default role of "user" if not provided.

  function createUser(name, age, role = "user") {
    return {
      name: name,
      age: age,
      role: role
    };
  }
  
  let newUser = createUser("Chotu", 21);
  console.log(newUser); 


  // Create an object company with properties name and employees (an array of objects, each representing an employee with name and position).

  let company = {
    name: "Accenture",
    employees: [
      { name: "saicharan", position: "Developer" },
      { name: "puneeth", position: "Designer" }
    ]
  };
  
  console.log(company.employees[0].name);   
  console.log(company.employees[1].position);  

  
  // Given the object salaries below, write a function that sorts the keys by their corresponding values and returns the sorted array of keys.

  let salaries = {
    sai:150
    Rakesh:200
    Ramesh: 300
  };
  
  function sortSalaries(obj) {
    return Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  }
  
  console.log(sortSalaries(salaries));
  
  //Create an object user with properties name, age, and city. Destructure the object to extract the properties into separate variables.

  let user2 = {
    name: "Rakesh"
    age: 21,
    city: "Hyderabad"
  };
  
  let { name, age, city } = user2;
  
  console.log(name);  
  console.log(age);   
  console.log(city);

// Create an object settings with properties theme, fontSize, and language. Use Object.freeze() to prevent modifications, then try to change a property and log the object to verify it hasn’t changed.

let settings = {
  theme: "dark",
  fontSize: "15px",
  language: "en"
};

Object.freeze(settings);

settings.theme = "light"; 
console.log(settings);  

// Use Object.entries() to convert the following object scores into an array of key-value pairs.

let scores = {
  math: 80,
  english: 90,
  science: 95
};

let scoreEntries = Object.entries(scores);
console.log(scoreEntries); 


// Create an object rectangle with properties width and height, and a method area that calculates and returns the area using this.

let rectangle = {
  width: 10,
  height: 5,
  area() {
    return this.width * this.height;
  }
};

console.log(rectangle.area());  

// Arrays , Functions 
// Write a function that takes a number as input and returns its factorial using a for loop.

function factorial(a){
  if (a<0){
    return "factorial is not found!"
  }
  let result =1;
  for(let i=1;i<=a;i++){
    result = result*i;
  }
  return result;
}

console.log(factorial(5));

// Create a function to check if a given number is prime. Use a loop to perform the check.

function isPrime(a){
  if (a<=1){
    return "not a prime number..!"
  }
  for(let i=2;i<=Math.sqrt(a);i++){
    if(a%i==0){
      return "not a prime"
    }
  }
  return "prime"
}
console.log(isPrime(5));

// Write a loop to print all even numbers between 1 and 50.

for(let i=1;i<=50;i++){
  if(i%2==0){
    console.log(i);
  }
}

// Write a function to calculate the sum of all numbers in an array using a loop.

function calculate(a){
  sum = 0;
  for(let i=0;i<a.length;i++){
    sum = sum+a[i];
  }
  return sum;
}
const array = [1,2,3,4,5];
console.log(calculate(array));

// Use a loop to reverse a string provided as input. 

function Reverse(a){
  let reverse = "";
  for(let i = a.length-1;i>=0;i--){
    reverse = reverse + a[i];
  }
  return reverse;
}

console.log(Reverse("Hello"));

//Write a function that generates the Fibonacci sequence up to a given number of terms.

function fibonacci(n){
    if(n<=0){
      return;
    }
    let a=0,b=1;
    console.log(a);
    if(n==1)
      return;
      console.log(" "+b);
    for(let i=2;i<n;i++){
      const next = a+b;
      console.log(next);
      a=b;
      b=next;
    }
  }
 
  console.fibonacci(10);
 

// Use nested loops to print the following pattern:

for(let i=0;i<=5;i++){
  let s="";
  for(let j=1;j<=i;j++){
    s=s+"*";
  }
  console.log(s);
}

// Write a function that takes an array of numbers and returns the largest number using a loop.

function largestnumber(a){
  if(a.length==0){
    return null;
  }
  let largest=a[0];
  for(let i=1;i<a.length;i++){
    if(a[i]>largest){
      largest = a[i];
    }
  }
  return largest;
}

const array1 = [1,2,3,4,5,6]
console.log(largestnumber(array1));

// Implement a function to count the number of vowels in a given string.

function vowels(a){
  count = 0;
  const vowel = "aeiouAEIOU";
  for(let i=0;i<a.length;i++){
    if(vowel==a[i]){
      count++;
    }
  }
  return count;
}

console.log(vowels("Hello"));