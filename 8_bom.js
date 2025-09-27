//browser object manipulation

alert("are you like this page!!!")

let value = prompt("enter you age")

if(value>=18){
    confirm(`you are ${value} year old and elegible for votting `)
    window.location.href = "https://www.umangdhandhukiya.me/"
}

else{
    alert("sorry not elegible")
}

// window.history.back();

console.log(navigator.userAgent);

console.log("Screen width: " + screen.width);
console.log("Screen height: " + screen.height);
console.log("Viewport width: " + window.innerWidth);
console.log("Browser window width: " + window.outerWidth);
