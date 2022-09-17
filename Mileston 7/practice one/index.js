

// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে
// তিন সেকেন্ড পরে আউটপুট দেখাবে। ,

function minute() {
    console.log("I'm a good man")
}
setTimeout(minute, 3050)


setTimeout(() => {
    console.log('hello ! bro . How are you?')

},3050)
 

//1 end

//2২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো।
//যোগ করতে গেলে parse করা লাগলে সেটা করো।
//তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও
// let user = prompt("please enter your email or password")
// if (user === Number) {
//     alert(Number+200)
    
// }
// var x = prompt("Enter a Value", "0");
// var num1 = parseInt(x);
// var num = num1 + 200;

//   alert(num)
//2 ends
// 3ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর
// লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর
// href জিনিসটা কনসোল লগ করে দেখাও

// let Local = confirm('do you wan"t to see your location')
// if (Local === true) {
//     document.write("<h2 style='color:green'>http://127.0.0.1:5500/practice%20one/index.html</h2>")
// }
// else{ document.write("<h2 style='color:green'>okay that's your dicition</h2>")}

// 3 ends
//4 ৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে
// লিখে ফেলো।
//HTTP cookies are essential to the modern Internet but a vulnerability to your
//privacy.As a necessary part of web browsing, HTTP cookies help web developers
//give you more personal, convenient website visits.Cookies let websites remember
//you, your website logins, shopping carts and more.But they can also be a
//treasure trove of private info for criminals to spy on.

//4 ends

//5 ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে।

//Their main difference is that local storage data does not expire, whereas session storage data gets cleared when the user closes its browser window.

//Page sessions are valid for only one tab at a time. So, if a user has three tabs open, each one will have its own page session.

//Since local storage is not session-based, all the data must be deleted via javascript or manually.
//ou can use it for data you want to store long term, even after the user has closed the tab or browser.

//Since session storage is only valid for one tab, you would use it when you want to store data that should not be accessible from other tabs.
//Conclusion
//In conclusion, local storage is best for storing data you want to keep long term, even after the user has closed the tab or browser.

//Session storage is best for storing temporary data or data that should only be accessible from one tab.
//
//5 ends

//6
//Callbacks
//Promises
//Async-await
//6 ends
