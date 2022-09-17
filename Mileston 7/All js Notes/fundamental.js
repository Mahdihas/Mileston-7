

//1.how to declate a variable

const fatherName = 'shamim';
let daughterName = 'Munni';
daughterName = 'Sadia';
//2. console.log(daughterName);
// 6 basic condition < > >= <= == === !==
// multiple condition && , ||

if (fatherName === 'shamim' && daughterName === 'Munni') {
    // console.log('she is your daughter');
}
else if (fatherName === 'shamim' || daughterName === 'saida') {
    // console.log('sadia is your daughter')
}
else {
    // console.log('the hava no relation');
}

// 3. array
//index . lengthe .

const arr = [20, 30, 40, 50,];
const arr2 = ['mahdi', 'tuhin', 'mamun', 'zihad'];
// console.log(arr[3])
arr2[2] = 80
    // arr2.shift()
    // arr2.unshift('vilen')
    // console.log(arr2);

    //4. loop for , while , forEach , for in . for of.

    // simple for loop
    // for (let i = 0; i <= 10; i++){
    //     console.log(i);
    // }
    // simple while loop

    // let i = 0;
    // while ( i <= 10) {
    //     let loop = i;
    //     console.log(loop);
    //     i++;
    // }
    //loop in array length
for (let i = 0; i < arr.length; i++){
    let loop = arr[i];
    // console.log(loop)
}


// 5.function
//simple function
function addition(num1, num2) {
    const result = num1 * num2;
    return result;
    
}



//6. object
//3 ways to acces obj property
const person = {
    name: 'salib khan',
    pashion: 'business',
    house: 'birshal'
}

// for (let obj in person) {
//     console.log(obj)

// }
// person.name='tuhin'
//way 1
// console.log(person.name)
//way 2
const name = 'name';
// console.log(person['name'])

//way 3
// console.log(person[name])






