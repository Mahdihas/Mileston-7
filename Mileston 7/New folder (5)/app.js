
const getInputValueById = (id) => {
    const Element = document.getElementById(id);
    const ElementValue = Element.value;
    Element.value = ' ';
    return ElementValue;

    
}



const addProduct = () => {
    
    const product_name     = getInputValueById('product-name');
    const product_quantity = getInputValueById('product-quantity');
    console.log(product_name, product_quantity)
    
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

const setProductInLocalStorage = (name,quantity) => {
    
    // const products = {
    //     name: name,
    //     quantity: quantity
    // }
    // localStorage.setItem('al-pro', JSON.stringify(products))

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

    if (quantity > -1) {
        products[name] = quantity;

       
        
    }
    else {
        products[name] = ' ';
    }

    localStorage.setItem('all-pro',JSON.stringify(products))



}

const display = () => {
    
    const  products = getLocalStorageData();
 
 
     const section = document.getElementById('all-products');
    section.innerHTML = ' ';
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




/*
**যা যা করতে হবে **

Product এর নাম এবং কোয়ান্টিটি ইনপুট ফিল্ড থেকে নিতে হবে।
ইনপুট ফিল্ড এর ভ্যালু ঠিক আছে কিনা চেঁক করে দেখতে হবে। (নাম স্ট্রিং এবং কোয়ান্টিটি নম্বর)
ইনপুট ফিল্ড এর ভ্যালু ঠিক না থাকলে এরর হ্যান্ডেল করতে হবে।
প্রোডাক্ট এর নাম এবং কোয়ান্টিটি লোকাল স্টোরেজ এ সেট করতে হবে।
লোকাল স্টোরেজ এর ডাটা কনসোল এ টেবিল ভিউ করে দেখাতে হবে।
লোকাল স্টোরেজ থেকে প্রোডাক্ট এর ডিটেইলস ওয়েবসাইট এ দেখাতে হবে।
প্রোডাক্ট আপডেট হলে অটো রিলোড করে কিভাবে ওয়েবসাইট এ আপডেট ভিউ দেখাতে হয়।
প্রোডাক্ট আপডেট হলে রিলোড না করে কিভাবে ওয়েবসাইট এ আপডেট ভিউ দেখাতে হয়।
প্রোডাক্ট এর কোয়ান্টিটি আপডেট করতে হবে।
*/