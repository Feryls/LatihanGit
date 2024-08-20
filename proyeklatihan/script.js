document.querySelector('h1').innerText = "Latihan JavaScript Selesai";

let name = "John";
const age = 30;

document.getElementById("output").innerHTML = "Name: " + name + "<br>Age: " + age + "<br><br>";

let fruits = ["Apple", "Banana", "Mango"];
document.getElementById("output").innerHTML += "Fruits: <br>";
for (let i = 0; i < fruits.length; i++) {
    document.getElementById("output").innerHTML += fruits[i] + "<br>";
}
document.getElementById("output").innerHTML += "<br>";

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
document.getElementById("output").innerHTML += "Person: " + person.firstName + " " + person.lastName + "<br><br>";

function cekNilai() {
    let userInput = document.getElementById("userInput").value;
    let outputDiv = document.getElementById("output");

    if (userInput > 10) {
        outputDiv.innerHTML += "Nilai lebih besar dari 10<br>";
    } else if (userInput == 10) {
        outputDiv.innerHTML += "Nilai sama dengan 10<br>";
    } else {
        outputDiv.innerHTML += "Nilai kurang dari 10<br>";
    }

    outputDiv.innerHTML += "Angka: <br>";
    for (let i = 1; i <= userInput; i++) {
        outputDiv.innerHTML += i + "<br>";
    }
    outputDiv.innerHTML += "<br>";
}

function greet(name) {
    return "Hello, " + name;
}

document.getElementById("output").innerHTML += greet("John") + "<br>";
document.getElementById("output").innerHTML += greet("Jane") + "<br>";
document.getElementById("output").innerHTML += greet("Doe") + "<br><br>";

function calculateSquare(number) {
    return number * number;
}

document.getElementById("output").innerHTML += "Square of 2: " + calculateSquare(2) + "<br>";
document.getElementById("output").innerHTML += "Square of 5: " + calculateSquare(5) + "<br>";
document.getElementById("output").innerHTML += "Square of 10: " + calculateSquare(10) + "<br><br>";

const sum = (a, b) => a + b;

document.getElementById("output").innerHTML += "Sum of 3 and 4: " + sum(3, 4) + "<br>";
document.getElementById("output").innerHTML += "Sum of 7 and 8: " + sum(7, 8) + "<br>";

let students = ["Alice", "Bob", "Charlie"];
students.push("David"); 

document.getElementById("output").innerHTML += "Students:<br>";
students.forEach(student => {
    document.getElementById("output").innerHTML += student + "<br>";
});
document.getElementById("output").innerHTML += "<br>";

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

document.getElementById("output").innerHTML += "Car Details:<br>";
for (let key in car) {
    document.getElementById("output").innerHTML += `${key}: ${car[key]}<br>`;
}
document.getElementById("output").innerHTML += "<br>";

let cars = [
    { brand: "Honda", model: "Civic", year: 2019 },
    { brand: "Ford", model: "Mustang", year: 2021 },
    { brand: "Chevrolet", model: "Malibu", year: 2018 }
];

document.getElementById("output").innerHTML += "Cars:<br>";
cars.forEach(car => {
    document.getElementById("output").innerHTML += `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}<br>`;
});