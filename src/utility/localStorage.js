const getCart = () => {
    const storedItems = localStorage.getItem(`my-items`);
    if(storedItems){
        return JSON.parse(storedItems);
    }
    return [];
}

const addPurchaseToCart = (id) => {
    const storedItems = getCart()
    const exist = storedItems.find(index=> index == id);
    if(exist == undefined){
        storedItems.push(id);
        localStorage.setItem("my-items",JSON.stringify(storedItems));
        return "ok"
    }
    return "already"
}
export { getCart, addPurchaseToCart}