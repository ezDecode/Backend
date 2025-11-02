// Just the set of key value pair


const obj = {
    name: "Skie",
    age: 22
}

// Object.freeze(obj) // to freeze the object values

obj.age = 23
console.log(obj.name, obj.age);
