

document.getElementById('add').addEventListener('click', function () {
    
    const nameVield = document.getElementById('name');
    const value = nameVield.value;
    console.log(value)

    localStorage.setItem('name',value)
    nameVield.value=' '


})

document.getElementById('remove').addEventListener('click', function () {
    
   localStorage.removeItem('name')
 


})