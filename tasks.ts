type CartItem = {
name: string;
price: number;
quantity?: number;
};


const cartItem = (item: CartItem) => {
    const {price, quantity = 1} = item ;
    return price * quantity; 
}



console.log(cartItem({name: "book", price: 400, quantity: 4}));


// task-2


// Intersection Types (&)

// type Person = { name: string; age: number };
// type JobDetails = { role: string; salary: number };

// type Employee = Person["name"] & JobDetails["role"] ;

// const getProfile = (employee: Employee) => {
//     return employee;
// }

// console.log(getProfile({name: "nakeb", role: "admin"}));



type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

const getProfile = (employee: Employee) => {
    return `Name: ${employee.name}, Role: ${employee.role}`;
}

const exp: Employee = {
    name: "Nakib",
    age: 23,
    role: "Developer",
    salary: 100000
}

// console.log(getProfile(exp));




const getProfile1 = (employee: Employee) => {
    const {name, role} = employee;
    return {Name: name, Role: role}
}

console.log(getProfile1(exp));
 

// task-3


// Concepts: Optional Chaining (?.), Nullish Coalescing (??)

type UserResponse = {
info?: {
address?: {
zipCode?: string;
}
}
};


const getZipCode = (user: UserResponse) => {
    return user.info?.address?.zipCode ?? "00000";
}


console.log(getZipCode({}));


// task-4

// Concepts: Type Assertion (as), unknown type


let secretValue: unknown = "typescript is awesome";

const upperValue = secretValue as string;

console.log(upperValue.toUpperCase());


// task-5

// Concepts: Generics, Extends Constraint

const logLength = <T extends {length: number}>(input: T) => {
    return input.length
}

console.log(logLength("TypeScript"));
console.log(logLength([1, 3, 4, 4]));
console.log(logLength({length: 5}));

