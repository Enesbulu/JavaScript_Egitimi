/**
 * Döngüler -Loops
 * 1- For
 * 2- While
 * 3- Do-While
 * 4- ForEach
 */

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

let j = 0;

while (j <= 5) {
    console.log(j);
    j++;
}

let k = 0;

do {
    console.log(k);
    k++;
} while (k <= 5);

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(number));

// for...of loop

for (let number of numbers) {
    console.log(number);
}

// for...in loop

for (let key in numbers) {
    console.log(key, numbers[key]);
}

// for...of loop with objects

const person = {
    name: "Enes",
    age: 30,
    city: "Istanbul",
};

for (let key in person) {
    console.log(key, person[key]);
}

// for...of loop with arrays

const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

// for...of loop with strings

const str = "Hello, World!";

for (let char of str) {
    console.log(char);
    // char = char.toUpperCase();
    // console.log(char);
    // str = str.replace(char, "*");
    // console.log(str);
}

// for...of loop with custom objects

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    toString() {
        return `${this.make} ${this.model} ${this.year}`;
    }
}

let car = new Car("Toyota", "Corolla", 2021);

// for (let property of car) {
//     console.log(property);
// }

// for...of loop with arrays of custom objects

const cars = [
    new Car("Toyota", "Corolla", 2021),
    new Car("Honda", "Civic", 2020),
    new Car("Ford", "Mustang", 2022),
];

for (let car of cars) {
    console.log(car.toString());
}

// for...of loop with Map

const map = new Map([
    ["name", "Enes"],
    ["age", 30],
    ["city", "Istanbul"],
]);

for (let [key, value] of map) {
    console.log(key, value);
}

// for...of loop with Set

const set = new Set(["apple", "banana", "orange"]);

for (let item of set) {
    console.log(item);
}

// for...of loop with generator

function* generateNumbers() {
    for (let i = 0; i <= 5; i++) {
        yield i;
    }
}

const generator = generateNumbers();

for (let number of generator) {
    console.log(number);
}

// for...of loop with async/await

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

// for...of loop with Promise.all

let urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
];

Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
    .then((data) => {
        for (let item of data) {
            console.log(item);
        }
    })
    .catch((error) => console.error(error));
// .finally(() => console.log("Finished"));
// .catch((error) => console.error("Error:", error));
// .finally(() => console.log("Finished"));


// for...of loop with Promise.race
urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
];

Promise.race(urls.map((url) => fetch(url).then((response) => response.json())))

    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.error(error))
    .finally(() => console.log("Finished"))
    .catch((error) => console.error("Error:", error));

//.finally(() => console.log("Finished"));
//.catch((error) => console.error("Error:", error));
//.finally(() => console.log("Finished"));

// for...of loop with async/await and Promise.allSettled

async function fetchDataWithSettled() {
    try {
        const responses = await Promise.allSettled(
            urls.map((url) => fetch(url).then((response) => response.json()))
        );

        for (let response of responses) {
            if (response.status === "fulfilled") {
                console.log(response.value);
            } else {
                console.error(response.reason);
            }
        }
    } catch (error) {
        console.error(error);
    }
}

fetchDataWithSettled();

// for...of loop with async/await and Promise.any

async function fetchDataWithAny() {
    try {
        const response = await Promise.any(
            urls.map((url) => fetch(url).then((response) => response.json()))
        );

        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

fetchDataWithAny();

// for...of loop with async/await and Promise.race

async function fetchDataWithRace() {
    try {
        const response = await Promise.race(
            urls.map((url) => fetch(url).then((response) => response.json()))
        );

        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

fetchDataWithRace();

// for...of loop with async/await and Promise.all

async function fetchDataWithAll() {
    try {
        const responses = await Promise.all(
            urls.map((url) => fetch(url).then((response) => response.json()))
        );

        for (let response of responses) {
            console.log(response);
        }
    } catch (error) {
        console.error(error);
    }
}

fetchDataWithAll();

// for...of loop with async/await and Promise.allSettled

async function fetchDataWithAllSettled() {
    try {
        const responses = await Promise.allSettled(
            urls.map((url) => fetch(url).then((response) => response.json()))
        );

        for (let response of responses) {
            if (response.status === "fulfilled") {
                console.log(response.value);
            } else {
                console.error(response.reason);
            }
        }
    } catch (error) {
        console.error(error);
    }
}

fetchDataWithAllSettled();

