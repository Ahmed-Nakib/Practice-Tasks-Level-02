// Concepts: Type Assertion (as), unknown type


let secretValue: unknown = "typescript is awesome";

const upperValue = secretValue as string;

console.log(upperValue.toUpperCase());
