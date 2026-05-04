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


