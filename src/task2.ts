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
