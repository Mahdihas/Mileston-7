console.log('first')
console.log('second')


let second = 0;
const setInvalid = setTimeout(() => {
    console.log(second++)
}, 500)
clearTimeout(setInvalid)


console.log('four');
console.log('fifts');