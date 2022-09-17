
// 1 array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x,y)

const [x, y] = [42, 65];
// console.log(x,y);

const [p, t] = numbers;
// console.log(p,t)

const getVAlues = (num1,num2) => {
    const nums = [num1, num2];
    return nums;
    
}
const [first, second] = getVAlues(90, 45);;
// console.log(first,second);

const person = {
    name: 'salib khan',
    pashion: 'business',
    house: 'birshal',
    study: ['college', 'madrasa', 'university']
}

const [firstM, secondM] = ['college', 'madrasa', 'university'];
// console.log(firstM, secondM)

//2 Obj destructuring

const { name, age } = { name: 'alo', age: 14 };
// console.log(name,age);
const employ = {
    ide: 'vs code',
    designation: 'developer',
    machine: 'pc',
    language: ['html','css','javascript'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drinks: 'water',
        watch: {
            color: 'black',
            price:500,
        
        }
    },
   
};
const { machine, ide } = employ;
// console.log(machine, ide)
const { height, weight } = employ.specification;
// console.log(height,weight)
const { price, color } = employ?.specification?.watch;
console.log(price,color);

// optional changing use in api if anything don't have
