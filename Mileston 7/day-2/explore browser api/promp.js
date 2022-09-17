

const showAlert = () => {
    const num = Math.random() * 10;
    if (num < 5) {
     console.log(num  )
        alert('ki khobor dosto')

    }


}

const askSomething = () => {
    const decition = confirm('you are my girl friend');
    if (decition === true) {
        alert('I love you')
        
    }
    
}
const promise = () => {
    
    const name = prompt('tell us your name')
    if (!!name) {
        console.log('welcome here',name);
        
    }
}

