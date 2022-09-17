const arr = [20, 30, 40, 50,];
const person = {
    name: 'salib khan',
    pashion: 'business',
    house: 'birshal',
    study: ['college', 'madrasa', 'university']
}

//1 template string 
const about = `
 My Name is ${person.name}
 age : ${arr[2]}
 education: ${person.study[0]}
`;
// console.log(about);


// 2. arrow function

const number = (number) => number * 25;
// console.log(number(4))

const isEven = x => x % 2 === 0;
// console.log(isEven(5))
// multiple perameter
const multipleArrow = (x, y, z) => x + y + z;
// console.log(multipleArrow(5,5,5))

const multipleLine = (num1,num12) => {
    const sum = num1 + num12;
    return sum


}
// console.log(multipleLine(10,10));


// 3, Spread operator

arr.push(99)
arr.pop()
const newNumbers = [...arr];

// console.log(newNumbers)
// creat a new array from an older array and add an element

const currentNumber = [100,...arr, 55, 60]
// console.log(currentNumber)



//