

// const API_KEY ='54bb782024e10e4a8b43a6521298925d';

// const loadTemperature = async city => {
//     const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
//     try {
//         const res = await fetch(url)
//         const data = await res.json()
//         displayTemperature(data.main.temp)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const displayTemperature = data => {
//     // setInnerTextById('temp', data.main.temp);
//     // setInnerTextById('condition', data.weather[0].main);
//     console.log(data)
// }

// // const setInnerTextById = (id, text) => {
// //     const temperature = document.getElementById(id);
// //     temperature.innerText = text;
// // }

// // document.getElementById('btn-search').addEventListener('click', function(){
// //     const searchField = document.getElementById('input-field');
// //     const city = searchField.value;
// //     // Set city
// //     document.getElementById('city').innerText = city;
// //     loadTemperature(city);
// // })
// // loadTemperature('dhaka');
// loadTemperature('london')

const API_KEY = `9bc1c24a925e7094da7fbf2b6fb3a8c8`;
// Load Data by API
const loadTemperature = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayTemperature(data);
    } catch (error) {
        console.log(error);
    }
}

// Display Temperature
const displayTemperature = data => {
    setInnerTextById('temp', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
}

// Set Inner Text Function
const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

// Get Value Input Field by .value
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('input-field');
    const city = searchField.value;
    // Set city
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})


loadTemperature('dhaka');