// task-1

type CartItem = {
name: string;
price: number;
quantity?: number;
};


const cartItem = (item: CartItem) => {
    const {price, quantity = 1} = item ;
    return price * quantity; 
}

// console.log(cartItem({name: "book", price: 400, quantity: 4}));








// task-2

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

// console.log(getProfile1(exp));







 

// task-3

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


// console.log(getZipCode({}));






// task-4

let secretValue: unknown = "typescript is awesome";
const upperValue = secretValue as string;

// console.log(upperValue.toUpperCase());






// task-5

const logLength = <T extends {length: number}>(input: T) => {
    return input.length
}

// console.log(logLength("TypeScript"));
// console.log(logLength([1, 3, 4, 4]));
// console.log(logLength({length: 5}));






// task-6

const getProductProp = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key]
}


const product = { id: 101, name: "Keyboard", price: 50 };

// console.log(getProductProp(product, "id"));
// console.log(getProductProp(product, "name"));





// task-7

const Colors = {
Primary: "RED",
Secondary: "BLUE"
} as const;

type ValidColor = typeof Colors[keyof typeof Colors]

const setColor = (c : ValidColor) => {
    if(c === "RED" || c === "BLUE"){
        console.log(`Color st to ${c}`);
    }else{
        console.log('Invalid color');
        
    }
    
}

// setColor("RED");
// setColor("BLUE");
// setColor("WHITE");






// task-8

interface MyDocument {
title: string;
content: string;
author: string;
}

type Draft<T> = {
readonly [P in keyof T]?: T[P];
};
const myDraft: Draft<MyDocument> = { title: "Draft 1" };

// console.log(myDraft);





// Task 9

type DataType<T> = T extends any[] ? "Large" : "Small";

type A = DataType<string[]>; // "Large"
type B = DataType<number>;   // "Small"





// Task 10

interface UserAccount {
    id: number;
    username: string;
    password: string;
}

type PublicUser = Omit<UserAccount, "password">;

const user: PublicUser = {
    id: 1,
    username: "nakib"
};