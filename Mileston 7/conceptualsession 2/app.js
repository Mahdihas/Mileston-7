
const inputValue = (id) => {
    
    const input = document.getElementById(id);
    const Value = input.value;
    input.value = ' '

    return Value;
}




  
const addProduct = () => {

    const product_name = inputValue('product-name');
    const product_quantity = inputValue('product-quantity');
    // console.log(product_name, product_quantity);
    const number = Number(product_quantity);
    // console.log(Number.isInteger(number));
    
    if (!isNaN(product_name) || !Number.isInteger(number)) {
        alert('vul diso')
        return;
    }
   
    // console.log(typeof Number(product_quantity));
    setProductInLocalStorage(product_name, product_quantity);
    // console.table(getLocalStorageData())
    // window.location.reload();
    display()
    
    
}


const getLocalStorageData = () => { 

    const products = localStorage.getItem('all-pro');
    const parseProduct = JSON.parse(products);
    return parseProduct;

}

const setProductInLocalStorage = (name, quantity) => {
    // console.log(name,quantity);

    //pore
    // const products = {
    //     name: name,
    //     quantity: quantity
    // }
    // localStorage.setItem('all-pro',JSON.stringify(products))

    let products = getLocalStorageData();
    // console.log(products)

    
    if (!products) {
        
        products = {};
    }


    if (products[name]) {
        products[name] = parseInt(products[name]) + parseInt(quantity);
    }
    else {
        products[name] = quantity;
    }

    if (quantity <= -1) {
        

       
        
    }
    // // console.log(products)

    // products.name = name;
    // products.quantity = quantity
    // console.log(products)

// this for show just  name and value
    // console.log(products);

    localStorage.setItem('all-pro',JSON.stringify(products))

}

const display = () => {
    
   const  products = getLocalStorageData();


    const section = document.getElementById('all-products');
    section.innerHTML = ' '
    for (const product in products) {
        console.log(product, products[product])
        
        const name = product;
        const quantity = products[product];

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="shadow-sm p-3 mb-2 bg-body rounded">
            <span class="fs-1">${name}</span>
            Quantity:<small class="fw-bold">
                ${quantity}
            </small>
        </div>
        
        `
        section.appendChild(div)
    }
 
}
display()