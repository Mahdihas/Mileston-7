

const getInputValueById = id => {
    
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;

    return inputValue;
}
// send all
// const sendAll = () => {
     
//     const nameField = getInputValueById('name-field')
    
//     // const setStorage = localStorage.setItem('name', nameField)

//     const emailField      = getInputValueById('email-field');
//     // const setEmailStorage = localStorage.setItem('email', emailField)
//     const setM  = getInputValueById('massage-field');
//     // const setLM = localStorage.setItem('massage', setM);


// }
document.getElementById('send-all').addEventListener('click', function (event) {
    
      
    event.preventDefault();
    let name = getInputValueById ('name-field')
    let email =  getInputValueById('email-field')
    let massage =  getInputValueById('massage-field')
     
    if (!name || !email || !massage) {
        return;
    }


    let info = {
        name: name,
        email: email,
        massage: massage
    };


    localStorage.setItem('info', JSON.stringify(info));
   

    





})
 


// send all

const DisplayName = () => {
    const nameField  = getInputValueById('name-field')
    const setStorage = localStorage.setItem('name', nameField)
}
const displayEmail = () => {
    
    const emailField      = getInputValueById('email-field');
    const setEmailStorage = localStorage.setItem('email',emailField)
}

const displayM = () => {
    const setM  = getInputValueById('massage-field');
    const setLM = localStorage.setItem('massage', setM);
}

const displayDelete =() => {
    
    localStorage.removeItem('name')
}

const displayEDelete =() => {
    
    localStorage.removeItem('email')
}
const deleteM =() => {
    
    localStorage.removeItem('massage')
}

// reset 
const reset =() => {
    
   localStorage.clear()
}