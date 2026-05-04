
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
