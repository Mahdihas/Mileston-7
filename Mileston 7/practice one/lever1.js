
let name = 'sakib khan'
let age = 40
let Obj = {
    firstName: 'Abraham',
    LastName : 'Linkon'
}


let myCall = () => {
    
    const p = document.getElementById('p');
    let Name = localStorage.setItem('name', name)
    // let Age = localStorage.setItem('age',age)
    
    p.innerText = localStorage.getItem('name')

    const v = document.getElementById('v');
    let Var = localStorage.setItem('age', age);
    v.innerText = localStorage.getItem('age');

    //
    var jsonObject = { 'one': 1, 'two': 2, 'three': 3 };

// save the object into storage
   localStorage.setItem('jsonObj', JSON.stringify(jsonObject));

// Retrieve the object from storage
   var retrieveObject = localStorage.getItem('jsonObj');
   //
    const alo = document.getElementById('alo');
    
    alo.innerText = localStorage.getItem('jsonObj');
  
    
}

let button = () => {
    let p = document.getElementById('p')
    p.innerText = '';
    const v = document.getElementById('v');
    v.innerText = ' ';
    const alo = document.getElementById('alo');
    alo.innerText = ' '

    localStorage.clear()
}