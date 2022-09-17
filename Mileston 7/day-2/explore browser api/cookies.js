
const getCookiesByName = (name)=>{
    
    const cookieString = document.cookie;
    const cooparse = cookieString.split('; ')
    
    const cookies = cooparse.find(c => c.includes(name));
    

    if (cookies) {
        const cookieValue = cookies.split('=')[1];
        return cookieValue
   }

}
getCookiesByName('country')