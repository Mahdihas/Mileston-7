
    let number = 1;

    let p = document.getElementById('p');
    const Number = localStorage.getItem('number')
if (Number) {
        p.innerText = Number
        
      }



const display = () => {
     
   




      number ++
  
       let Name = localStorage.setItem('number', number)
    
       p.innerText = localStorage.getItem('number')

    


    


}



// const getShoppingCardToLocalStorage = () => {
    
//     let savecart = localStorage.getItem('number');
//     let number = {};
//     if (savecart) {
//         number = JSON.parse(savecart)
//     }
//     return number
// }

//৩নম্বর লাইন এ কাউন্ট ডিক্লেয়ার না করে ৫নম্বর লাইন এ
//let count = localStorage.getItem('count');
//if(count) //যদি লোকাল স্টোরেজ এ কাউন্ট এর ভ্যালু থাকে
//{
//count = JSON.parse(count);
//count = parseInt(count)
//}
//else //যদি লোকাল স্টোরেজ এ কাউন্ট এর ভ্যালু না থাকে
//{
//count = 0;
//}
//count++;
//এইভাবে করার চেষ্টা করুন।