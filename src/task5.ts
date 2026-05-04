// Concepts: Generics, Extends Constraint

const logLength = <T extends {length: number}>(input: T) => {
    return input.length
}

console.log(logLength("TypeScript"));
console.log(logLength([1, 3, 4, 4]));
console.log(logLength({length: 5}));
