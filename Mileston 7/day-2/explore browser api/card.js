

const getInputValueById = id => {
    
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value =  ' '

    return inputValue;
}

const addProduct = () => {

    const product = getInputValueById('product-name-field')

    const productquantity = getInputValueById('product-quantity-field')
    displayProduct(product, productquantity)
    
    saveItemToLocalStorage(product, productquantity)

    console.log(product);
    console.log(productquantity);
    localStorage.setItem(product,productquantity)
}



const getShoppingCardToLocalStorage = () => {
    
    let savecart = localStorage.getItem('cart');
    let cart = {};
    if (savecart) {
        cart = JSON.parse(savecart)
    }
    return cart
}
const saveItemToLocalStorage = (product, quantity) => {
    
    const cart = getShoppingCardToLocalStorage()
    // add product to the object as porperty
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart)
    // save to local storage

    localStorage.setItem('cart',cartStringify)


}


const displayProduct = (product,quantity) => {
    

    const porductContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText= `${product} : ${quantity}
    
 
    `

    porductContainer.appendChild(li)
}

const displayStoreProduct = () => {
    
    const cart = getShoppingCardToLocalStorage();

    for (product in cart) {
        const quantity = cart[product];
        console.log(product.quantity)
        displayProduct(product,quantity)


    }
}
displayStoreProduct()