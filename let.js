if (true) {
    let z = 20;
    console.log(z); // Output: 20
}
console.log(z); // ReferenceError: z is not defined (block-scoped)

let a = 30;
a = 40; // Works, as reassignment is allowed
console.log(a); // Output: 40
