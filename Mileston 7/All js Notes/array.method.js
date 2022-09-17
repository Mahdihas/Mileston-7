
const products = [

    { name: 'laptop', price: 1200, brand: 'lanovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'Iphon3', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casoe', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'rabone', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canol', color: 'gray' }



    

];
// 1.map to get any  array of aobject property as an array . (here an array retured)
const brands = products.map(product => product.brand);
// console.log(brands)
const prices = products.map(product=> product.price);
// console.log(prices)

//2. forEach don't return
 
products.forEach(product => {
    // console.log(product.price)
})

//3. filter (give a conditon as conditon he give you the outpute) (return an array)

const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap)

const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName)


//4 . find (just give just one and first and also give you as an object) 

const specificNameF = products.find(product => product.name.includes('n'));
// console.log(specificNameF)

