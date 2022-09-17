console.log('first')
console.log('second')


let second = 0;
const interValid = setInterval(() => {

    ++second
    console.log(second);


    // console.log(second++); we can 9 and star to 0
    if (second === 10) {
        clearInterval(interValid)
    }
},500)



console.log('four');
console.log('fifts');